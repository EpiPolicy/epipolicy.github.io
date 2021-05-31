---
layout: page
title: Decision
permalink: /decision/
---

### 1. Strict signature vs loose signature

All matrices in Epipolicy has unique signature in their dimensions:
- State matrix: $$c \times l \times g$$
- Locale matrix: $$g \times l \times l$$
- Facility matrix: $$l \times f \times g$$
- Contact matrix: $$l \times f \times g \times g$$
- Parameter matrix: $$p \times l \times f \times g$$

#### Strict signature:

This approach requires all selectors to contain the exact dimensional format of the matrix. For example:
- All susceptible population of UAE:
<pre>{'compartment':'S', 'locale':'*', 'group':'*'}</pre>

#### Loose signature:

This approach does not require to have exact dimensional format. It instead assumes the missing dimensions to contain all their values. For example:
- All susceptible population of UAE:
<pre>{'compartment':'S'}</pre>

In a sense, loose signature is an additional feature to strict signature to simplify some of the common expressions. However, we need to define required signature in each of the matrix so that we can identify which matrix this selector is referring to.

#### Required-signature for Loose Signature Approach:
Required signature for each matrix:
- State matrix: requires compartment regex
<pre>{'compartment':'*'}</pre>
- Locale matrix: requires 2 locales regexes
<pre>{'locale-from':'*', 'locale-to':'*'}</pre>
- Facility matrix: requires 1 facility regex:
<pre>{'facility':'*'}</pre>
- Contact matrix: requires 2 group regexes:
<pre>{'group-from':'*', 'group-to':'*'}</pre>
- Parameter matrix: require 1 parameter regex:
<pre>"{'parameter':'*'}</pre>

### 2. Strict locale-from, locale-to vs Loose locale-from, locale-to

Consider intervention A where we want to close border between Abu Dhabi and all other emirates, intervention B where we want to encourage people to move out of Abu Dhabi i.e. reducing the time spending within Abu Dhabi.

#### Strict locale-from, locale-to

- Intervention A:
<pre>{'locale-from':'UAE.AbuDhabi', 'locale-to':'~UAE.AbuDhabi'}<br>{'locale-from':'~UAE.AbuDhabi', 'locale-to':'UAE.AbuDhabi'}</pre>
- Intervention B:
<pre>{'locale-from':'UAE.AbuDhabi', 'locale-to':'UAE.AbuDhabi'}</pre>

#### Loose locale-from, locale-to

- Intervention A:
<pre>{'locale-from':'UAE.AbuDhabi', 'locale-to':'*'}<br>{'locale-from':'*', 'locale-to':'UAE.AbuDhabi'}</pre>
- Intervention B:
<pre>{'locale-within':'UAE.AbuDhabi'}</pre>

#### So what is the difference?

Strict locale-from, locale-to approach uses the exact from-set and to-set of locales.

For example, let's say locale-from={A,B}, locale-to={A,C}

Then the edge set will be {(A,A), (A,C), (B,A), (B,C)}

Loose locale-from, locale-to approach does the same but remove the (X,X) edges i.e.

The edge set will be {(A,C), (B,A), (B,C)}

In the case of "locale-within={A,B,C}", the edge set will be {(A,A), (B,B), (C,C)}

### 3. Object return vs Array return vs Scalar return

In Epipolicy, the select function will return results related to a selector. Let's say we want to select all populations in Abu Dhabi that is susceptible.
<pre>result = sim.select({'compartment':'S', 'locale':'UAE.AbuDhabi', 'group':'*'})</pre>

#### Object return

Return an json-styled object

Examples:
<pre>print(result['S']['UAE.AbuDhabi'])</pre><pre><code>{
  'Children':10,
  'Adults':20,
  'Seniors':30
}</code></pre>
<pre>print(result)</pre>
<pre><code>{
  'S':{
    'UAE.AbuDhabi':{
      'Children':10,
      'Adults':20,
      'Seniors':30
    }
  }
}</code></pre>

#### Array return

Return a multi-dimensional array with the names of its dimension

<pre>print(result.array[0][0])</pre>
<pre>[10, 20, 30]</pre>
<pre>print(result.names)</pre>
<pre><code>[
  ['S'],
  ['UAE.AbuDhabi'],
  ['Children', 'Adults', 'Seniors']
]</code></pre>

#### Scalar return

In very rare situation do users want to find the individual values. Instead, they want to look at a sum of values of the selector. For example, in an intervention like border closure that triggers when the susceptible population is below some threshold.

Instead of return an object or a whole array, we return a scalar that is most representative of the selector.
<pre>print(result)</pre>
<pre>60</pre>

- For state matrix: the representative value is the sum of all values in the selector
<pre># Current population of UAE<br>sim.select({'compartment':{'tags':~Death}}) </pre>
- For other matrices: the representative value is the average of all values in the selector
<pre># Average transmission rate in household of UAE <br>sim.select({'parameter':'beta', 'facility':'Household'}) </pre>

To get individual values, use a more selective selector. For example, to find out the number of children that is susceptible in Abu Dhabi, simply:
<pre>result = sim.select({'compartment':'S', 'locale':'UAE.AbuDhabi', 'group':'Children'})</pre>

To accomplish the above example of Object return and Array return:
<pre><code>groups = ['Children', 'Adults', 'Seniors']
for group in groups:
  result = sim.select({'compartment':'S', 'locale':'UAE.AbuDhabi', 'group':group})</code></pre>

However, users still have to manually enter the list of groups. We can compensate this by providing special selectors:
<pre>groups = sim.select({'attribute':'groups'})</pre>

### 4. Implicit vs Explicit control parameter

#### Explicit

<pre><code>def effect(control_parameters):
    degree = control_parameters['degree']
    sim.apply({'locale-from':'UAE.*', 'locale-to':'UAE.*', 'group':'*'}, 1-degree)</code></pre>

#### Implicit

Control parameter's names are reserved inside effect/cost function

<pre><code>def effect():
    sim.apply("type:border locale:UAE.* locale:UAE.* group:*", 1-degree)</code></pre>

### 5. Code import vs List import

In vaccination intervention, different locales can have different vaccine capacity. Let's say we have two locales A and B with capacity of 300 and 500 respectively (in reality we can have as many as 1000 locales).

#### Code import

<pre><code>def effect(control_parameters):
    administration_rate = control_parameters['administration_rate']
    locales = ['A', 'B']
    capacity = [300, 500]
    for i, locale in enumerate(locales):
      sim.move({'compartment':'S', 'locale':locale},
              {'compartment':'V', 'locale':locale},
              capacity[i]*administration_rate)</code></pre>

#### List import

Required UI:

![CP](https://epipolicy.github.io/assets/cp.png)

<pre><code>def effect(control_parameters):
    administration_rate = control_parameters['administration_rate']
    capacity = control_parameters['capacity']
    locales = sim.select({'attribute':'locales'})
    for i, locale in enumerate(locales):
      sim.move({'compartment':'S', 'locale':locale},
              {'compartment':'V', 'locale':locale},
              capacity[i]*administration_rate)</code></pre>

The imported list can be 2D, 3D array. This will allow customization of control parameters in many dimensions especially time-dependent control parameters.

### 6. Replication behavior vs Equal Partition behavior vs Uniform Partition behavior

When we do the above vaccination, the transition is moving 300 susceptible people in locale A to vaccinated. However, there are groups in locale A. How do we know how many people in each group is moving?

#### Replication behavior
We simply replicate and moving 300 susceptible children, 300 susceptible adults, 300 susceptible seniors in locale A to vaccinated (in total 900)

#### Equal Partition behavior
We want to maintain the sum of 300 and hence we equally partition and moving 100 susceptible children, 100 susceptible adults, 100 susceptible seniors in locale A to vaccinated.

#### Uniform Partition behavior
We still want to maintain the sum of 300. However, the partition number depends on the ratios of the alive population in A. For example, if A has 10% children, 80% adults and 10% seniors, then we move 30 susceptible children, 240 susceptible adults, 30 susceptible seniors in locale A to vaccinated.

### 7. Schedule UI for control parameters

#### Should we show vaccination capacity in each locale in the schedule UI?

#### If not, then how do we know which control parameters should be shown in the schedule?

#### There seems to be two types of control parameters: an influential type and a constant type. In the above example, administration_rate is an influential type since its affect the capacities in all locales while capacity is a constant type.

### 8.Schedule/Intervention regex

<pre>sim.select({'intervention':'vaccination', <br>'control_parameters':'administration_rate'})</pre>

<pre>sim.select({'attribute':'current_day'})</pre>

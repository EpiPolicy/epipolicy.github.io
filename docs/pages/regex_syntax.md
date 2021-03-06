
**EpiPolicy** uses special syntax to allow users to describe their interventions and policies.
This article provides an introduction to **EpiPolicy**'s special syntax.

## 1. Locale syntax

A typical locale hierarchy in **EpiPolicy** can be identified in multiple levels of administration. For example, consider a 3-level hierarchy: country, state, county in the US. To identify Bronx county of New York state, the following syntax is used:

<pre>{'locale':'UnitedStates.NewYork.Bronx'}</pre>

**EpiPolicy** makes it easy to identify all counties in a state or multiple states by the *all* symbol "*":

- All counties in the US
<pre>{'locale':'UnitedStates.*'}</pre>
- All counties in New York state:
<pre>{'locale':'UnitedStates.NewYork.*'}</pre>
- All counties in New York state and New Jersey state:
<pre>{'locale':'UnitedStates.NewYork.*,UnitedStates.NewJersey.*'}</pre>

Furthermore, we can use *negate* symbol "~" to identify counties that are not in the set:

- All counties that are not in New York state:
<pre>{'locale':'~UnitedStates.NewYork.*'}</pre>
- All counties that are not in New York state and not in New Jersey state:
<pre>{'locale':'~(UnitedStates.NewYork.*, UnitedStates.NewJersey.*)'}</pre>

## 2. Compartment syntax

Examples:
- All compartments:
<pre>{'compartment':'*'}</pre>
- All compartments that are alive:
<pre>{'compartment':'~Death'}</pre>

In addition, **Epipolicy** also provides for each compartment a set of tags that it may belong to. For example, Hsev "Severe with hospitalization" compartment can have two tags: infectious and hospitalized. By referring to the tags, users can identify a set of compartments that belong to such tags.

Examples:
- All compartments that are susceptible:
<pre>{'compartment':{'tags':'susceptible'}}</pre>
- All compartments that are infectious but not hospitalized:
<pre>{'compartment':{'tags':'infectious,~hospitalized'}}</pre>

## 3. Group syntax

Examples:
- All groups:
<pre>{'group':'*'}</pre>
- All groups that are not children:
<pre>{'group':'~Children'}</pre>

## 4. Facility syntax
Examples:
- All facilities:
<pre>{'facility':'*'}</pre>
- All facilities that are not household:
<pre>{'facility':'~Household'}</pre>

## 5. Parameter syntax
Examples:
- Transmission parameter:
<pre>{'parameter':'beta'}</pre>

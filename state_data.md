---
layout: page
title: State Data
permalink: /state-data/
---

# State data
A typical Epipolicy compartmental model will have <code>c</code> compartments, <code>p</code> parameters. These parameters include all the transition rates such as incubation rate, transmission rate as well as epidemiological parameters such as probability of death, probability of developing symptoms.

Furthermore, the model will have <code>l</code> locales, <code>f</code> facilities, <code>g</code> groups.

### 1. State matrix

State matrix <code>S</code> has <code>c x l x g</code> entries where <code>S[c<sub>1</sub>, l<sub>1</sub>, g<sub>1</sub>]</code> is the current population of group <code>g<sub>1</sub></code> of locale <code>l<sub>1</sub></code> in compartment <code>c<sub>1</sub></code>

##### Requirements:

- $$ S[c_1, l_1, g_1] \geq 0 $$

### 2. Locale matrix

Locale matrix <code>L</code> has <code>g x l x l</code> entries where <code>L[g<sub>1</sub>, l<sub>1</sub>, l<sub>2</sub>]</code> is the percentage of time the group <code>g<sub>1</sub></code> of locale <code>l<sub>1</sub></code> will spend in locale <code>l<sub>2</sub></code>

##### Requirements:

- $$ L[g_1, l_1, l_2] \in [0, 1] $$
- $$ \sum_{l_2=0}^{l-1} L[g_1, l_1, l_2] = 1 $$

The second requirement implies that whenever an entry is changed, other entries are normalized so that their sum remains 1. For example, children spend 40% at household, 35% at school, 25% at public space. A school closure policy implies that their time at school is 0%. By normalizing other entries, children now spend $\frac{0.4}{0.4+0.25} \approx 61.5%$ at household and $\frac{0.25}{0.4+0.25} \approx 38.5%$.

### 3. Facility matrix

Facility matrix <code>F</code> has <code>l x f x g</code> entries where <code>F[l<sub>1</sub>, f<sub>1</sub>, g<sub>1</sub>]</code> is the percentage of time the group <code>g<sub>1</sub></code> in locale <code>l<sub>1</sub></code> will spend in its facility <code>f<sub>1</sub></code>

##### Requirements:

- $$ F[l_1, f_1, g_1] \in [0, 1] $$
- $$ \sum_{f_1=0}^{f-1} F[l_1, f_1, g_1] = 1 $$

### 4. Contact matrix

Contact matrix <code>C</code> has <code>l x f x g x g</code> entries where <code>C[l<sub>1</sub>, f<sub>1</sub>, g<sub>1</sub>, g<sub>2</sub>]</code> is the percentage of time the group <code>g<sub>1</sub></code> in facility <code>f<sub>1</sub></code> of locale <code>l<sub>1</sub></code> will interacting with group <code>g<sub>2</sub></code> in an effective disease-transmissive manner.

##### Requirements:

- $$ C[l_1, f_1, g_1, g_2] \in [0, 1] $$
- $$ \sum_{g_2=0}^{g-1} C[l_1, f_1, g_1, g_2] \leq 1 $$

The second requirement implies that even though the total percentage of time interacting with other groups can be 100%, not all of that will be effective for disease transmission. For example, considering household as a relatively small network of interaction compared to public space. This implies that interactions in household are less likely to be transmissive all the time.

To guarantee the the second requirement, the same normalization is applied when the sum of interactions is greater than 1

### 5. Parameter matrix

Parameter matrix <code>P</code> has <code>p x l x f x g</code> entries where <code>P[p<sub>1</sub>, l<sub>1</sub>, f<sub>1</sub>, g<sub>1</sub>]</code> is the parameter <code>p<sub>1</sub></code> applied in facility <code>f<sub>1</sub></code> of locale <code>l<sub>1</sub></code> to group <code>g<sub>1</sub></code>

Examples include:
- Parameters can vary in different locales such as transmission rate in locales with different population density.
- Parameters can vary in different facilities such as household and public space when mask is required. In other words, mask is wore in public space but not in household.
- Parameters can vary in different groups such as probability of developing symptoms where seniors are more likely than adults.

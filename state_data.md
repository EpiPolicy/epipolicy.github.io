---
layout: page
title: State Data
permalink: /state-data/
---

A typical **Epipolicy** compartmental model will have $$c$$ compartments, $$p$$ parameters. These parameters include all the transition rates such as incubation rate, transmission rate as well as epidemiological parameters such as probability of death, probability of developing symptoms.

Furthermore, the model will have $$l$$ locales, $$f$$ facilities, $$g$$ groups.

### 1. State matrix

State matrix $$S$$ has $$c \times l \times g$$ entries where $$S[c_1, l_1, g_1]$$ is the current population of group $$g_1$$ of locale $$l_1$$ in compartment $$c_1$$


##### Requirements:

- <div class="left-formula">$$ S[c_1, l_1, g_1] \geq 0 $$</div>

### 2. Locale matrix

Locale matrix $$L$$ has $$g \times l \times l$$ entries where $$L[g_1, l_1, l_2]$$ is the percentage of time the group $$g_1$$ of locale $$l_1$$ will spend in locale $$l_2$$ due to human mobility

##### Requirements:

<div class="left-formula" markdown="1">
- $$ L[g_1, l_1, l_2] \in [0, 1] $$
- $$ \sum_{l_2=0}^{l-1} L[g_1, l_1, l_2] = 1 $$
</div>

The second requirement implies that whenever an entry is changed, other entries are normalized so that their sum remains 1. For example, children spend 40% at household, 35% at school, 25% at public space. A school closure policy implies that their time at school is 0%. By normalizing other entries, children now spend $$\frac{0.4}{0.4+0.25} \approx 61.5%$$ at household and $$\frac{0.25}{0.4+0.25} \approx 38.5%$$.

### 3. Facility matrix

Facility matrix $$F$$ has $$l \times f \times g$$ entries where $$F[l_1, f_1, g_1]$$ is the percentage of time the group $$g_1$$ in locale $$l_1$$ will spend in its facility $$f_1$$

##### Requirements:

<div class="left-formula" markdown="1">
- $$ F[l_1, f_1, g_1] \in [0, 1] $$
- $$ \sum_{f_1=0}^{f-1} F[l_1, f_1, g_1] = 1 $$
</div>

### 4. Contact matrix

Contact matrix $$C$$ has $$l \times f \times g \times g$$ entries where $$C[l_1, f_1, g_1, g_2]$$ is the percentage of time the group $$g_1$$ in facility $$f_1$$ of locale $$l_1$$ will interacting with group $$g_2$$ in an effective disease-transmissive manner.

##### Requirements:

<div class="left-formula" markdown="1">
- $$ C[l_1, f_1, g_1, g_2] \in [0, 1] $$
- $$ \sum_{g_2=0}^{g-1} C[l_1, f_1, g_1, g_2] \leq 1 $$
</div>

The second requirement implies that even though the total percentage of time interacting with other groups can be 100%, not all of that will be effective for disease transmission. For example, considering household as a relatively small network of interaction compared to public space. This implies that interactions in household are less likely to be transmissive all the time.

To guarantee the the second requirement, the same normalization is applied when the sum of interactions is greater than 1

### 5. Parameter matrix

Parameter matrix $$P$$ has $$p \times l \times f \times g$$ entries where $$P[p_1, l_1, f_1, g_1]$$ is the parameter $$p_1$$ applied in facility $$f_1$$ of locale $$l_1$$ to group $$g_1$$

Examples include:
- Parameters can vary in different locales such as transmission rate in locales with different population density.
- Parameters can vary in different facilities such as household and public space when mask is required. In other words, mask is wore in public space but not in household.
- Parameters can vary in different groups such as probability of developing symptoms where seniors are more likely than adults.

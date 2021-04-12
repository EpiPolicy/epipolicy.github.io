A typical **Epipolicy** compartmental model will have <div class="latex">c</div> compartments, <div class="latex">p</div> parameters. These parameters include all the transition rates such as incubation rate, transmission rate as well as epidemiological parameters such as probability of death, probability of developing symptoms.

Furthermore, the model will have <div class="latex">l</div> locales, <div class="latex">f</div> facilities, <div class="latex">g</div> groups.

### 1. State matrix

State matrix <div class="latex">S</div> has <div class="latex">c \times l \times g</div> entries where <div class="latex">S[c_1, l_1, g_1]</div> is the current population of group <div class="latex">g_1</div> of locale <div class="latex">l_1</div> in compartment <div class="latex">c_1</div>


#### Requirements:

- <div class="latex">S[c_1, l_1, g_1] \geq 0</div>

### 2. Locale matrix

Locale matrix <div class="latex">L</div> has <div class="latex">g \times l \times l</div> entries where <div class="latex">L[g_1, l_1, l_2]</div> is the percentage of time the group <div class="latex">g_1</div> of locale <div class="latex">l_1</div> will spend in locale <div class="latex">l_2</div> due to human mobility

#### Requirements:

<div class="left-formula" markdown="1">
- <div class="latex">L[g_1, l_1, l_2] \in [0, 1]</div>
- <div class="latex"> \sum_{l_2=0}^{l-1} L[g_1, l_1, l_2] = 1 </div>
</div>

The second requirement implies that whenever an entry is changed, other entries are normalized so that their sum remains 1. For example, children spend 40% at household, 35% at school, 25% at public space. A school closure policy implies that their time at school is 0%. By normalizing other entries, children now spend <div class="latex">\frac{0.4}{0.4+0.25} \approx 61.5%</div> at household and <div class="latex">\frac{0.25}{0.4+0.25} \approx 38.5%</div>.

### 3. Facility matrix

Facility matrix <div class="latex">F</div> has <div class="latex">l \times f \times g</div> entries where <div class="latex">F[l_1, f_1, g_1]</div> is the percentage of time the group <div class="latex">g_1</div> in locale <div class="latex">l_1</div> will spend in its facility <div class="latex">f_1</div>

#### Requirements:

<div class="left-formula" markdown="1">
- <div class="latex"> F[l_1, f_1, g_1] \in [0, 1] </div>
- <div class="latex"> \sum_{f_1=0}^{f-1} F[l_1, f_1, g_1] = 1 </div>
</div>

### 4. Contact matrix

Contact matrix <div class="latex">C</div> has <div class="latex">l \times f \times g \times g</div> entries where <div class="latex">C[l_1, f_1, g_1, g_2]</div> is the percentage of time the group <div class="latex">g_1</div> in facility <div class="latex">f_1</div> of locale <div class="latex">l_1</div> will interacting with group <div class="latex">g_2</div> in an effective disease-transmissive manner.

#### Requirements:

<div class="left-formula" markdown="1">
- <div class="latex"> C[l_1, f_1, g_1, g_2] \in [0, 1] </div>
- <div class="latex"> \sum_{g_2=0}^{g-1} C[l_1, f_1, g_1, g_2] \leq 1 </div>
</div>

The second requirement implies that even though the total percentage of time interacting with other groups can be 100%, not all of that will be effective for disease transmission. For example, considering household as a relatively small network of interaction compared to public space. This implies that interactions in household are less likely to be transmissive all the time.

To guarantee the the second requirement, the same normalization is applied when the sum of interactions is greater than 1

### 5. Parameter matrix

Parameter matrix <div class="latex">P</div> has <div class="latex">p \times l \times f \times g</div> entries where <div class="latex">P[p_1, l_1, f_1, g_1]</div> is the parameter <div class="latex">p_1</div> applied in facility <div class="latex">f_1</div> of locale <div class="latex">l_1</div> to group <div class="latex">g_1</div>

Examples include:
- Parameters can vary in different locales such as transmission rate in locales with different population density.
- Parameters can vary in different facilities such as household and public space when mask is required. In other words, mask is wore in public space but not in household.
- Parameters can vary in different groups such as probability of developing symptoms where seniors are more likely than adults.

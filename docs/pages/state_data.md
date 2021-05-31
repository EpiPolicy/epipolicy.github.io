A typical **Epipolicy** compartmental model will have <tex>c</tex> compartments, <tex>p</tex> parameters. These parameters include all the transition rates such as incubation rate, transmission rate as well as epidemiological parameters such as probability of death, probability of developing symptoms.

Furthermore, the model will have <tex>l</tex> locales, <tex>f</tex> facilities, <tex>g</tex> groups.

### 1. State matrix

State matrix <tex>S</tex> has <tex>c \times l \times g</tex> entries where <tex>S[c_1, l_1, g_1]</tex> is the current population of group <tex>g_1</tex> of locale <tex>l_1</tex> in compartment <tex>c_1</tex>


#### Requirements:

- <latex-line-left>S[c_1, l_1, g_1] \geq 0</latex-line-left>

### 2. Locale matrix

Locale matrix <tex>L</tex> has <tex>g \times l \times l</tex> entries where <tex>L[g_1, l_1, l_2]</tex> is the percentage of time the group <tex>g_1</tex> of locale <tex>l_1</tex> will spend in locale <tex>l_2</tex> due to human mobility

#### Requirements:

- <tex>L[g_1, l_1, l_2] \in [0, 1]</tex>
- <tex> \sum_{l_2=0}^{l-1} L[g_1, l_1, l_2] = 1 </tex>

The second requirement implies that whenever an entry is changed, other entries are normalized so that their sum remains 1. For example, children spend 40% at household, 35% at school, 25% at public space. A school closure policy implies that their time at school is 0%. By normalizing other entries, children now spend <tex>\frac{0.4}{0.4+0.25} \approx 61.5%</tex> at household and <tex>\frac{0.25}{0.4+0.25} \approx 38.5%</tex>.

### 3. Facility matrix

Facility matrix <tex>F</tex> has <tex>l \times f \times g</tex> entries where <tex>F[l_1, f_1, g_1]</tex> is the percentage of time the group <tex>g_1</tex> in locale <tex>l_1</tex> will spend in its facility <tex>f_1</tex>

#### Requirements:

- <tex> F[l_1, f_1, g_1] \in [0, 1] </tex>
- <tex> \sum_{f_1=0}^{f-1} F[l_1, f_1, g_1] = 1 </tex>

### 4. Contact matrix

Contact matrix <tex>C</tex> has <tex>l \times f \times g \times g</tex> entries where <tex>C[l_1, f_1, g_1, g_2]</tex> is the percentage of time the group <tex>g_1</tex> in facility <tex>f_1</tex> of locale <tex>l_1</tex> will interacting with group <tex>g_2</tex> in an effective disease-transmissive manner.

#### Requirements:

- <tex> C[l_1, f_1, g_1, g_2] \in [0, 1] </tex>
- <tex> \sum_{g_2=0}^{g-1} C[l_1, f_1, g_1, g_2] \leq 1 </tex>

The second requirement implies that even though the total percentage of time interacting with other groups can be 100%, not all of that will be effective for disease transmission. For example, considering household as a relatively small network of interaction compared to public space. This implies that interactions in household are less likely to be transmissive all the time.

To guarantee the the second requirement, the same normalization is applied when the sum of interactions is greater than 1

### 5. Parameter matrix

Parameter matrix <tex>P</tex> has <tex>p \times l \times f \times g</tex> entries where <tex>P[p_1, l_1, f_1, g_1]</tex> is the parameter <tex>p_1</tex> applied in facility <tex>f_1</tex> of locale <tex>l_1</tex> to group <tex>g_1</tex>

Examples include:
- Parameters can vary in different locales such as transmission rate in locales with different population density.
- Parameters can vary in different facilities such as household and public space when mask is required. In other words, mask is wore in public space but not in household.
- Parameters can vary in different groups such as probability of developing symptoms where seniors are more likely than adults.

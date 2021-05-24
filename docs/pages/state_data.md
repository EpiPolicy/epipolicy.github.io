A typical **Epipolicy** compartmental model will have <latex>c</latex> compartments, <latex>p</latex> parameters. These parameters include all the transition rates such as incubation rate, transmission rate as well as epidemiological parameters such as probability of death, probability of developing symptoms.

Furthermore, the model will have <latex>l</latex> locales, <latex>f</latex> facilities, <latex>g</latex> groups.

### 1. State matrix

State matrix <latex>S</latex> has <latex>c \times l \times g</latex> entries where <latex>S[c_1, l_1, g_1]</latex> is the current population of group <latex>g_1</latex> of locale <latex>l_1</latex> in compartment <latex>c_1</latex>


#### Requirements:

- <latex-line-left>S[c_1, l_1, g_1] \geq 0</latex-line-left>

### 2. Locale matrix

Locale matrix <latex>L</latex> has <latex>g \times l \times l</latex> entries where <latex>L[g_1, l_1, l_2]</latex> is the percentage of time the group <latex>g_1</latex> of locale <latex>l_1</latex> will spend in locale <latex>l_2</latex> due to human mobility

#### Requirements:

- <latex>L[g_1, l_1, l_2] \in [0, 1]</latex>
- <latex> \sum_{l_2=0}^{l-1} L[g_1, l_1, l_2] = 1 </latex>

The second requirement implies that whenever an entry is changed, other entries are normalized so that their sum remains 1. For example, children spend 40% at household, 35% at school, 25% at public space. A school closure policy implies that their time at school is 0%. By normalizing other entries, children now spend <latex>\frac{0.4}{0.4+0.25} \approx 61.5%</latex> at household and <latex>\frac{0.25}{0.4+0.25} \approx 38.5%</latex>.

### 3. Facility matrix

Facility matrix <latex>F</latex> has <latex>l \times f \times g</latex> entries where <latex>F[l_1, f_1, g_1]</latex> is the percentage of time the group <latex>g_1</latex> in locale <latex>l_1</latex> will spend in its facility <latex>f_1</latex>

#### Requirements:

- <latex> F[l_1, f_1, g_1] \in [0, 1] </latex>
- <latex> \sum_{f_1=0}^{f-1} F[l_1, f_1, g_1] = 1 </latex>

### 4. Contact matrix

Contact matrix <latex>C</latex> has <latex>l \times f \times g \times g</latex> entries where <latex>C[l_1, f_1, g_1, g_2]</latex> is the percentage of time the group <latex>g_1</latex> in facility <latex>f_1</latex> of locale <latex>l_1</latex> will interacting with group <latex>g_2</latex> in an effective disease-transmissive manner.

#### Requirements:

- <latex> C[l_1, f_1, g_1, g_2] \in [0, 1] </latex>
- <latex> \sum_{g_2=0}^{g-1} C[l_1, f_1, g_1, g_2] \leq 1 </latex>

The second requirement implies that even though the total percentage of time interacting with other groups can be 100%, not all of that will be effective for disease transmission. For example, considering household as a relatively small network of interaction compared to public space. This implies that interactions in household are less likely to be transmissive all the time.

To guarantee the the second requirement, the same normalization is applied when the sum of interactions is greater than 1

### 5. Parameter matrix

Parameter matrix <latex>P</latex> has <latex>p \times l \times f \times g</latex> entries where <latex>P[p_1, l_1, f_1, g_1]</latex> is the parameter <latex>p_1</latex> applied in facility <latex>f_1</latex> of locale <latex>l_1</latex> to group <latex>g_1</latex>

Examples include:
- Parameters can vary in different locales such as transmission rate in locales with different population density.
- Parameters can vary in different facilities such as household and public space when mask is required. In other words, mask is wore in public space but not in household.
- Parameters can vary in different groups such as probability of developing symptoms where seniors are more likely than adults.

# State data
A typical Epipolicy compartmental model will have <code>c</code> compartments, <code>p</code> parameters. These parameters include all the transition rates such as incubation rate, transmission rate as well as epidemiological parameters such as probability of death, probability of developing symptoms.

Furthermore, the model will have <code>l</code> locales, <code>f</code> facilities, <code>g</code> groups.

### 1. State matrix

State matrix <code>S</code> has <code>c x l x g</code> entries where <code>S[c<sub>1</sub>, l<sub>1</sub>, g<sub>1</sub>]</code> is the current population of group <code>g<sub>1</sub></code> of locale <code>l<sub>1</sub></code> in compartment <code>c<sub>1</sub></code>

### 2. Locale matrix

Locale matrix <code>L</code> has <code>g x l x l</code> entries where <code>L[g<sub>1</sub>, l<sub>1</sub>, l<sub>2</sub>]</code> is the percentage of time the group <code>g<sub>1</sub></code> of locale <code>l<sub>1</sub></code> will spend in locale <code>l<sub>2</sub></code>

##### Requirements:

- <code>L[g<sub>1</sub>, l<sub>1</sub>, l<sub>2</sub>]</code>

![formula]https://render.githubusercontent.com/render/math?math=a^b

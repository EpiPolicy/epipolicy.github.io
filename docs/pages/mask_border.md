The config file for this tutorial is available [here](https://epipolicy.github.io/assets/SIRMB.json).

In this tutorial, we will try to implement mask and border closure with SIRS model considering that:
- Mask only applies to public places such as school, workplace, community
- Border closure is restricting movement between two locales.

### Model page

- A standard SIRS system is used
- Immunity-loss period is 33 days on average

<img src="https://epipolicy.github.io/assets/SIRMB.png" alt="model-parameters" width="1200"/>  

### Locale page

We choose administrative level 1 for the United Provinces which consists of 3 locales:
- UnitedProvinces.Pastures
- UnitedProvinces.Hills
- UnitedProvinces.Beaches

<img src="https://epipolicy.github.io/assets/SIRMB-locale.png" alt="model-parameters" width="1200"/>  

### Group page

We create 3 groups using [GPWv4 data](https://sedac.ciesin.columbia.edu/data/collection/gpw-v4):
- Children (age 0-19)
- Adults (age 20-49)
- Seniors (age 50+)

<img src="https://epipolicy.github.io/assets/SIRMB-group.png" alt="model-parameters" width="1200"/>  

### Facility page

We create 4 facilities using [Synthpop data](https://github.com/InstituteforDiseaseModeling/synthpops) and the interaction/time spent of each group in each facility:
- Household
- School
- Workplace
- Community

<img src="https://epipolicy.github.io/assets/SIRMB-facility.png" alt="model-parameters" width="1200"/>  

### Mobility page

The mobility matrix is premade with customizable values.

<img src="https://epipolicy.github.io/assets/SIRMB-mobility.png" alt="model-parameters" width="1200"/>

### Intervention page

#### Effect of mask
Mask reduces at most 70% transmission rate when 100% of the population is complied. Mask is only enforced at public places such as school, workplace, etc but not household.

Tip:
- Using "~" before a facility's name to identify facilities that does not have that name.


```python
def effect(cp, locales):
    sim.apply({'parameter':'beta', 'facility':'~Household', 'locale':locales}, 1-cp['compliance']*0.7)
```

#### Effect of border closure

Border closure with 100% degree will restrict all movement from one locale to another.

```python
def effect(cp, locales):
    sim.apply({'locale-from':locales, 'locale-to':'~'+locales, 'group':'*'}, 1-cp['degree'])
    sim.apply({'locale-from':'~'+locales, 'locale-to':locales, 'group':'*'}, 1-cp['degree'])
```

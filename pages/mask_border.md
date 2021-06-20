The config file for this tutorial is available [here](/assets/SIRMB.json).

In this tutorial, we will try to implement mask and border closure with an SIRS model considering that:
- Mask-wearing  applies only to public places such as school, workplace, community
- Border closure is the restriction of movement between two locales.

### Model page

- A standard SIRS system is used
- Immunity-loss period is 33 days on average

<figure>
    <img src="/assets/SIRMB.png" alt="model-parameters"/>  
</figure>

### Locale page

We choose administrative level 1 for the United Provinces which consists of 3 locales:
- UnitedProvinces.Pastures
- UnitedProvinces.Hills
- UnitedProvinces.Beaches

<figure>
    <img src="/assets/SIRMB-locale.png" alt="model-parameters"/>  
</figure>

### Group page

We create 3 groups using [GPWv4 data](https://sedac.ciesin.columbia.edu/data/collection/gpw-v4):
- Children (age 0-19)
- Adults (age 20-49)
- Seniors (age 50+)

<figure>
    <img src="/assets/SIRMB-group.png" alt="model-parameters" />  
</figure>

### Facility page

We create 4 facilities using [Synthpop data](https://github.com/InstituteforDiseaseModeling/synthpops) and the interaction/time spent of each group in each facility:
- Household
- School
- Workplace
- Community

<figure>
    <img src="/assets/SIRMB-facility.png" alt="model-parameters"/>  
</figure>

### Mobility page

The mobility matrix is premade with customizable values.

<figure>
    <img src="/assets/SIRMB-mobility.png" alt="model-parameters"/>
</figure>

### Intervention page

#### Effect of mask
Mask-wearing reduces the transmission rate by at most at most 70% when 100% of the population complies. Mask compliance is enforced only at public places such as school, workplace, etc but not household.

Tip:
- Using "~" before a facility's name to identify a facility that does not have that name. [Dennis asks that you give motivation for this. Why would one do this?]


```python
def effect(cp, locales):
    sim.apply({'parameter':'beta', 'facility':'~Household', 'locale':locales}, 1-cp['compliance']*0.7)
```

#### Effect of border closure

Border closure at degree 100%  will restrict all movement from one locale to another.

```python
def effect(cp, locales):
    sim.apply({'locale-from':locales, 'locale-to':'~'+locales, 'group':'*'}, 1-cp['degree'])
    sim.apply({'locale-from':'~'+locales, 'locale-to':locales, 'group':'*'}, 1-cp['degree'])
```

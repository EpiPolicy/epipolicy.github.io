The config file for this tutorial is available [here](/assets/SIRV12.json).

In this tutorial, we  implement a two-dose vaccination scheme with SIRS model. Specifically, the ODE (ordinary differential equation) system that describes our model is:

<img src="/assets/SIRV12-equations.png" alt="model-parameters" width="300"/>  

### Model page

- Anyone in the one-dose compartment <tex>V_1</tex> is 50% less likely to be infected while anyone in the two-dose compartment <tex>V_2</tex> is immune to the disease.
- The transition rate <tex>v_1</tex> from <tex>S</tex> to <tex>V_1</tex> is <tex>0</tex> because we want to model the vaccination by direct transition rather than the transition rate.
- The transition rate <tex>v_2</tex> from <tex>V_1</tex> to <tex>V_2</tex> is <tex>0.0476 \approx \frac{1}{21}</tex> implying that the duration between the first dose and the second dose is 21 days on average.

<img src="/assets/SIRV12.png" alt="model-parameters" width="1200"/>  

### Intervention page

#### Effect of vaccination
<tex> </tex> **EpiPolicy** provides <tex>sim.move(C_1, C_2, x)</tex> to directly move <tex>x</tex> number of compartment <tex>C_1</tex> to <tex>C_2</tex>

```python
def effect(cp, locales):
    sim.move({'compartment':'S', 'locale':locales}, {'compartment':'V1', 'locale':locales}, cp['degree']*cp['max_capacity'])
```

#### Cost of vaccination

<tex> </tex> **EpiPolicy** provides <tex>sim.add(I_1, c)</tex> to add <tex>c</tex> cost to the intervention <tex>I_1</tex>

```python
def cost(cp, locales):
    doses = cp['degree']*cp['max_capacity']
    sim.add({"intervention":"Vaccination", 'locale':locales}, doses*cp['price_per_dose'])
```

### Cost page

#### Cost of infectious

<tex> </tex> **EpiPolicy** provides <tex>sim.select(C_1)</tex> to return a [Pandas data frame](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.html) that represents the selected compartment <tex>C_1</tex>

For example, a user who selects all compartments in Abu Dhabi would receive the following Pandas data frame:

```text
  Compartment                       Locale Group         Value
0           S  UnitedArabEmirates.AbuDhabi   All  13827.536313
1           I  UnitedArabEmirates.AbuDhabi   All     55.247320
2           R  UnitedArabEmirates.AbuDhabi   All  4294.536313
3           V1 UnitedArabEmirates.AbuDhabi   All  0
4           V2 UnitedArabEmirates.AbuDhabi   All  0
```

In our example, To select the sum of all infectious compartments, we can identify the compartment either as "I" or as having tagged "infectious". We do the later approach.

Tip:
- Since we want to sum the column "Value" of our Pandas data frame X, we can simply call ```X['Value'].sum()```


```python
def cost(cp):
    infCount = sim.select({'compartment':'{"tag":"infectious"}'})['Value'].sum()
    sim.add({"intervention":"Infectious_cost"}, infCount*cp['cost_per_day'])
```

### Schedule page

In the schedule page, we create a vaccination program starting from March 2021 to May 2021.

<img src="/assets/SIRV12-schedule.png" alt="model-parameters" width="1200"/>  

### Initialize page

In the initialize page, we create a simulation starting with 100 infectious people.

<img src="/assets/SIRV12-initialize.png" alt="model-parameters" width="1200"/>  

### Compare page

Epipolicy allows user to compare different scenarios. Below is the comparison of the vaccinated scenario and a non-vaccinated scenario in which we simply remove the schedule of the vaccination:

<img src="/assets/SIRV12-compare.png" alt="model-parameters" width="1200"/>  

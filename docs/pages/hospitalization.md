The config file for this tutorial is available [here](https://epipolicy.github.io/assets/HSIRD.json).

In this tutorial, we will try to implement a hospitalization with SIR model considering the hospital capacity that limits the hospitalized compartment. Specifically, the ODE system that describes our model is:

<img src="https://epipolicy.github.io/assets/HSIRD-equations.png" alt="model-parameters" width="400"/>  

### Model page

- The mortality rate of hospitalized compartment is 10 times lower than that of infectious compartment. (1% versus 10%).
- A person who is not admitted to hospital will spend 33 days to recover on average
- A person who is admitted to hospital (after 8 days on average) will spend 20 days to recover.

<img src="https://epipolicy.github.io/assets/HSIRD.png" alt="model-parameters" width="1200"/>  

### Intervention page

#### Effect of hospital capacity
<latex> </latex> We should make change to the hospitalization rate <latex>i_h</latex> such that the number of hospitalization is not above the capacity. We observe that the number of transition from <latex>I</latex> to <latex>H</latex> is approximately <latex>i_h I</latex>. The new rate can be computed as <latex>\frac{\text{left-over capacity}}{I} = \frac{\text{current capacity} - H}{I}</latex>

<latex> </latex> **EpiPolicy** provides <latex>sim.apply(P_1, m)</latex> that applies a multiplicative factor <latex>m</latex> to the default value of the paramater <latex>P_1</latex>. Hence we compute <latex>m</latex> as <latex>\frac{\text{new }i_h}{\text{default }i_h}</latex>

Tip:
- If <latex>X</latex> is a [Pandas data frame](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.html), then ```X['Value'].mean()``` will be the average of column 'Value'
- Use "value-mode":'default' to select the default value
- Use "value-mode":'current' to select the current value (if no mode is selected, then the current value will be returned)


```python
def effect(cp, locales):
    hosCount = sim.select({'compartment':'H'})['Value'].sum()
    infCount = sim.select({'compartment':'I'})['Value'].sum()
    defaultIh = sim.select({'parameter':'ih', 'value-mode':'default'})['Value'].mean()
    if infCount > 0:
        ih = (cp['capacity'] - hosCount) / infCount
        ih = min(max(ih, 0), defaultIh)
        sim.apply({"parameter":"ih"}, ih/defaultIh)
```

### Cost page

#### Cost of death

Cost of death is different from cost of infectious since death cost is a one-time cost while infectious cost is recurring as long as we stay in infectious compartment.

Tip:
- Use "value-mode":'change' to select the change of value of a compartment


```python
def cost(cp):
    deathInc = sim.select({'compartment':'D', 'value-mode':'change'})['Value'].sum()
    sim.add({"intervention":"Death_cost"}, deathInc*cp['cost_per_death'])
```

### Schedule page

In the schedule page, we create an increase in hospital capacity (from 100000 to 400000) starting in March 2021

<img src="https://epipolicy.github.io/assets/HSIRD-schedule.png" alt="model-parameters" width="1200"/>  


### Compare page

Below is the comparison of the increasing hospital scenario and a non-increasing scenario (hospital capacity stays at 100000):

<img src="https://epipolicy.github.io/assets/HSIRD-compare.png" alt="model-parameters" width="1200"/>  

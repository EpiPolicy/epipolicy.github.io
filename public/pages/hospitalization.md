The config file for this tutorial is available [here](/assets/hospitalization/HSIRD.json).

In this tutorial, we build an SIR model including hospitalization where hospitals have capacity limits. Specifically, the ODE (ordinary differential equation) system that describes our model is:

<texb>
\begin{array}{lcl} \frac{dS}{dt} & = & - \beta \frac{SI}{N} \\
\frac{dI}{dt} & = & \beta \frac{SI}{N} - i_h I - r_i d_i I - r_i (1-d_i) I \\
\frac{dR}{dt} &= & r_i (1-d_i) I + r_h (1-d_h) H \\
\frac{dH}{dt} &=& i_h I - r_h d_h H - r_h (1-d_h) H \\
\frac{dD}{dt} &=& r_i d_i I +  r_h d_h H \end{array}
</texb>

### Model page

- The mortality rate of the hospitalized compartment is 10 times lower than that of infectious compartment. (1% versus 10%).
- A person who is not admitted to hospital will spend 33 days to recover on average
- A person who is admitted to hospital (after 8 days on average) will spend 20 days to recover. [Dennis asks whether this is a total or 20 more days]

<figure>
    <img src="/assets/hospitalization/HSIRD.png" alt="model-parameters" />  
</figure>

### Intervention page

#### Effect of hospital capacity
We must adjust the hospitalization rate <tex>i_h</tex> to ensure that the number of people hospitalized is not above the capacity. We observe that the number of transition from <tex>I</tex> to <tex>H</tex> is approximately <tex>i_h I</tex>. The new rate can be computed as <tex>\frac{\text{left-over capacity}}{I} = \frac{\text{current capacity} - H}{I}</tex>

**EpiPolicy** provides <tex>sim.apply(P_1, m)</tex> that applies a multiplicative factor <tex>m</tex> to the default value of the paramater <tex>P_1</tex>. Hence we compute <tex>m</tex> as <tex>\frac{\text{new }i_h}{\text{default }i_h}</tex>

Tip:
- If <tex>X</tex> is a [Pandas data frame](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.html), then ```X['Value'].mean()``` will be the average of column 'Value'
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

The cost of death is different from the cost of infections because the death cost is a one-time cost while the cost of infection is recurring as long as a person stays  in the infectious compartment.

Tip:
- Use "value-mode":'change' to select the change of value of a compartment


```python
def cost(cp):
    deathInc = sim.select({'compartment':'D', 'value-mode':'change'})['Value'].sum()
    sim.add({"intervention":"Death_cost"}, deathInc*cp['cost_per_death'])
```

### Schedule page

In the schedule page, we create an increase in hospital capacity (from 100000 to 400000) starting in March 2021

<figure>
    <img src="/assets/hospitalization/HSIRD-schedule.png" alt="model-parameters" width="1200"/>  
</figure>



### Initialize page

In the initialize page, we create a simulation starting with 100 infectious people.

<figure>
    <img src="/assets/hospitalization/initialize.png" alt="initialize"/>  
</figure>


### Compare page

Below is the comparison of the increasing hospital scenario and a non-increasing scenario (hospital capacity stays at 100000):

<figure>
<img src="/assets/hospitalization/HSIRD-compare.png" alt="model-parameters" width="1200"/>  
</figure>
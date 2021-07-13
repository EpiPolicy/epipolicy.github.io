## Pre-Requisites

Before starting this tutorial, you should read the following articles:
- [How to create and run a simple epidemic model in EpiPolicy](create_your_first_scenario)

## Introduction

This case study is based on a paper titled [The effect of opening schools on the course of Covid-19: a mathematical study](https://arxiv.org/abs/2104.04136v1) by Gandolfi et al.

There are two models discussed in the paper, SIR and SPIAR, based on two sub-populations. For this case study, we will focus on the SPIAR model, described in section 4.15.

**Note:**
> For this case study, we will be using models and data provided in the above mentioned paper. 
We will not be going into detail about how to use various functionalities of EpiPolicy.
Most of EpiPolicy's functionalities have been covered in Basic and Advanced Tutorials.

## Describing the Model and Running a Simple Simulation

The first step is to define your model in the _Model_ page in EpiPolicy. Following the model described in the paper, create a new row in the _Compartments_ table for each compartment in the model. Note that the equations will need to be modified to represent the population compartment (<tex>N</tex>). You can provide a name for the compartment as well as a description. Then, proceed to describe the equations for each compartment. Note that you have to mark susceptible and infectious compartments by providing relevant tags in the _tags_ column. In the model under-consideration, compartment *S* represents the susceptible population and compartments *P*, *I*, and *A* represent the infectious populations. As you define your model, a visual summary will be automatically generated for you at the end of the _Model_ page.

<figure>
    <img src="/assets/alberto-2-spiar-eq.png" alt="model-equations"/>  
</figure>

Once the equations have been defined, you can now define the parameters used in the model in the _Parameters_ table. We will use the parameters described in Table 1 and Figure 8 in the paper. 

<figure>
    <img src="/assets/alberto-2-spiar-params.png" alt="model-parameters"/>  
</figure>

For each parameter, create a new row and provide its name, description and value. The values defined here are considered the base values for the parameters and can be modified in later pages. Note that you have to mark the transmission parameters by providing relevant tags in the _tags_ column. In the model under-consideration, the parameters β11, β12, β21, and β22 are transmission parameters.

<figure>
    <img src="/assets/alberto-2-figure-8-1.png" alt="model-parameters-b11"/>  
</figure>

## Epidemic Scenarios

There are three scenarios described in the paper:
1. Outbreak
2. Lockdown
3. Vaccination

Let us first consider the Outbreak scenario. Choose the parameter values corresponding to the outbreak column in the parameters table. After defining the parameters, move to the _Schedule_ page and specify the duration of the simulation. After specifying the duration, you can then move on to the _Initialize_ page to specify the initial values of the susceptible and infectious compartments provided in the paper and start the simulation.

The status of all simulations that are currently running can be viewed in the status table at the end of the _Initialize_ page. Once a simulation has finished running, it will no longer be available in the status table. The results of all simulations that have finished running can be viewed in the _Results_ page.

Now that you have the results of the Outbreak scenario, you can proceed to simulate the Lockdown and Vaccination scenarios. To do this, you can go back to the _Model_ page and replace the base values of the existing parameters with the corresponding parameter values for each scenario and re-run the simulation. Once you have run all the scenarios, you can compare their results in the _Compare_ page by selecting the simulations via a list in the toolbar present at the top of the _Compare_ page.

## Interventions

In order to generate a complete Outbreak-Lockdown-Vaccination scenario, you can specify these scenarios as interventions in the _Interventions_ page and define a schedule of implementation in the _Schedule_ page. For this case study, we will use the Outbreak scenario as the baseline by using the parameter values for this scenario as base values in the _Model_ page. We will express the other scenarios as well as school closures in the form of interventions in the _Interventions_ page.

### Lockdown Intervention
In the _Interventions_ page, create a new row for this intervention and provide a name and description. As this intervention modifies the parameters β12, β21, and β22, we can specify these in the Control Parameters table. Considering the Outbreak parameters as baseline, we can see that the lockdown intervention reduces β22 by 75% and β12 and β21 by 60%. Thus, we specify the default value of β22 as 0.25 in the Control Parameters table and that of β12 and β21 as 0.4.

Now, in the Effect function, we can specify the effect of this intervention by using the Apply API, as follows.

```python
def effect(cp, locales):
	sim.apply({"parameter":"b12", "locale":locales},cp["b12"])
	sim.apply({"parameter":"b21", "locale":locales},cp["b21"])
	sim.apply({"parameter":"b22", "locale":locales},cp["b22"])
```

### School Closures Intervention

In the _Interventions_ page, create a new row for this intervention and provide a name and description. As this intervention modifies the parameters β11, we can specify it in the Control Parameters table. As β11 is defined separately from other parameters, we can opt to simply replace the existing value with the new one. This can be done simply be dividing the new value of β11 by the existing value of β11 and then using that fraction as the argument to the Apply API. The existing value of β11 can be accessed via the Select API. This intervention can be specified as follows:

```python
def effect(cp, locales):
    b11_df = sim.select({'parameter': 'b11'})
    b11_list = b11_df['Value'].values.tolist()
    b11 = b11_list[0]
    sim.apply({"parameter": "b11", "locale": locales}, cp["b11"]/b11)
```

### Vaccination Intervention
For the vaccination intervention, we need to modify the vaccination parameter (_v_) in the model. This is because of the fact that EpiPolicy modifies the existing parameters with the help of multiplicative factors, but as the default value of the vaccination parameter is 0, no multiplicative factor can modify it. Thus, we either have to modify the default value to a non-zero number or modify the vaccination parameter in the model. For this case study, we will modify the vaccination parameter in our model. To do this, go back to the _Model_ page. In the Compartments table, modify the equations of compartments S2 and R2 by replacing _v_ with _1-v_ and also change the base value of _v_ in the Parameters table to 1. Now, we can easily use a multiplicative factor to modify the value of _v_.

In the _Interventions_ page, create a new row for this intervention and provide a name and description. As this intervention modifies the parameters _v_ and β22, we can specify these in the Control Parameters table. Considering the Outbreak parameters as baseline, we can see that the vaccine intervention reduces β22 by 25%. Accordingly, we specify the default value of β22 as 0.75. As the new base value of _v_ is 1, we can simply define the default value of _v_ in the control parameters table as 0.2.

Now, in the Effect function, we can specify the effect of this intervention by using the Apply API, as follows.


```python
def effect(cp, locales):
	sim.apply({"parameter":"b22", "locale":locales},cp["b22"])
	sim.apply({"parameter":"v", "locale":locales},1-cp["v"])
```

## Schedule

After defining the interventions, we can specify when and for how long to implement them in the _Schedule_ page.

<figure>
    <img src="/assets/alberto-2-schedule.png" alt="schedule"/>
</figure>

First, we specify a duration of 40 days from Jan 1, 2022 till Feb 10, 2022 (in EpiPolicy, the unit of time is 1 day).
Next, we define the schedule of each intervention individually.

1. **Lockdown**: We create one row in the schedule for this intervention. We set the start date as Jan 4, 2022 and the end date as Jan 20, 2022.
2. **Vaccination**: We create one row in the schedule for this intervention. We set the start date as Jan 21, 2022 and the end date as Feb 10, 2022.
3. **School Closure**: We create three rows in the schedule for this intervention. As the transmission rate in schools (β11) varies according to the level of measures taken inside the school to contain the spread of disease, we specify this difference in each duration according to the values in Figure 8 as follows:
    * Jan 1, 2022 - Jan 3, 2022, β11 = 8
    * Jan 4, 2022 - Jan 20, 2022, β11 = 2
    * Jan 21, 2022, Feb 10, 2022, β11 = 3


After the schedule is defined, you can proceed to the _Initialize_ page and set up the initial information as follows:

<figure>
    <img src="/assets/alberto-2-init-values.png" alt="schedule"/>
</figure>

After that, you can start the simulation.

## Results

The results of the simulation are shown below.

<figure>
    <img src="/assets/alberto-2-res.png" alt="schedule"/>  
</figure>

## Exported JSON

The JSON file for reference is available [here](/assets/alberto-2-case-study.json).

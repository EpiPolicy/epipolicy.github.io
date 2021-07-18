## Pre-Requisites

Before starting this tutorial, you should read the following articles:
- [How to create and run a simple epidemic model in EpiPolicy](create_your_first_scenario)
- [Splitting probabilities in compartmental models](/probability_rate)

## Introduction

In this tutorial, we will explore the concept of sub-population groups. A sub-population group is defined as a class of individuals in a population that you are interested in simulating the spread of disease in, either because the individuals in the group possess distinctive characteristics with regard to the disease or you simply want to build targeted policies for those individuals. 

Example: For COVID-19, adults have a lower mortality rate compared to seniors [[1](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7335648/)].
In order to reflect these differences, we can partition the population into two distinct _groups_: Adults and Seniors. Then, we can set the model parameters for each group separately to incorporate the differences in mortality rate. Similarly, if you want to build intervention strategies such as school or workplace closures, you may want to create groups such as Students and Workers.

## The SIRD model

In this tutorial, we will use the SIRD model.

<texb>
\begin{array}{lcl} \frac{dS}{dt} & = & - \beta \frac{SI}{N} \\
\frac{dI}{dt} & = & \beta \frac{SI}{N} - \gamma p_d I - \gamma (1-p_d) I \\
\frac{dR}{dt} &= & \gamma p_d I \\
\frac{dD}{dt} &= & \gamma (1-p_d) I
\end{array}
</texb>

where
- <tex>S</tex> is the number of susceptible people
- <tex>I</tex> is the number of infectious people
- <tex>R</tex> is the number of recovered people
- <tex>D</tex> is the number of deceased people
- <tex>N</tex> is the total population
- <tex>\beta</tex> is the infection transmission rate
- <tex>\gamma</tex> is the rate at which individuals stop being infectious
- <tex>p_d</tex> is the probability of death

## Create the Scenario

### Modify the Pre-defined SIR Model

In the _Model_ page, load the <tex>SIR</tex> model from pre-loaded models toolbar. Then, add another compartment, <tex>D</tex>, in the _Compartments_ table to create the <tex>SIRD</tex> model, using the equations defined above. 
In addition to the [tags](tags) defined for the other compartments, we need to specify the "death" tag to mark <tex>D</tex>, i.e. the compartment that is not included in <tex>N</tex>, since <tex>N</tex> is the total _alive_ population.

Similarly, add <tex>p_d</tex> in the _Parameters_ table

<div class="tutorial-video-container">
    <video class="tutorial-video" autoplay muted loop controls>
        <source src="assets/intro_to_group/model.mp4" type="video/mp4">
    </video>
</div>

### Describe the Population

In the _Locales_ page, load the data for "United Provinces" at administrative level 0.

<div class="tutorial-video-container">
    <video class="tutorial-video" autoplay muted loop controls>
        <source src="assets/create_your_first_model/locales.mp4" type="video/mp4">
    </video>
</div>

### Define Groups

In the _Groups_ page, we create a new group called "Seniors" by following the following steps. 
- Select [GPWv4](https://sedac.ciesin.columbia.edu/data/collection/gpw-v4) from the toolbar.
- Type the desired name in the _Group Name_ text box.
- Check the Male and Female check boxes.
- Define the age range (50-84) via the _Age range to include_ slider.
- Click the _Add_ button.

**Epipolicy** will automatically create a group distribution for the locales described in _Locales_ page, using the characteristics defined above via the [GPWv4 dataset](https://sedac.ciesin.columbia.edu/data/collection/gpw-v4).

By default, EpiPolicy creates a group called "Others" for the population segments that don't fall into the group characteristics described by the user.

You can also override the pre-computed proportion of your groups. 
In this example, we set 10% of our population to be seniors.

<div class="tutorial-video-container">
    <video class="tutorial-video" autoplay muted loop controls>
        <source src="assets/intro_to_group/groups.mp4" type="video/mp4">
    </video>
</div>

### Set Group-specific Parameters

In the _Parameters_ page, you can define a specific value for each model parameter for each individual group, which will override the base values provided in the _Model_ page. You can do this by simply specifying the new value in the _Value_ text field in the _Parameters_ table. For convenience, **Epipolicy** provides a filter functionality for users to easily filter the _Parameters_ table by providing the name of the desired parameter or group.

In this example, we set the mortality rate (<tex>p_d</tex>) of Seniors to <tex>0.1</tex>.


<div class="tutorial-video-container">
    <video class="tutorial-video" autoplay muted loop controls>
        <source src="assets/intro_to_group/parameters.mp4" type="video/mp4">
    </video>
</div>

<!-- ### Export your scenario

Before [exporting](import_export), confirm the changes that you've made in the current page by clicking on a different page. In the example, we click on the _Model_ page. The zip file consists of a JSON file that contains everything necessary for you to [import](import_export) this model in the future.

<div class="tutorial-video-container">
    <video class="tutorial-video" autoplay muted loop controls>
        <source src="assets/intro_to_group/export.mp4" type="video/mp4">
    </video>
</div> -->

## Run the Simulation and Compare Results

Now that we have defined our groups and group-specific parameters, let's intialize and run the simulation. 
You can consult previous tutorials for details on the following steps:
1. In the _Schedule_ page, set the simulation duration from Jan 01, 2021 to Dec 01, 2021
2. In the _Initialize_ page, set the initial conditions so that there are initially 10 infectious individuals in the group "Others"
3. Repeat step 2 for the following two scenarios:
   - One with 10% seniors in the population
   - One with 50% seniors in the population
4. Go to the _Compare_ page to inspect these two scenarios

Hopefully you will get something like this:
<figure class="text-center">
  <img src="assets/intro_to_group/compare.png"/>
</figure>

## Summary

In this tutorial:

- We introduce the concept of groups in **Epipolicy** with the possibility of customizing the parameter values per group.
- We make use of the _Compare_ page to highlight the impact that different group dynamics can have on a scenario.
<!-- - We show the export functionality that would allow you to import the scenario for future usage/bookmarking. In the [next tutorial](/intro_to_facility), we will show you how to import an existing scenario and explore the concept of **facility** in **Epipolicy**. -->

## Introduction

In this tutorial, we explore the concept of a group in **Epipolicy** with instructions on how to create a simple SIR model with mortality that would contrast the different groups using **EpiPolicy**

A group is a class of individuals that show distinctive characteristics toward the disease. For example, adults have lower mortality rate compared to seniors when it comes to COVID-19 [[1](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7335648/)]. In order to reflect these differences, we partition the population into groups and modify the parameters accordingly.

## The SIRD model

<texb>
\begin{array}{lcl} \frac{dS}{dt} & = & - \beta \frac{SI}{N} \\
\frac{dI}{dt} & = & \beta \frac{SI}{N} - \gamma p_d I - \gamma (1-p_d) I \\
\frac{dR}{dt} &= & \gamma p_d I \\
\frac{dD}{dt} &= & \gamma (1-p_d) I
\end{array}
</texb>

where, in addition to the SIR model in [Create your first scenario](/create_your_first_scenario), <tex>p_d</tex> is the probability of death.

You can find the mathematical justification for the splitting of the transition rate <tex>\gamma I </tex> into <tex>\gamma p_d I</tex> and <tex>\gamma (1-p_d) I </tex> to model the probability of death via [Splitting probability in compartmental model](/probability_rate).

## Create the scenario

### Modify a pre-defined model

In this tutorial, we show how to derive our SIRD model from a pre-defined SIR model in **Epipolicy**.

Tips:
- The "death" tag is to identify compartment that is not included in <tex>N</tex> since <tex>N</tex> is the total alive population.

<div class="tutorial-video-container">
    <video class="tutorial-video" autoplay muted loop controls>
        <source src="assets/intro_to_group/model.mp4" type="video/mp4">
    </video>
</div>

### Set population

As in [Create your first scenario](/create_your_first_scenario#set-population), we stick with the imaginary country "United Provinces" at administrative level 0 with 1000 population.

### Set groups

**Epipolicy** provides a pre-computed [dataset](https://sedac.ciesin.columbia.edu/data/collection/gpw-v4) to partition your population into demographic groups characterized by their ages and genders. Here we create one group called "Seniors" and **Epipolicy** automatically allocate the rest of the population to another group called "Others"

Tips:
- You can override the pre-computed proportion of your groups. In this example, we want to have 10% of our population to be seniors.

<div class="tutorial-video-container">
    <video class="tutorial-video" autoplay muted loop controls>
        <source src="assets/intro_to_group/groups.mp4" type="video/mp4">
    </video>
</div>

### Set parameters

Groups in **Epipolicy** have their own values for each parameter (which initially be defaulted to the base value). In this example, we want to increase the mortality rate of seniors by 10 times (1% to 10%).

Tips:
- **Epipolicy** provides a search functionality to quickly find the parameter that you are interested.

<div class="tutorial-video-container">
    <video class="tutorial-video" autoplay muted loop controls>
        <source src="assets/intro_to_group/parameters.mp4" type="video/mp4">
    </video>
</div>

### Export your scenario

Before exporting, confirm the changes that you've made in the current page by clicking on a different page. In the example, we click on the _Model_ page. The zip file consists a JSON file that contains everything necessary for you to import this model in the future.

<div class="tutorial-video-container">
    <video class="tutorial-video" autoplay muted loop controls>
        <source src="assets/intro_to_group/export.mp4" type="video/mp4">
    </video>
</div>

## Your turn

In this exercise, we explore the _Compare_ page in **Epipolicy**. Here are the steps:
1. Set your simulation duration from Jan 01, 2021 to Dec 01, 2021
2. Set your initial conditions so that there are initially 10 infectious population in the group "Others"
3. Run two scenarios:
    * One with 10% seniors in the population
    * One with 50% seniors in the population
4. Go to the _Compare_ page in compare these two scenarios

Hopefully you would get something like this!

<figure class="text-center">
  <img src="assets/intro_to_group/compare.png"/>
</figure>

## Summary

In this tutorial:
- We introduce the concept of groups in **Epipolicy** with emphasize on the customization of the parameter values that it provides. This allows users to focus on a particular demographic group that is vulnerable to the disease.
- We make use of the _Compare_ page to highlight the impact that a group can have on a scenario.
- We show the export functionality that would allow you to import the scenario for future usage/bookmarking. In the [next tutorial](/intro_to_facility), we will show you how to import an existing scenario and explore the intricate concept of **facility** in **Epipolicy**.

## Pre-Requisites

Before starting this tutorial, you should read the following articles:
- [Introduction to Sub-population Groups](intro_to_group)

## Introduction

In this tutorial, we will explore the concept of facilities in **Epipolicy**.

A facility is any place in a locale where different population groups spend time and interact with each other. 
There can be many facilities that may be of interest in the context of epidemic modelling such as households, schools, workplaces, community places, places of worship, shopping malls, etc. 

In the _Facilities_ page, users can describe two kinds of data:
- The portion of time that individuals in a group spend in any facility (e.g. Children spend 35% of their time in schools)
- The portion of time that individuals in a group spend interacting with individuals in other groups in any facility (e.g. Children spend 90% of their time interacting with other children in schools and 7% of their time interacting with teachers)

<figure class="text-center">
  <img src="assets/intro_to_facility/facility.png" width="300"/>
</figure>

## Create the Scenario

For this tutorial, you need to set up your simulation in the same way as described in the [groups tutorial](/intro_to_group).
Once you have done that, you can continue from here.

### Pre-defined Facilities

**Epipolicy** utilizes the [Synthpop library](https://github.com/InstituteforDiseaseModeling/synthpops) to automatically generate data for four default facilities: Households, Schools, Workplaces and Community Places.

<div class="tutorial-video-container">
    <video class="tutorial-video" autoplay muted loop>
        <source src="assets/intro_to_facility/predefined-facility.mp4" type="video/mp4">
    </video>
</div>

### Create Facilities from Scratch
In this tutorial, we will define our facilities from scratch.

First, move to the _Facilities_ page. Then, in the _Facilities_ table, create two facilities: Household and Nursing Home, where Household is the facility where Seniors reside and Nursing Home is the facility where the Seniors interact with other Seniors. You can use the description text field to provide details about your facilities. This may help your colleagues to understand your simulation design better.

After defining the facilities, you can move on to populate the time distribution matrices, as shown below:
<!-- - The group interactions should be interpreted by row first and then by column. In this example, you can see that seniors spend 30% (0.3) time interacting with others in each household. -->

<div class="tutorial-video-container">
    <video class="tutorial-video" autoplay muted loop controls>
        <source src="assets/intro_to_facility/scratch-facility.mp4" type="video/mp4">
    </video>
</div>

## Run the Simulation and Compare Results

Now that we have defined our facilities, let's intialize and run the simulation. 
1. In the _Schedule_ page, set your simulation duration from Jan 01, 2021 to Dec 01, 2021
2. In the _Initialize_ page, set your initial conditions so that there are initially 10 infectious individuals in the group "Others"
3. Repeat step 2 for the following two scenarios:
    * Seniors spend 30% of their time interacting with Others in Household
    * Seniors spend no time interacting with Others in Household
4. Go to the _Compare_ page to evaluate these two scenarios

Hopefully you will get something like this:
<figure class="text-center">
  <img src="assets/intro_to_facility/compare.png"/>
</figure>


## Summary

In this tutorial:
- We introduce the concept of facilities in **Epipolicy** which allows the users to express the time spent by each group in each facility as well as the interaction time between any pair of groups in a facility.
- We use the _Compare_ page to see how reducing the time interacting with the infectious group can reduce transmission and death.
<!-- - We show the import functionality that would allow you to load an existing scenario. In the [next tutorial](/intro_to_static_mobility), how to model  mobility across locales. -->

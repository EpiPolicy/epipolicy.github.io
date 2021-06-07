## Introduction

In this tutorial, we explore the concept of a facility in **Epipolicy** with instructions on how to import the previous SIRD model in [Intro to Epipolicy's group](/intro_to_group) and create facilities where different groups will interact with each other.

A facility is a place in a locale where different groups such as seniors, adults or children interact with each other. There can be many facilities that are of interest in the context of an epidemic such as household, school, workplace, community, mosque, mall, etc.

<figure class="text-center">
  <img src="assets/intro_to_facility/facility.png" width="300"/>
  <figcaption>Children spend 35% their time at school</figcaption>
  <figcaption> of which they spend 90% interacting with other children</figcaption>
</figure>

## Create the model

### Import an existing model

Firstly, we extract the exported [zip file](/assets/intro_to_facility/My_SIRD_model.zip) from previous [tutorial](/intro_to_group#export-your-model). Then we import the JSON file within.

<div class="tutorial-video-container">
    <video class="tutorial-video" autoplay muted loop controls>
        <source src="assets/intro_to_facility/import.mp4" type="video/mp4">
    </video>
</div>

### Use predefined-facilities

**Epipolicy** provides predefined-facilities from [Synthpop](https://github.com/InstituteforDiseaseModeling/synthpops) which quickly gives you the time spend in each facility of each group as well as the time spend interacting with other groups. However, in this tutorial, we will define our facilities from scratch.

<div class="tutorial-video-container">
    <video class="tutorial-video" autoplay muted loop>
        <source src="assets/intro_to_facility/predefined-facility.mp4" type="video/mp4">
    </video>
</div>

### Create facilities from scratch

We create two facilities: household and nursing home where household is the place where seniors interacting with others and nursing home is the place where seniors interacting within themselves.

Tips:
- You can use description to detail the purpose of your facility. This would greatly help others to understand your design.
- The group interactions should be interpret by row first and then column. In this example, you can see that seniors spend 30% (0.3) time interacting with others in household.

<div class="tutorial-video-container">
    <video class="tutorial-video" autoplay muted loop controls>
        <source src="assets/intro_to_facility/scratch-facility.mp4" type="video/mp4">
    </video>
</div>

## Your turn

We want to compare two scenarios:
1. Set your simulation duration from Jan 01, 2021 to Dec 01, 2021
2. Set your initial conditions so that there are initially 10 infectious population in the group "Others"
3. Run two scenarios:
    * The first one where seniors spend 30% the time interacting with others in household
    * The second one where seniors spend no time interacting with others in household
4. Go to the _Compare_ page in compare these two scenarios

Hopefully you would get something like this!

<figure class="text-center">
  <img src="assets/intro_to_facility/compare.png"/>
</figure>


## Summary

In this tutorial:
- We introduce the concept of facilities in **Epipolicy** with emphasize on the time spent by each group in each facility as well as the time interacting between any two groups in a facility.
- We make use of the _Compare_ page to highlight the impact of reducing time interacting with infectious group can have on a scenario.
- We show the import functionality that would allow you to load a pre-defined model. In the [next tutorial](/intro_to_mobility), how human mobility plays an important role in **Epipolicy**.

## Introduction

<!-- In this tutorial, we will explore the concept of population mobility in **Epipolicy** with instructions on how to create and modify mobility values between locales in **EpiPolicy**. -->

Human mobility plays an important role in the spread of infectious diseases.
People from places all over the world travel to other places for various purposes.
If these travellers carry an infection, they pose a risk to the place they are travelling to.
In the same vein, travellers may get infected during their travels and carry the infections back with them when they return to their homes.

<!-- There are many modes of human travel, such as crossing borders or air travel. Whether via border or airplane, population in one locale can travel and spend their time in another locale. Infection incidences can, therefore, happen abroad.  -->

In epidemic modelling, the concept of human mobility is sub-divided into two main categories:

- **Static** mobility: This mobility simply refers to the time that the people of one locale spend in another locale. 
<!-- Hence, there is no change to the total population of a locale when its population spends time in another locale. -->
- **Dynamic** mobility: This mobility refers to the actual transfer of a people from one locale to another. This happens during significant demographic changes such as migration, evacuation or vaccination.
<!-- (direct transfer of susceptible compartment to vaccinated compartment). -->

In this tutorial, we will focus on static mobility.

The following figure shows an example of static mobility, where a sub-population group, Children, spend 80% of their time within locale A and 20% of their time in locale B:

<!-- Dynamic mobility is introduced in the [next tutorial](/intro_to_dynamic_mobility). -->

<figure class="text-center">
  <img src="assets/intro_to_static_mobility/mobility.png" width="400"/>
</figure>

## Create the scenario

### Select a Model

For simplicity, we will use the standard SIR model available in the _Model_ page.

### Describe the Population

In the _Locales_ page, we load data for "United Provinces" at administrative level 1. 
This will load data for three locales within "United Provinces": 
- UnitedProvinces.Pastures
- UnitedProvinces.Hills 
- UnitedProvinces.Beaches. 

<!-- We then change the population of each locale to 1000. -->


The naming of locales follow a **hierarchical** structure such that all levels of a locale are represented in its name, seperated by a dot. Names of all locales will start with the locale name at level 0 (usually the name of the country), followed by a dot, then the locale name at level 1 (usually the name of a state or province), followed by a dot, and so on.  For example, to refer to Los Angeles city in the California state in the United States, you may define the locale name as follows: 
<pre> UnitedStates.California.LosAngeles </pre>

<div class="tutorial-video-container">
    <video class="tutorial-video" autoplay muted loop controls>
        <source src="assets/intro_to_static_mobility/locales.mp4" type="video/mp4">
    </video>
</div>

### Describe the Mobility

You can define the mobility pattern of the population in your locales in the _Mobility_ page.

At the top of the page, you can use a slider to define what proportion of the population are travellers and what proportion remains inside the locale. In the _Mobility_ table, you can define the portion of time that the travellers from one locale spend in another locale. The percentage of population that remains within a locale controls the degree of mobility of that locale, i.e. the more people that remain inside, the low the overall mobility and vice versa.
<!-- The more population stays within locale, the less population traveling out of the locale. -->



For convenience, **Epipolicy** provides pre-computed mobility values by using the [impedance algorithm](https://ij-healthgeographics.biomedcentral.com/articles/10.1186/s12942-017-0115-7). 

You can now go ahead and load the pre-computed mobility data for your locales by clicking on the "New" button in the _Mobility_ page and then selecting the "Percentage of population that remain within locale" option from the dropdown menu. For this tutorial, we want to simulate the effect of closing borders of "Pastures" locale in "United Provinces". You can do this by setting the mobility value to 0 in the _Mobility_ table, where the source or the destination locale is _UnitedProvinces.Pastures_.

<div class="tutorial-video-container">
    <video class="tutorial-video" autoplay muted loop controls>
        <source src="assets/intro_to_static_mobility/mobility.mp4" type="video/mp4">
    </video>
</div>

In the above example, <tex>30\\%</tex> of the population of _UnitedProvinces.Hills_ travels outside the locale. Of these, <tex>60\\%</tex> travel to _UnitedProvinces.Beaches_. Hence the people of _UnitedProvinces.Hills_ spend <tex>0.3 \times 0.6 = 0.18=18\\%</tex> their time in _UnitedProvinces.Beaches_.


## Run the Simulation and View Results

Now that we have defined the mobility patterns of our population, let's intialize and run the simulation. 

1. In the _Schedule_ page, Set your simulation duration from Jan 01, 2021 to Dec 01, 2021
2. In the _Initialize_ page, Set your initial conditions so that there are initially 10 infectious population in _UnitedProvinces.Beaches_
3. Run the simulation.
4. View the results in the _Results_ page. 

You can click on any locale on the map in the _Results_ page to get the results for that locale. For example, you can click on _UnitedProvinces.Pastures_ to see its statistics. 

In the following figure, it shows that there is no infection since _UnitedProvinces.Pastures_ is closed during the outbreak!

<figure class="text-center">
  <img src="assets/intro_to_static_mobility/results.png"/>
</figure>

## Summary

In this tutorial:

- We introduce the concept of two types of human mobility in **EpiPolicy**, static and dynamic. Static mobility does not change total population of a locale while dynamic mobility does!
- We provide instructions on how to interpret and define mobility patterns in **Epipolicy**.
- We use the _Results_ page to observe the impact of mobility on locales that are closed.
<!-- - In the [next tutorial](/intro_to_dynamic_mobility), we will apply our understanding of dynamic mobility and implement them via **Epipolicy's intervention**. -->

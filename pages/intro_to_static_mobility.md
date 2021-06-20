## Introduction

In this tutorial, we explore the concept of static mobility in **Epipolicy** with instructions on how to create and modify mobility values between locales in **EpiPolicy**.

Human mobility plays an important role in the spread of the disease. Whether via border or airplane, population in one locale can travel and spend their time in another locale. Infection incidences can, therefore, happen abroad. There are two types of mobility:
- **Static** mobility meaning that the mobility is considered as time spent in another locale. And hence there is no change to the total population of a locale when its population spends time in another locale.
- **Dynamic** mobility refers to the actual transfer of population from one locale to another locale. This can happen during significant demographic changes such as migration, evacuation or vaccination (direct transfer of susceptible compartment to vaccinated compartment).

In this tutorial, we explore how to do static mobility in **Epipolicy**. Dynamic mobility is introduced in the [next tutorial](/intro_to_dynamic_mobility).

<figure class="text-center">
  <img src="assets/intro_to_static_mobility/mobility.png" width="400"/>
  <figcaption>Children spend 80% time within locale A while 20% time traveling to locale B</figcaption>
  <figcaption>Within locale B, they would then spend their time in each facility interacting with other groups</figcaption>
</figure>

## Create the scenario

### Choose the model

For simplicity, we choose the standard SIR model

### Set population

For this tutorial, we partition our imaginary country "United Provinces" at administrative level 1. This gives us three locales: UnitedProvinces.Pastures, UnitedProvinces.Hills and UnitedProvinces.Beaches. We then change the population of each locale to 1000.

Tips:
- The naming of locale is **hierarchical** meaning that the level-1 locale will follow the level-0 locale with a dot.
- In many big countries such as the United States, level-0 locale is the country itself, level-1 locale is a state, level-2 locale is a county. For example, to refer to the New York county: UnitedStates.NewYork.NewYork

<div class="tutorial-video-container">
    <video class="tutorial-video" autoplay muted loop controls>
        <source src="assets/intro_to_static_mobility/locales.mp4" type="video/mp4">
    </video>
</div>

### Set mobility

**Epipolicy** provides pre-computed mobility values using [impedance model](https://ij-healthgeographics.biomedcentral.com/articles/10.1186/s12942-017-0115-7). For this example, we want to simulate the effect of border closure of _UnitedProvinces.Pastures_ by setting the mobility values coming out and in of _UnitedProvinces.Pastures_ to 0

Tips:
- The percentage of population that remains within locale controls the degree of mobility in all locales. The more population stays within locale, the less population traveling out of the locale.
- In the example, <tex>30\\%</tex> of the population of _UnitedProvinces.Hills_ travels outside the locale. Of these  <tex>30\\%</tex>, <tex>60\\%</tex> of them travel to _UnitedProvinces.Beaches_. Hence the population in _UnitedProvinces.Hills_ spends <tex>0.3 \times 0.6 = 0.18=18\\%</tex> their time in _UnitedProvinces.Beaches_.

<div class="tutorial-video-container">
    <video class="tutorial-video" autoplay muted loop controls>
        <source src="assets/intro_to_static_mobility/mobility.mp4" type="video/mp4">
    </video>
</div>

## Your turn

In this exercise, we explore the _Results_ page. Here are the steps:
1. Set your simulation duration from Jan 01, 2021 to Dec 01, 2021
2. Set your initial conditions so that there are initially 10 infectious population in _UnitedProvinces.Beaches_
3. Run and observe the results
4. Don't remember to export your scenario for the [next tutorial](/intro_to_dynamic_mobility)!

Tips:
- You can click the _UnitedProvinces.Pastures_ on the heat map to see its statistics. Here it shows that there is no infection since _UnitedProvinces.Pastures_ is closed during the outbreak!

Hopefully you would get something like this!

<figure class="text-center">
  <img src="assets/intro_to_static_mobility/results.png"/>
</figure>

## Summary

In this tutorial:
- We introduce the concept of human mobility in **Epipolicy** with the distinction of two types of mobility: static and dynamic. Static mobility does not change total population of a locale while dynamic mobility does!
- We give instructions on how to interpret and set the mobility values of the static mobility in **Epipolicy**.
- We make use of the _Results_ page to see the impact of mobility on locales that are closed.
- In the [next tutorial](/intro_to_dynamic_mobility), we will apply our understanding of dynamic mobility and implement them via **Epipolicy's intervention**.

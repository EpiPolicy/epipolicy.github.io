## Introduction

<!-- This tutorial provides the mathematical and theoretical background for deterministic compartmental models, with instructions on how to create a simple SIR model and run it on **Epipolicy**. -->

This tutorial provides instructions on how to create a [simple epidemic model](sir_model) in **Epipolicy**.

## Create the Scenario

### Pre-defined Models

**Epipolicy** provides pre-defined models which can be used as-is or modified as needed. Users can select (or create) the model they want to work on in the _Model_ page.

<div class="tutorial-video-container">
    <video class="tutorial-video" autoplay muted loop>
        <source src="assets/create_your_first_model/model-predefined.mp4" type="video/mp4">
    </video>
</div>

### Start from scratch

In this tutorial, we will create a model from scratch by following the following steps:

- Move to the _Model_ page by clicking on the *Model* button in the navigation toolbar on the left side of your screen. 
- Click on *Define your own model* button in the _Model_ page.
- Provide a name for your model in the *Model Name* text field.
    <div class="tutorial-video-container">
        <video class="tutorial-video" autoplay muted loop>
            <source src="assets/create_your_first_model/model-name.mp4" type="video/mp4">
        </video>
    </div>
- Provide the name, description and equation of each compartment and its appropriate [tags](tags) in the *Compartments* table.
    It is **important** that we specify the "susceptible" tag for <tex>S</tex> and the "infectious" tag for <tex>I</tex>.
    <div class="tutorial-video-container">
        <video class="tutorial-video" autoplay muted loop controls>
            <source src="assets/create_your_first_model/model-compartment.mp4" type="video/mp4">
        </video>
    </div>
- Provide the name, description and base value of each parameter in the model and its appropriate [tags](tags) in the *Parameters* table. 
    It is **important** that we specify the "transmission" tag for <tex>\beta</tex> which is the transmission rate.
    <div class="tutorial-video-container">
        <video class="tutorial-video" autoplay muted loop controls>
            <source src="assets/create_your_first_model/model-parameter.mp4" type="video/mp4">
        </video>
    </div>

### Describe the Population

In the _Locales_ page, users can describe the features of the population that they want to simulate the epidemic in. This entails listing the locales that the population resides in, population distribution in the locales as well as the administritative level and area of each locale. 
For example, if users want to simulate an epidemic in the United States at the country level, they would define a single locale. 
If they want to simulate the epidemic at the state level in the United States, they would define 51 locales: 1 country-level locale and 50 state-level locales. Users can specify any number of locales (such as cities, provinces, towns, etc) by specifying the locales data in [JSON notation](https://www.json.org/json-en.html) via the built-in [JSON editor](jsoneditor).

By default, **EpiPolicy** provides locale data of all countries upto administrative level 2 (Country, State, City), which can be used as-is or modified as needed.

For this introductory tutorial, we will select an imaginary country "United Provinces", which is available in **EpiPolicy** by default.

<div class="tutorial-video-container">
    <video class="tutorial-video" autoplay muted loop controls>
        <source src="assets/create_your_first_model/locales.mp4" type="video/mp4">
    </video>
</div>

### Set the Simulation Duration

You can set the duration of your simulation, i.e. the start and end dates, in the _Schedule_ page.

<div class="tutorial-video-container">
    <video class="tutorial-video" autoplay muted loop controls>
        <source src="assets/create_your_first_model/schedule.mp4" type="video/mp4">
    </video>
</div>

### Set the Initial Conditions

Compartmental models require information about the initial state of the population prior to starting the simulation. 
This includes the initial susceptible and infectious population of the scenario. 
In this tutorial, we set the initial conditions as 10 infectious individuals and 990 susceptible individuals at the beginning of the simulation.

_Tip:_ You can omit putting in the initial susceptible population as **Epipolicy** can infer that using the number of intial infectious individuals and the total population described in the _Locales_ page.

Once you have described the intial conditions, you can start the simulation by pressing the _Start_ button.

<div class="tutorial-video-container">
    <video class="tutorial-video" autoplay muted loop controls>
        <source src="assets/create_your_first_model/initialize.mp4" type="video/mp4">
    </video>
</div>

## View Results

After your simulation has finished running, the results will become available in the _Results_ page:

- The indicators at the top-left of the results section show total infections, deaths, and cost.
- The heat map shows the intensity of the infection throughout the simulation.
- The bottom-left graph shows details about the progression of population compartments as well as compartment tags.
- The R-graph shows three types of reproductive numbers: 
    - [Basic reproductive number](https://web.stanford.edu/~jhj1/teachingdocs/Jones-on-R0.pdf)
    - [Instantaneous reproductive number](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7325187/)
    - [Case reproductive number](https://academic.oup.com/aje/article/178/9/1505/89262)

<div class="tutorial-video-container">
    <video class="tutorial-video" autoplay muted loop controls>
        <source src="assets/create_your_first_model/results.mp4" type="video/mp4">
    </video>
</div>

## Your Turn

Try to create and run an <tex>SIR</tex> model with vital dynamics. 
The system of differential equations that describes it is as follows:

<texb>
\begin{array}{lcl} \frac{dS}{dt} & = & \nu N - \beta \frac{SI}{N} - \mu S\\
\frac{dI}{dt} & = & \beta \frac{SI}{N} - \gamma I - \mu I \\
\frac{dR}{dt} &= & \gamma I - \mu R
\end{array}
</texb>

where 
- <tex>\nu</tex> is the birth rate
- <tex>\mu</tex> is the death rate.

## Summary

In this tutorial:
- We illustrate how to create a simple SIR model from scratch and run it using **Epipolicy**. For more complicated models, different concepts will come into play (such as groups, facilities, and population mobility), described in next tutorials.

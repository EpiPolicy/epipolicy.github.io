## Introduction

<!-- This tutorial provides the mathematical and theoretical background for deterministic compartmental models, with instructions on how to create a simple SIR model and run it on **Epipolicy**. -->

This tutorial provides instructions on how to create a [simple epidemic model](sir_model) in **Epipolicy**.

## Create the scenario

### Predefined-model

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
    It is **important** that we identify the "susceptible" tag for <tex>S</tex> and the "infectious" tag for <tex>I</tex>.
    <div class="tutorial-video-container">
        <video class="tutorial-video" autoplay muted loop controls>
            <source src="assets/create_your_first_model/model-compartment.mp4" type="video/mp4">
        </video>
    </div>
- Provide the name, description and base value of each parameter in the model and its appropriate [tags](tags) in the *Parameters* table. 
    It is **important** that we identify the "transmission" tag for <tex>\beta</tex> which is the transmission rate.
    <div class="tutorial-video-container">
        <video class="tutorial-video" autoplay muted loop controls>
            <source src="assets/create_your_first_model/model-parameter.mp4" type="video/mp4">
        </video>
    </div>

### Set population

**Epipolicy** provides the concept of locales that models human mobility in an epidemic scenario. We can think of a locale as a "blob" of population with its own system of differential equations. In this introductory tutorial, our simple model will have exactly 1 "blob" since we choose to partition our imaginary country "United Provinces" at administrative level 0.

Tips:
- The [JSON editor](jsoneditor) contains the details of each locale in [JSON format](https://www.json.org/json-en.html). You can edit the value to your needs. In this example, we want our blob to have population 1000.

<div class="tutorial-video-container">
    <video class="tutorial-video" autoplay muted loop controls>
        <source src="assets/create_your_first_model/locales.mp4" type="video/mp4">
    </video>
</div>

### Initial conditions

Every compartmental model will require  initial conditions to begin the simulation. These are the initial susceptible and infectious population of the scenario. In this example, we initially have 10 infectious individuals and 990 susceptible individuals.

Tips:
- Before creating your initial conditions, you **should** check out the _Schedule_ page to set your simulation duration
- You can omit putting in the initial susceptible population since **Epipolicy** can figure that out given the number of infectious individuals.

<div class="tutorial-video-container">
    <video class="tutorial-video" autoplay muted loop controls>
        <source src="assets/create_your_first_model/initialize.mp4" type="video/mp4">
    </video>
</div>

## View results

After running the scenario from the _Initialize_ page, you can view the result in the _Results_ page:

- The heat map shows the intensity of the infection throughout the scenario.
- The lower left graph gives you details about the progression of the compartments as well as the groups of compartments with the same tag.
- The R-graph shows three types of reproductive numbers: the basic reproductive number [[1](https://web.stanford.edu/~jhj1/teachingdocs/Jones-on-R0.pdf)], the instantaneous reproductive number and the case reproductive number [[2](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7325187/)][[3](https://academic.oup.com/aje/article/178/9/1505/89262)]

<div class="tutorial-video-container">
    <video class="tutorial-video" autoplay muted loop controls>
        <source src="assets/create_your_first_model/results.mp4" type="video/mp4">
    </video>
</div>

## Your turn

Try to create and run the SIR model with vital dynamics using **Epipolicy**. The system of differential equations that describes it:

<texb>
\begin{array}{lcl} \frac{dS}{dt} & = & \nu N - \beta \frac{SI}{N} - \mu S\\
\frac{dI}{dt} & = & \beta \frac{SI}{N} - \gamma I - \mu I \\
\frac{dR}{dt} &= & \gamma I - \mu R
\end{array}
</texb>

where <tex>\nu</tex> is the birth rate and <tex>\mu</tex> is the death rate.

## Summary

In this tutorial:
- We provide a brief explanation of how the deterministic compartmental model works with an emphasis on the importance of the susceptible and infectious compartments as well as the transmission rate.
- We illustrates how to create a simple SIR model from scratch and run it using **Epipolicy**.
- However, for more complicated models, different concepts will come into play such as group, facility, or mobility. Please check out our [next tutorial](/intro_to_group) on **group**.

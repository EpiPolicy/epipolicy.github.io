## Introduction

<hr>

This tutorial provides a mathematical and theoretical background for deterministic compartmental model, with instructions on how to create a simple SIR model and run it on **Epipolicy**.

A deterministic compartmental model solves a system of differential equations representing the progression of epidemic in continuous time. The model is _deterministic_ because their solutions are fixed for the same input parameters and initial conditions. The model is _compartmental_ because they partition the population into compartments that represent discrete disease states.

## The SIR Model

<hr>

The SIR model is one of the most simplest compartmental model that almost all other models are based on. It consists of three compartments:
- **S**: The number of **s**usceptible individuals. When a susceptible individual and an infectious individual comes into contact, the susceptible individual has a chance to contract the disease in which he/she transitions to the infectious compartment.
- **I**: The number of **i**nfectious individuals. These are individuals who have been infected and are capable of infecting other susceptible individuals.
- **R**: The number of **r**ecovered individuals. These are individuals who have recovered from the disease and are immune to the infection.

Since these numbers vary over time, we make them as a function of <tex>t</tex> (time): <tex>S(t), I(t), R(t)</tex>. Each member of the population typically goes from susceptible to infectious to recovered. This can be shown as a flow diagram in which the boxes represent compartments and the arrows represent transitions between compartments.

<p align="center">
  <img src="assets/1-flow-chart.png" width="600"/>
</p>

### The SIR Model without vital dynamics

The dynamics of an epidemic such as the flu are usually much faster than the vital dynamics of birth and death. Hence birth and death are often omitted in simple compartmental model. The SIR Model without the so-called vital dynamics can be expressed by a system of ordinary differential equations:

<texb>
\begin{array}{lcl} \frac{dS}{dt} & = & - \beta \frac{SI}{N} \\
\frac{dI}{dt} & = & \beta \frac{SI}{N} - \gamma I \\
\frac{dR}{dt} &= & \gamma I
\end{array}
</texb>

where <tex>S</tex> is the number of susceptible population, <tex>I</tex> is the number of infectious population, <tex>R</tex> is the number of recovered population and <tex>N</tex> is the sum of these three (or the total alive population).

### Transition rates

Between <tex>S</tex> and <tex>I</tex>, the transition rate is assumed to be <tex>\frac{dS}{dt} = -\beta \frac{SI}{N}</tex>. <tex>\beta</tex> (usually called the transmission rate) is the product of <tex>\tau</tex> and <tex>c</tex> where <tex>\tau</tex> is the probability of transmission per contact, <tex>c</tex> is the number of contacts per person per unit time. A susceptible individual on average has <tex>c</tex> contacts per day. Standard compartmental model assumes homogeneous mixing in the population. This means that the probability that an infectious individual will come into contact is <tex>\frac{I}{N}</tex>. Hence the number of contacts between such susceptible individual and infectious individuals is <tex>c \frac{I}{N}</tex>. Hence the probability that such individual will contract the disease is <tex>\lambda = \tau c \frac{I}{N}=\beta \frac{I}{N}</tex> (which is called the force of infection). Thus the total number of susceptible individuals that will contract the disease per unit time is: <tex>\lambda S = \beta \frac{SI}{N}</tex>

Between <tex>I</tex> and <tex>R</tex>, the transition rate is assumed to be <tex>\gamma I</tex>. This is equivalent to assuming that the probability of an infectious individual recovering in at any time interval <tex>dt</tex> is <tex>\gamma dt</tex>. If an individual is infectious for an average time period <tex>D</tex> or the recovery period is <tex>D</tex>, then <tex>\gamma = \frac{1}{D}</tex>. This is equivalent to the assumption that the length of time spent by an individual in the infectious compartment is a random variable with an exponential distribution with mean <tex>\frac{1}{\gamma}=D</tex>. Further mathematical details can be found [here](https://server.math.umanitoba.ca/~jarino/courses/math3820/math3820_slides_residence_time.4p.pdf)

## Create the model

<hr>

### Predefined-model

**Epipolicy** conveniently provides pre-defined model that users can derive their model from. Users can choose which pre-defined model they want to work on via _Model_ page. However, in this tutorial, we will create the model from scratch.

<div class="tutorial-video-container" style="width:800px">
    <video class="tutorial-video" width="800px" autoplay muted loop>
        <source src="assets/1-predefined.m4v" type="video/mp4">
    </video>
</div><br/>

### Start from scratch

Firstly, name your model:

<div class="tutorial-video-container" style="width:800px">
    <video class="tutorial-video" width="800px" autoplay muted loop>
        <source src="assets/1-name.m4v" type="video/mp4">
    </video>
</div><br/>

Then list your compartment's name, description, equation and its appropriate tags.

<hr>

## Summary

<hr>

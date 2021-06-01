## Introduction

This tutorial provides a mathematical and theoretical background for deterministic compartmental model, with instructions on how to create a simple SIR model and run it on **Epipolicy**.

A deterministic compartmental model solves a system of differential equations representing the progression of epidemic in continuous time. The model is _deterministic_ because their solutions are fixed for the same input parameters and initial conditions. The model is _compartmental_ because they partition the population into compartments that represent discrete disease states.

## The SIR Model

The SIR model is one of the most simplest compartmental model that almost all other models are based on. It consists of three compartments:
- **S**: The number of **s**usceptible individuals. When a susceptible individual and an infectious individual comes into contact, the susceptible individual has a chance to contract the disease in which he/she transitions to the infectious compartment.
- **I**: The number of **i**nfectious individuals. These are individuals who have been infected and are capable of infecting other susceptible individuals.
- **R**: The number of **r**ecovered individuals. These are individuals who have recovered from the disease and are immune to the infection.

Since these numbers vary over time, we make them as a function of <tex>t</tex> (time): <tex>S(t), I(t), R(t)</tex>. Each member of the population typically goes from susceptible to infectious to recovered. This can be shown as a flow diagram in which the boxes represent compartments and the arrows represent transitions between compartments.

<figure class="text-center">
  <img src="assets/1-flow-chart.png" width="600"/>
</figure>

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

### Predefined-model

**Epipolicy** conveniently provides pre-defined model that users can derive their model from. Users can choose which pre-defined model they want to work on via _Model_ page. However, in this tutorial, we will create the model from scratch.

<div class="tutorial-video-container" style="width:800px">
    <video class="tutorial-video" width="800px" autoplay muted loop>
        <source src="assets/1-predefined.m4v" type="video/mp4">
    </video>
</div>

### Start from scratch

Firstly, name your model:

<div class="tutorial-video-container" style="width:800px">
    <video class="tutorial-video" width="800px" autoplay muted loop>
        <source src="assets/1-name.m4v" type="video/mp4">
    </video>
</div>

Then list name, description and equation of each compartment and its appropriate tags.

Tips:
- It is **important** that we identify the "susceptible" tag for <tex>S</tex> and the "infectious" tag for <tex>I</tex>.
- The "death" tag is to identify compartment that is not included in <tex>N</tex> since <tex>N</tex> is the total alive population.
- Users can create their custom tags and therefore, can refer to a set of compartments using its tag.

<div class="tutorial-video-container" style="width:800px">
    <video class="tutorial-video" width="800px" autoplay muted loop controls>
        <source src="assets/1-compartment.m4v" type="video/mp4">
    </video>
</div><br/>

Finally, list name, description and base value of each parameter in the model and its appropriate tags.

Tips:
- It is **important** that we identify the "transmission" tag for <tex>\beta</tex> which is the transmission rate.
- Users can create their custom tags and therefore, can refer to a set of parameters using its tag.

<div class="tutorial-video-container" style="width:800px">
    <video class="tutorial-video" width="800px" autoplay muted loop controls>
        <source src="assets/1-parameter.m4v" type="video/mp4">
    </video>
</div><br/>

### Set population

**Epipolicy** provides the concept of locales that models human mobility in an epidemic scenario. We can think of locale as a "blob" of population with its own system of differential equations. In this tutorial, our simple model will have exactly 1 "blob" since we choose to partition our imaginary country "United Provinces" at administrative level 0.

Tips:
- The JSON editor contains the details of each locale in [JSON format](https://www.json.org/json-en.html). You can edit the value to your needs. In this example, we want our blob to have 1000 population.

<div class="tutorial-video-container" style="width:800px">
    <video class="tutorial-video" width="800px" autoplay muted loop controls>
        <source src="assets/1-population.m4v" type="video/mp4">
    </video>
</div><br/>

### Initial conditions

Every compartmental model will need its initial conditions to simulate. These are the initial susceptible and infectious population of the scenario. In this example, we initially have 10 infectious individuals and 990 susceptible individuals.

Tips:
- Before creating your initial condition, you **should** checkout the _Schedule_ page to set your simulation duration
- You can omit to put in the initial susceptible population since **Epipolicy** can figure out from the infectious individuals.

<div class="tutorial-video-container" style="width:800px">
    <video class="tutorial-video" width="800px" autoplay muted loop controls>
        <source src="assets/1-initialize.m4v" type="video/mp4">
    </video>
</div><br/>

### View results

After running the scenario from the _Initialize_ page, you can view the result in the _Results_ page:

- The heat map shows the intensity of the infection throughout the scenario.
- The lower left graph gives you details about the progression of the compartments as well as the groups of compartments with the same tag.
- The R-graph shows three types of reproductive numbers: the basic reproductive number [[1](https://web.stanford.edu/~jhj1/teachingdocs/Jones-on-R0.pdf)], the instantaneous reproductive number and the case reproductive number [[2](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7325187/)][[3](https://academic.oup.com/aje/article/178/9/1505/89262)]

<div class="tutorial-video-container" style="width:800px">
    <video class="tutorial-video" width="800px" autoplay muted loop controls>
        <source src="assets/1-results.m4v" type="video/mp4">
    </video>
</div><br/>

## Your turn

<hr>

Try to create the SIR Model with vital dynamics. The system of differential equations that describes it:

<texb>
\begin{array}{lcl} \frac{dS}{dt} & = & \nu N - \beta \frac{SI}{N} - \mu S\\
\frac{dI}{dt} & = & \beta \frac{SI}{N} - \gamma I - \mu I \\
\frac{dR}{dt} &= & \gamma I - \mu R
\end{array}
</texb>

where <tex>\nu</tex> is the birth rate and <tex>\mu</tex> is the death rate.

## Summary

<hr>

In this tutorial:
- We provides a brief understanding of how the deterministic compartmental model works with emphasize on the importance of susceptible and infectious compartments as well as the transmission rate.
- We illustrates how to create a simple SIR model from scratch and run it using **Epipolicy**.
- However, for more complicated models, different concepts will come into play such as facility, group, or mobility. If you would like to find out, checkout our next tutorial on "group".

## Pre-Requisites

Before reading this article, you should read the following articles:
- [Compartmental Models](compartmental_models)

## Introduction

The [SIR model](http://www.stat.columbia.edu/~regina/research/notes123.pdf) is one of the  simplest compartmental models. It consists of three compartments:
- **S**: This compartment represents the **s**usceptible segment of a population. When a susceptible individual comes in contact with an infectious individual, they have a chance to contract the disease, in which case they transition into the infectious compartment.
- **I**: This compartment represents the  **i**nfectious segment of a population. These are individuals who have been infected and are capable of infecting other susceptible individuals.
- **R**: This compartment represents the **r**ecovered segment of a population. These are individuals who have recovered from the disease and are immune to  infection.

Since the number of individuals in each compartment vary over time, we denote them as functions of <tex>t</tex> (time): 

<tex>S(t), I(t), R(t)</tex>

The transitions among the <tex>S</tex>, <tex>I</tex>, <tex>R</tex> compartments are usually depicted in the form of a flow diagram, as shown below:

<figure class="text-center">
  <img src="assets/create_your_first_model/flow-chart.png" width="600"/>
</figure>

## Representation of the simple SIR model

The dynamics of an epidemic (such as the rapid transmission of flu in a population) are usually much faster as compared to the the vital dynamics of the population (i.e. births and deaths). 
For this reason, births and deaths are usually omitted in simple compartmental models. 
The SIR model without the vital dynamics can be expressed by a system of ordinary differential equations:

<texb>
\begin{array}{lcl} \frac{dS}{dt} & = & - \beta \frac{SI}{N} \\
\frac{dI}{dt} & = & \beta \frac{SI}{N} - \gamma I \\
\frac{dR}{dt} &= & \gamma I
\end{array}
</texb>

where 
- <tex>S</tex> is the number of susceptible people
- <tex>I</tex> is the number of infectious people
- <tex>R</tex> is the number of recovered people
- <tex>N</tex> is the total population

## Transition rates
### Transition rate between <tex>S</tex> and <tex>I</tex> 

The transition rate between <tex>S</tex> and <tex>I</tex> is assumed to be:
> <tex>\frac{dS}{dt} = -\beta \frac{SI}{N}</tex>

<tex>\beta</tex> (usually called the transmission rate) is the product of <tex>\tau</tex> and <tex>c</tex> where <tex>\tau</tex> is the probability of transmission per contact, <tex>c</tex> is the number of contacts per person per unit time. A susceptible individual on average has <tex>c</tex> contacts per day. 

The standard compartmental model assumes a homogeneous mixing in the population. This means that the probability that an infectious individual will come into contact with another individual is <tex>\frac{I}{N}</tex>. 
Thus, the number of contacts between a susceptible individual and the set of all infectious individuals can be represented as <tex>c \frac{I}{N}</tex>. The probability that such an individual will contract the disease can be represented as:  
> <tex>\lambda = \tau c \frac{I}{N}=\beta \frac{I}{N}</tex> 

Following this, we can represent the total number of susceptible individuals that contract the disease per unit time as: 
> <tex>\lambda S = \beta \frac{SI}{N}</tex>

### Transition rate between <tex>I</tex> and <tex>R</tex> 

The transition rate between <tex>I</tex> and <tex>R</tex> is assumed to be <tex>\gamma I</tex>. 
This means that the probability that an infectious individual recovers at any time interval <tex>dt</tex> is <tex>\gamma dt</tex>. 
If the recovery period, or the time that an individual is infectious is <tex>D</tex>, then <tex>\gamma = \frac{1}{D}</tex>. 
This means that the time spent by an individual in the infectious compartment is a random variable with an exponential distribution with mean <tex>\frac{1}{\gamma}=D</tex>. 

Further details can be found [here](https://server.math.umanitoba.ca/~jarino/courses/math3820/math3820_slides_residence_time.4p.pdf).

## Summary

In this article:
- We provide a brief explanation of how a simple deterministic compartmental model works with an emphasis on the importance of the susceptible and infectious compartments as well as the transmission rates.

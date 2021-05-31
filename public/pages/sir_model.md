## Introduction

This tutorial provides a mathematical and theoretical background for deterministic compartmental model, with instructions on how to create a simple SIR model and run it on **Epipolicy**.

A deterministic compartmental model solves a system of differential equations representing the progression of epidemic in continuous time. The model is _deterministic_ because their solutions are fixed for the same input parameters and initial conditions. The model is _compartmental_ because they partition the population into compartments that represent discrete disease states.

## The SIR Model

The SIR model is one of the most simplest compartmental model that almost all other models are based on. It consists of three compartments:
- **S**: The number of **s**usceptible individuals. When a susceptible individual and an infectious individual comes into contact, the susceptible individual has a chance to contract the disease in which he/she transitions to the infectious compartment.
- **I**: The number of **i**nfectious individuals. These are individuals who have been infected and are capable of infecting other susceptible individuals.
- **R**: The number of **r**ecovered individuals. These are individuals who have recovered from the disease and are immune to the infection.

Since these numbers vary over time, we make them as a function of <ilatex>t</ilatex> (time): <ilatex>S(t), I(t), R(t)</ilatex>. Each member of the population typically goes from susceptible to infectious to recovered. This can be shown as a flow diagram in which the boxes represent compartments and the arrows represent transition between compartments.

<p align="center">
  <img src="assets/SIR-flow-chart.png" />
</p>

<latex>
\begin{array}{lcl} \frac{dS}{dt} & = & - \beta \frac{SI}{N} \\
\frac{dI}{dt} & = & \beta \frac{SI}{N} - \gamma I \\
\frac{dR}{dt} &= & \gamma I
\end{array}
</latex>


a dsd d <latex-line>a_a</latex-line>

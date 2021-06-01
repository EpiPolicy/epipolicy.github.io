## Introduction

In this tutorial, we explore the concept of a group in **Epipolicy** with instructions on how to create a simple SIR model with mortality that would contrast the different groups using **EpiPolicy**

A group is a class of individuals that show distinctive characteristics toward the disease. For example, adults have lower mortality rate compared to seniors when it comes to COVID-19 [[1](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7335648/)]. In order to reflect these differences, we partition the population into groups and modify the parameters accordingly.

## The SIRD model

<texb>
\begin{array}{lcl} \frac{dS}{dt} & = & - \beta \frac{SI}{N} \\
\frac{dI}{dt} & = & \beta \frac{SI}{N} - \gamma p_d I - \gamma (1-p_d) I \\
\frac{dR}{dt} &= & \gamma p_d I \\
\frac{dD}{dt} &= & \gamma (1-p_d) I
\end{array}
</texb>

where, in addition to the SIR model in [Create your first model](/#create_your_first_model), <tex>p_d</tex> is the probability of death.

## Create the model

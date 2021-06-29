
## Introduction

EpiPolicy uses [deterministic compartmental models](https://dx.doi.org/10.1007%2F978-3-540-78911-6_2) to simulate epidemic scenarios.

A deterministic compartmental model consists of a system of ordinary differential equations (ODEs) that represent the progression of an epidemic in continuous time. 
The model is _deterministic_ because its solutions are fixed for a given set of input parameters and initial conditions. 
The model is _compartmental_ because it partitions the population into various compartments that represent discrete disease states.

It is important that users learn about the use of [compartmental models in epidemiology](https://en.wikipedia.org/wiki/Compartmental_models_in_epidemiology) in order to get the most out of simulating disease and intervention scenarios using EpiPolicy.

## Time of Sojourn in Compartments

It is recommended that users understand the concept of [time of sojourn in compartments](https://server.math.umanitoba.ca/~jarino/courses/math3820/math3820_slides_residence_time.4p.pdf): _Whenever there is a transition between compartments A and B of the form <tex>\gamma A</tex>, the time spent in A before entering B is exponentially distributed with mean <tex>\frac{1}{\gamma}</tex>._

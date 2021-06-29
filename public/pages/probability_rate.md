## Introduction

Let's consider the following [compartmental model](compartmental_models):

<texb>
\begin{array}{lcl}
\frac{dI}{dt} & = &- \gamma I \\
\frac{dR}{dt} &= & \gamma I
\end{array}
</texb>

where
  - <tex>I</tex> represents the _infectious_ compartment
  - <tex>R</tex> represents the _removed_ compartment
  - <tex>\gamma = \frac{1}{T}</tex>
  - <tex>T</tex> is the number of days after which an infectious individual is no longer infectious.

In order to demonstrate the concept of splitting probabilities in compartmental models, let's split the _removed_ compartment into two compartments: Death (<tex>D</tex>) and Recovered (<tex>R</tex>).

Let's assume that after the infectious period is over, the population that is removed from the infectious compartment either dies or recovers, i.e, they move either into the _death_ compartment or the _recovered_ compartment. 
The probability for the former is <tex>p</tex> and for the latter is <tex>1-p</tex>, where <tex>0 \leq p \leq 1</tex>.

<figure class="text-center">
  <img src="assets/probability_rate/IRD.png" width="300"/>
</figure>

The rate with which an individual leaves the _infectious_ compartment is preserved while splitting the _removed_ compartment into the two new compartments. 
Thus, an intuitive way to construct differential equations for the new model is:

<texb>
\begin{array}{lcl}
\frac{dI}{dt} & = &- \gamma I = -\gamma p I - \gamma (1-p) I\\
\frac{dR}{dt} &= & \gamma (1-p) I\\
\frac{dD}{dt} &=& \gamma p I
\end{array}
</texb>

## Proof

Let <tex>T</tex> be a random variable that represents the time after which an infectious individual leaves the _infectious_ compartment, <tex>I</tex>. 
As the [time of sojourn](compartmental_models) of <tex>I</tex> is exponentially distributed with mean <tex>\frac{1}{\gamma}</tex>, <tex>T \sim Exp(\gamma)</tex>, the survival function of the infectious state can be written as: <tex>P(t)=e^{-\gamma t}</tex>

Let <tex>I(t)</tex> be the infectious population at time <tex>t \geq 0</tex>. Then, <tex>I(t)=I_0P(t)</tex> gives the proportion of <tex>I_0</tex>, the initial infectious population, that is still infectious at time <tex>t</tex>.

Let <tex>D(t)</tex> and <tex>R(t)</tex> be the dead and recovered populations, respectively, at time <tex>t</tex>.

Observe that the remaining _infectious_ population, <tex>I</tex>, at <tex>t</tex> is:
> <tex>I_0-I(t)=I_0(1-P(t))</tex>

Hence:

<texb>
\begin{array}{lcl}
D(t)& =& I_0(1-P(t))p = I_0(1-e^{-\gamma t})p\\
R(t)&=& I_0(1-P(t))(1-p) = I_0(1-e^{-\gamma t})(1-p)
\end{array}
</texb>

Finally, taking derivatives:

<texb>
\begin{array}{lcl}
\frac{dD}{dt}(t)& =& \gamma p I_0 e^{-\gamma t} = \gamma p I(t)\\
\frac{dR}{dt}(t)&=& \gamma (1-p) I_0 e^{-\gamma t} = \gamma (1-p) I(t)
\end{array}
</texb>

<!---
Old Proof - may not work but show interesting connection with splitting a Poisson process

The above equations imply that the time spent in <tex>I</tex> before entering <tex>D</tex> is exponentially distributed with mean <tex>\frac{1}{\gamma p}</tex>. Let <tex>N</tex> be the discrete random variable that represents the number of times an individual in <tex>I</tex> entering <tex>D</tex> in a unit time interval. Then <tex>N</tex> is Poisson distributed with mean <tex>\gamma p</tex> where <tex>Pr(N=k)=e^{-\gamma p}\frac{(\gamma p)^k}{k!}</tex>

Also from the above equations, the time spent in <tex>I</tex> before leaving <tex>I</tex> is exponentially distributed with mean <tex>\frac{1}{\gamma}</tex>. Hence if <tex>A</tex> is the number of times an individual leaving <tex>I</tex> in a unit time interval, then <tex>A</tex> is Poisson distributed with mean <tex>\gamma</tex> where <tex>Pr(A=k)=e^{-\gamma}\frac{\gamma^k}{k!}</tex>

Now we create a discrete random variable <tex>\tilde{N}</tex> that represents the number of times an individual in <tex>I</tex> entering <tex>D</tex> such that each time an individual leaving <tex>I</tex> there is <tex>p</tex> chance to enter <tex>D</tex>. We want to show that <tex>N</tex> and <tex>\tilde{N}</tex> are equivalent and that our "intuitive" approach coincides with the above system of differential equations.

What is <tex>Pr(\tilde{N}=k)</tex>?

We observe that in order for <tex>\tilde{N}=k</tex>, <tex>A</tex> has to be at least <tex>k</tex>. Hence:

<texb>
\begin{array}{lcl}
Pr(\tilde{N}=k)& = &\displaystyle \sum_{d \geq k}^{\infty} Pr(\tilde{N}=k | A=d) Pr(A=d)\\
 &=& \displaystyle \sum_{d \geq k}^{\infty} B(k;d,p) e^{-\gamma}\frac{\gamma^d}{d!}
\end{array}
</texb>

where <tex>B(k;d,p)</tex> is the probability of <tex>k</tex> successes after <tex>d</tex> trials with success probability of <tex>p</tex> for each trial. This is a binomial distribution of <tex>n</tex> trials and success probability <tex>p</tex>. Hence:


<texb>
\begin{array}{lcl}
Pr(\tilde{N}=k)& = & \displaystyle \sum_{d \geq k}^{\infty} p^k(1-p)^{d-k} \binom{d}{k} e^{-\gamma}\frac{\gamma^d}{d!}\\
& = & \displaystyle \sum_{d \geq k}^{\infty} p^k(1-p)^{d-k} \frac{d!}{k!(d-k)!} e^{-\gamma}\frac{\gamma^d}{d!}\\
& = & \displaystyle \sum_{d \geq k}^{\infty} \frac{p^k(1-p)^{d-k}e^{-\gamma}\gamma^d}{k!(d-k)!}\\
& = & \displaystyle \sum_{d \geq k}^{\infty} \frac{p^k(1-p)^{d-k}[e^{-\gamma p}e^{-\gamma (1-p)}][\gamma^{d-k}\gamma^{k}]}{k!(d-k)!}\\
& = & e^{-\gamma p}\frac{(\gamma p)^k}{k!} \displaystyle \sum_{d \geq k}^{\infty} \frac{(1-p)^{d-k}e^{-\gamma (1-p)}\gamma^{d-k}}{(d-k)!}\\
& = & e^{-\gamma p}\frac{(\gamma p)^k}{k!} \displaystyle \sum_{d \geq k}^{\infty} \frac{[\gamma(1-p)]^{d-k}e^{-\gamma (1-p)}}{(d-k)!}\\
& = & e^{-\gamma p}\frac{(\gamma p)^k}{k!} \displaystyle \sum_{d \geq 0}^{\infty} \frac{[\gamma(1-p)]^{d}e^{-\gamma (1-p)}}{d!}\\
& = & e^{-\gamma p}\frac{(\gamma p)^k}{k!} \displaystyle \sum_{d \geq 0}^{\infty} Pr(X=d)\\
& = & e^{-\gamma p}\frac{(\gamma p)^k}{k!} \\
& = & Pr(N=k)
\end{array}
</texb>

where <tex>X</tex> is Poisson distributed with mean <tex>\gamma(1-p)</tex>.

With the same reasoning, the same conclusion can be drawn for the transition between <tex>I</tex> and <tex>R</tex> with probability <tex>1-p</tex>
-->


## Summary

- In this article, we have shown that splitting the transition rate, <tex>\gamma I</tex>, with which the infectious population leaves the <tex>I</tex> compartment and transitions into either the <tex>D</tex> compartment (<tex>\gamma p I</tex>) or the <tex>R</tex> compartment (<tex>\gamma (1-p) I</tex>), is equivalent to saying that an individual spends  <tex>\frac{1}{\gamma}</tex> days in <tex>I</tex> on average and then has <tex>p</tex> chance of entering <tex>D</tex> and <tex>1-p</tex> chance of entering <tex>R</tex>.

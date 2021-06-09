
## Introduction

Consider the Markov decision process with state space <tex>\textbf{S}</tex>, action space <tex>\textbf{A}</tex>, and a stochastic transition function: <tex>f: \textbf{S} \times \textbf{A} \to \textbf{S} \times \mathbb{R}</tex> such that: <tex>f(s,a) = (s',r)</tex> where <tex>s'</tex> is the next state resulted from taking action <tex>a</tex> from state <tex>s</tex> and <tex>r</tex> is the immediate reward.

An action-value function <tex>Q:\textbf{S} \times \textbf{A} \to \mathbb{R}</tex> tells the evaluation <tex>Q(s,a)</tex> of taking action <tex>A</tex> from state <tex>S</tex>

A <tex>\epsilon</tex>-greedy policy <tex>\pi_{\epsilon}:\textbf{S} \to \textbf{A}</tex> derived from <tex>Q</tex> is defined as:

- With a probability of <tex>\epsilon</tex>, <tex>\pi_{\epsilon}(s)</tex> returns a random action <tex>a \in \textbf{A}</tex>
- With a probability of <tex>1-\epsilon</tex>, <tex>\pi_{\epsilon}(s) = \underset{a \in \textbf{A}}{\mathrm{argmax}} \text{ } Q(s,a)</tex>

## Off-policy Learning

Purpose: evaluate and improve target policy <tex>\pi</tex> while following behavior policy <tex>\mu</tex>

Why:
- Learn from observing human behavior (Good heuristics)
- Reuse from experience generated from old policies <tex>\pi_1, \pi_2, ...</tex> (Database point of view)

## Q-Learning TD(<tex>\lambda</tex>) - Tabular version

Given behavior policy <tex>\mu</tex> with action-value function <tex>Q_{\mu}(s,a)</tex>, we want to learn and improve a target policy <tex>\pi</tex> represented by action-value function <tex>Q_{\pi}(s,a)</tex>.

Q-learning-tabular(<tex>f, Q_{\mu}, \lambda, \epsilon, \gamma, \alpha</tex>):
- Initialize <tex>Q_{\pi}(s,a)</tex> arbitrarily, for all <tex>s \in \textbf{S}, a \in \textbf{A}</tex>
- Repeat (for each episode):
    - <tex>E(s,a) = 0</tex>, for all <tex>s \in \textbf{S}, a \in \textbf{A}</tex>
    - Initialize starting state <tex>S</tex>
    - Repeat (for each time step of the episode):
        - Choose <tex>A</tex> from <tex>S</tex> from the epsilon-greedy policy <tex>\pi_{\epsilon}</tex> derived from <tex>Q_{\pi}</tex>
        - <tex>S', R \leftarrow f(S,A)</tex>
        - <tex>\delta \leftarrow R + \gamma \underset{a \in \textbf{A}}{\mathrm{max}} \text{ } Q_{\mu}(S',a) - Q_{\pi}(S,A)</tex>
        - <tex>E(S,A) \leftarrow E(S,A) + 1</tex>
        - For all <tex>s \in \textbf{S}, a \in \textbf{A}</tex>:
            - <tex>Q(s,a) \leftarrow Q(s,a) + \alpha \delta E(s,a)</tex>
            - <tex>E(s,a) \leftarrow \gamma \lambda E(s,a)</tex>
        - <tex>S \leftarrow S'</tex>

## Q-Learning TD(<tex>\lambda</tex>) - Value function approximation

Above assume that we can represent the action-value function <tex>Q(s,a)</tex> as a table where each pair state-action is an entry in the table. However, in Epidemic MDP, such assumption is impractical.

### Value function approximation

We wish to approximate our action-value function <tex>Q(s,a)</tex> without storing everything. To do this we add a parameter vector <tex>\textbf{w}</tex> and come up with a value function approximator <tex>q</tex> such that: <tex>q(s,a,\textbf{w}) \approx Q(s,a)</tex>

Our goal is to minimize the mean-squared error:

<tex>\mathbb{E}_{\pi}[(Q\_\pi(S,A)-q(S,A,\textbf{w}))^2]</tex>

Using gradient descent, we can update a step for <tex>\textbf{w}</tex>:

<tex>\Delta \textbf{w} = \alpha(G_t - q(S_t,A_t, \textbf{w}))\nabla_{\textbf{w}}q(S_t,A_t, \textbf{w}) = \alpha \delta E</tex>

where <tex>S_t, A_t, G_t</tex> is the state, action, reward at time step <tex>t</tex> respectively

Q-learning(<tex>f, Q_{\mu}, \lambda, \epsilon, \gamma, \alpha</tex>):
- Initialize <tex>\textbf{w}</tex> arbitrarily.
- Repeat (for each episode):
    - <tex>E = \textbf{0}</tex> with same size of <tex>\textbf{w}</tex>
    - Initialize starting state <tex>S</tex>
    - Repeat (for each time step of the episode):
        - Choose <tex>A</tex> from <tex>S</tex> from the epsilon-greedy policy <tex>\pi_{\epsilon}</tex> derived from <tex>Q_{\pi}</tex>
        - <tex>S', R \leftarrow f(S,A)</tex>
        - <tex>\delta \leftarrow R + \gamma \underset{a \in \textbf{A}}{\mathrm{max}} \text{ } Q_{\mu}(S',a) - q(S,A,\textbf{w})</tex>
        - <tex>E \leftarrow \gamma \lambda E + \nabla_{\textbf{w}}q(S, A, \textbf{w})</tex>
        - <tex>\textbf{w} \leftarrow \textbf{w} + \alpha \delta E</tex>
        - <tex>S \leftarrow S'</tex>

### Function approximator

Two differentiable approximators:
- Linear approximator
- Neural network (This is where Deep reinforcement learning coming)

### Linear approximator

Represent a pair of state and action <tex>(S,A)</tex> by a feature vector <tex>\textbf{x}(S,A)=[x_1(S), ..., x_n(S), x_{n+1}(A), ..., x_{n+m}(A)]^T</tex> where <tex>n</tex> is the number of features in state space, <tex>m</tex>  is the number of features in action space

A linear approximator uses a parameter vector <tex>\textbf{w}</tex> of size <tex>n+m</tex> such that: <tex>q(S,A,\textbf{w})=\textbf{x}(S,A)^T \textbf{w}</tex>

Hence: <tex>\nabla_{\textbf{w}} q(S,A,\textbf{w})=\textbf{x}(S,A)</tex>


### Considerations

- How do we choose an action <tex>A</tex> using the <tex>\epsilon</tex>-greedy policy <tex>\pi_{\epsilon}</tex> given that our action space is infinite?
    - Given the current state <tex>S</tex>, find <tex>\underset{a \in \textbf{A}}{\mathrm{argmax}} \text{ } q(S,a,\textbf{w})</tex>
    - Using gradient ascent on <tex>a</tex> with fixed <tex>S</tex> and <tex>\textbf{w}</tex>
    - <tex>\Delta a = \alpha \nabla_{a}q(S,a,\textbf{w})</tex>
    - With linear approximator: <tex>\Delta a = \alpha [\textbf{w}\_{n+1}, ..., \textbf{w}_{n+m}]^T</tex>

- There are two ways that we can implement our constraints into the problem:
    - Represent the constraint as the behaviour policy <tex>\mu</tex>:
        - We run a bunch of random schedule and modify <tex>\textbf{w}</tex> such that it reflects the reward/cost of a state. For example, having 1000000 vaccinated pop at day 60 is better than having none at day 60.

    - Represent the constraint as a huge penalty to the reward function when a state violates the constraint.

- How to do gradient descent/ascent in restricted domain? i.e. We cannot have mask compliance to be above 1 or below 0.

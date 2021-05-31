The *Schedule* page allows you to specify the [duration](/assets/duration.png) of your simulation as well as the implementation details of the interventions specified in the [interventions](/#intervention) page.

<figure>
    <img src="/assets/schedule.png" alt="drawing"/>
</figure>


*Interventions Timeline* ⑤ shows the schedule of each intervention. 

In order to define the schedule of an intervention, you can click on its name in the Interventions Timeline ⑤ section. After selecting an intervention, you can specify its implementation duration by providing the start and end dates ①; the locales it should be implemented in ③; and the values of the control parameters ④. You can specify multiple iterations of each intervention, each with the same or different implementation specifics. Interventions Timeline ⑤ will automatically visualize the implementation durations of your interventions as you specify the implementation details.


### Triggers
**EpiPolicy** allows you to invoke interventions dynamically. In order to do so, you can check the *Has Trigger* checkbox ②. Once you do it, you will be able to specify conditions in the form of Python functions in a code box, similar to the way you define interventions and costs. The function must return a ``True`` or ``False`` value. The intervention will be invoked if the function returns ``True``.

<figure>
    <img src="/assets/trigger.png" alt="drawing" style="width:50%;"/>
</figure>

### Add/Remove Iterations

1. Click the **+** button at the top-right of the table to define a new iteration. 
2. To delete an iteration, click the **x** button in the last cell of the row of the iteration you want to delete. 
3. To repeat)  an iteration periodically, click on the options button in the last cell of the row of the iteration you want to repeat. You can repeat interventions on a daily, weekly, monthly or annual basis.
    <img src="/assets/schedule-qa.png" alt="drawing" style="width:50%;"/>



<!-- ⓪ ① ② ③ ④ ⑤  -->
Facilities are places within a locale where people may reside in or travel to for various activities. These may include schools, households, places of worship, workplaces, etc. 
A facility is used to model unique environments that affect disease dynamics and how often and how long different population groups reside in these environments.

In **EpiPolicy**, you can define the facilities you want to include in your simulation in the *Facilities* page by following the following steps: 
1. Define the facilities you want to model by specifying a name for the facilitiy and, optionally, a description.
    <br>
    <img src="/assets/facilities-1.png" alt="drawing" style="width:70%;"/>
2. Define the proportion of time spent by each group in each facility.
    <br>
    <img src="/assets/facilities-2.png" alt="drawing" style="width:70%;"/>
3. Define the proportion of time spent by each group interacting with other groups within each facility.
    <br>
    <img src="/assets/facilities-3.png" alt="drawing" style="width:70%;"/>  

Once you have defined base values for your groups and facilities in steps 2 and 3, you can further refine your data by providing specific values for each locale by creating a new row via the add button at the top-right of each section and specifying your target locales in the first column (via [specification syntax](/#regex-syntax)).

You can also opt to utilize a built-in plugin to use [SynthPop](https://github.com/UDST/synthpop) to create and populate data for the following pre-defined facilities: Households, Schools, Workplaces, and Community Places. 

The SynthPop plugin can be accessed via the *New* button located at the top of the page.

<img src="/assets/facilities-synthpop-button.png" alt="drawing" style="width:30%;"/>  
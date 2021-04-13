Facilities are places within a locale where people may reside in or travel to for various activities. These may include schools, households, places of worship, workplaces, etc. 
A facility is used to model unique environments that affect disease dynamics and how often and how long different population groups reside in these environments.

In **EpiPolicy**, you can define the facilities you want to include in your simulation in the *Facilities* page by following the following steps: 
1. [Define](/assets/facilities-1.png) the facilities you want to model by specifying a name for the facilitiy and, optionally, a description.
2. [Define](/assets/facilities-2.png) the proportion of time spent by each group in each facility.
3. [Define](/assets/facilities-3.png) the proportion of time spent by each group interacting with other groups within each facility.

Once you have defined base values for your groups and facilities in steps 2 and 3, you can further refine your data by providing specific values for each locale by creating a new row via the add button at the top-right of each section and specifying your desired locales in the first column (via [specification syntax](/regex-syntax)).

You can also opt to utilize a built-in plugin to use [SynthPop](https://github.com/UDST/synthpop) to create and populate data for the following pre-defined facilities: Households, Schools, Workplaces, and Community Places. 

The SynthPop plugin can be accessed via the [New button](/assets/facilities-synthpop-button.png) located at the top of the page.
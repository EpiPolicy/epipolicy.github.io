
## Model Tags

**EpiPolicy** requires users to explicitly identify certain properties about their model and parameters in the _Model_ page, 
which are used to perform various tasks such as determining the number of total infections and deaths.
These properties are called _Tags_ and can be specified in the _Compartments_ and _Parameters_ tables.
Users can select multiple tags for any compartment or parameter.

### Compartment Tags 
The tags that can be selected in the _Compartments_ table are:
- **susceptible**
- **infectious**
- hospitalized
- death

The tags written in **bold** are required and must be selected for the relevant compartments.

<div class="tutorial-video-container">
    <video class="tutorial-video" autoplay muted loop controls>
        <source src="assets/create_your_first_model/model-compartment-tags.mp4" type="video/mp4">
    </video>
</div>

### Parameter Tags 
The tags that can be selected in the _Parameters_ table are:
- recovery 
- **transmission**

The tags written in **bold** are required and must be selected for the relevant parameters.

<div class="tutorial-video-container">
    <video class="tutorial-video" autoplay muted loop controls>
        <source src="assets/create_your_first_model/model-parameter-tags.mp4" type="video/mp4">
    </video>
</div>

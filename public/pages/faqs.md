1. In the model equations, is it required to explicitly specify the multiplicative operator? <br /> Yes, it is. Please specify mathematical operators explicitly while defining your equations.

2. What is meant by "administrative level" in the locales page? <br /> The administrative level is the level of granularity of the region for which you want to run your simulation. For example, level 0 indicates the selected country as a single unit; level 1 indicates second level administrative regions, such as emirates or states; level 2 indicates third level administrative regions, such as counties or cities; and so on.

3. Can I remove specific regions from the selected country in the locales page? <br /> Yes, you can. To do this, you will need to edit the JSON specification in the [JSON editor](json_editor) in the locales page. Just delete the JSON object of the desired locale you want to remove, as shown below.
<div class="tutorial-video-container">
    <video class="tutorial-video" style="width:400px;" autoplay muted loop controls>
        <source src="assets/locales-del.mov" type="video/mp4">
    </video>
</div>

4. Can I edit the pre-computed mobility data? <br /> Yes, you can. To do this, you will need edit the loaded data in the Mobility table in the Mobility page.

5. Can I import or export data for a specific section or page? <br /> No, you cannot. Importing or exporting data is done at the global level, which means that when you export your data at any page, the data from all of the pages will be exported. Similarly, when you import data from a specific page, the imported data will be loaded in all of the pages.

6. What is the "+" icon that appears on each field in all pages? <br /> This button allows you to add a bibliographic reference to the data field it appears on. Learn more about this feature here: [References](references).

7. Are the effects of interventions, such as border closures, shown in other pages such as the Mobility page? <br /> No, the effects of interventions are only shown in the results page, not in other pages.

8. Can I use programming functionalities such as for loops, if statements, and if-else statements in the effect and cost functions? <br /> Yes, you can write your code in the same way as you would in a regular Python function.

9. Can I use other libraries in the effect and cost functions? <br /> You can only use Pandas and NumPy in the effect and cost functions, in addition to the built-in libraries.

10. Can I delete results of previous simulations? <br /> This is not supported currently.

11. Can I save my model and data as a template in EpiPolicy? <br /> No, you cannot. Currently, you can only [export](import_export) your model and data as a JSON file.

12. Why are my results empty? <br /> Check if your mobility, facilities, and initialize data is set correctly.

13. Why is the status of my simulation "abort"? <br /> This status indicates there is a problem in your simulation specification. <br /> - Check if your model is set correctly and there are no errors in your equations such as missing tags or multiplicative operators or the population compartment (N). <br /> - You can also try seeing if your schedule is properly defined as well as whether there are any syntax or logical errors in your Python functions. <br /> - Lastly, verify if the names of locales, groups, parameters, facilities, etc. are used correctly in all of the sections in which they are used.



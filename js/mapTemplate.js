//Templates for the webgis maps


//access
const source = document.getElementById('webgis-map').innerHTML;

//function to replace handlebars expressions in the HTML
const template = Handlebars.compile(source);

//object holding values for filling out the handlebars template
const context = {
    cartolib: "Leaflet"
};

//calling template function to save the value to a variable
const compiledHtml = template(context);

//select the element that will contain the templated HTML
const cartolibText = document.getElementById('webgis-leaflet');

//Adding complited template to the web page
cartolibText.innerHTML = compiledHtml;

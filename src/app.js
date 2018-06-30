const SelectView = require('./views/select_view');
const DisplayView= require('./views/display_view');
const Countries = require('./models/countries');

document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript Loaded');

    const selectElement = document.querySelector('select#countries');
    const selectView = new SelectView(selectElement);
    selectView.bindEvents();
    console.log(selectView);

    // const countryContainer = document.querySelector('#country');
    // const displayView = new DisplayView(countryContainer);
    // displayView.bindEvents();
    // console.log(displayView);

    const countries = new Countries('https://restcountries.eu/rest/v2/all');
    console.log(Countries);
    countries.bindEvents();
    countries.getData()


});

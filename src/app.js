const SelectView = require('./views/select_view');
const Countries = require('./models/countries');

document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript Loaded');

    const selectElement = document.querySelector('#countries');
    const countriesDropdown = new SelectView(selectElement);
    console.log(countriesDropdown);
    countriesDropdown.bindEvents();

    const countries = new Countries();
    console.log(countries);
    countries.bindEvents();

});

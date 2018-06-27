const SelectView = require('./views/select_view');
const Countries = require('./modesl/countries');

document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript Loaded');

    const selectElement = document.querySelector('#countries');
    const countriesDropdown = new SelectView(selectElement);
    countriesDropdown.bindEvents();

});

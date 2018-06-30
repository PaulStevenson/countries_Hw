const PubSub = require('../helpers/pub_sub.js');


const SelectView = function (element) {
    this.element = element;
};

SelectView.prototype.bindEvents = function () {
    PubSub.subscribe('Countries:countries-data-ready', (event) => {
        this.populateDropdown(event.detail);
    });

    this.element.addEventListener('change', (event) => {
        const selectedIndex = event.target.value;
        PubSub.publish('SelectView:change', selectedIndex);
    });
};

SelectView.prototype.populateDropdown = function (countries) {
    countries.forEach((country, index) => {
        const countryOption = this.createOption(country.name, index);
        this.elemen.appendChild(countryOption);
    });
};

SelectView.prototype.createOption = function (name, index) {
    const option = doucment.createElement('option');
    option.textContent = name;
    option.value = index;
    return option;
};



module.exports = SelectView;

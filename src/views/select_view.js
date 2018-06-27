const PubSub = require('../helpers/pub_sub.js');


const SelectView = function (element) {
    console.log(element);
    this.element = element;
};

SelectView.prototype.bindEvents = function () {
    PubSub.subscribe('Countries:countries-data-ready', (event) => {
        console.log(event);
        const allCountries = event.detail;
        console.log(allCountries);

    })

};

module.exports = SelectView;

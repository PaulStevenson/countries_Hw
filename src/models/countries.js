const PubSub = require('../helpers/pub_sub.js');

const Countries =  function () {
    this.countries = countries
}

Countries.prototype.bindEvents = function () {
    this.getData();
    PubSub.publish('Countries:countries-data-read', this.countries);

};

Countries.prototype.getData = function () {
    const request = new Request ('https://restcountries.eu/rest/v2/all')

    request.get((countryData) => {
        console.log(countryData);
        // this.handleDataReady(countryData);
        // console.log(countryData);
        // this.countries = countryData;
        // PubSub.publish('Countries:countries-data-ready', this.countries);
    });
};

Countries.prototype.handleDataReady = function (countryData) {
    console.log(countryData);

};




module.exports =  Countries;

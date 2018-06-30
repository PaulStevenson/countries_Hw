const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/requests.js');

const Countries =  function (url) {
    this.url = url;
    this.countries = [];
}

Countries.prototype.bindEvents = function () {
    PubSub.subscribe('Select:country-selected', (event) => {
        selectedIndex = event.detail;
        console.log(selectedIndex);
        const countrySelected = this.countries[selectedIndex];
        PubSub.subscribe('Countries:countries-data-ready', countrySelected);
    });
};

Countries.prototype.getData = function () {
    const request = new Request(this.url);
    console.log(request);
    request.getData(data => this.handleDataRequest(data));
    console.log(request);
};

Countries.prototype.handleDataRequest = function (data) {
    this.countries = data;
    console.log(data);
    PubSub.publish('Countries:countries-data-ready', this.countires);
    console.log(this.countries);
};

module.exports =  Countries;

"use strict";
let requests = require('../js/requests.js');
let main = require('./main.js');
let _ = require('lodash');


var rides = [];
var restaurants = [];
var shows = [];
var vendors = [];


requests.loadAttractions().then((data) => {
    var adventure = requests.filterData(data);
    var advRides = _.filter(adventure[0], function(item) {
        return item.area_id === 3;
    });
    var advRidesObj = {Rides : advRides};
    var advRestaurants = _.filter(adventure[1], function(item) {
        return item.area_id === 3;
    });
    var advRestaurantsObj = {Restaurants : advRestaurants};
    var advShows = _.filter(adventure[2], function(item) {
        return item.area_id === 3;
    });
    var advShowsObj = {Shows : advShows};
    var advVendors = _.filter(adventure[3], function(item) {
        return item.area_id === 3;
    });
    var advVendorsObj = {Vendors : advVendors};
    main.populateFrontier(advRidesObj, advRestaurantsObj, advShowsObj, advVendorsObj);
});


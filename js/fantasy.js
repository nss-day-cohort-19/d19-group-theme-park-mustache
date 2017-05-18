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
        return item.area_id === 5;
    });
    var advRidesObj = {Rides : advRides};
    var advRestaurants = _.filter(adventure[1], function(item) {
        return item.area_id === 5;

    });
    var advRestaurantsObj = {Restaurants : advRestaurants};
    var advShows = _.filter(adventure[2], function(item) {
        return item.area_id === 5;
    });
    var advShowsObj = {Shows : advShows};
    var advVendors = _.filter(adventure[3], function(item) {
        return item.area_id === 5;
    });
    var advVendorsObj = {Vendors : advVendors};
    main.populateFantasy(advRidesObj, advRestaurantsObj, advShowsObj, advVendorsObj);
});


//Willie just in case your code is here//

// let map = require('../js/requests.js');
// let fantasy = {};
// let areaData = [];
// let attractionData = [];
// let typeData = [];

// let Fantasyland = document.getElementById("Fantasyland");

// fantasy.popFantasy = function(){
// 	// Fantasyland.innerHTML = "wubalubdubdub";
// 	// map.loadAreas();
// 	// map.loadAttractions();
// 	// map.loadTypes();
// 	areaData = map.getAreaData();
// 	attractionData = map.getAttractionData();
// 	typeData = map.getTypeData();
// 	// console.log("fantasy.js", map.getAttractionData());
// 	console.log("fantasy.js", attractionData);
// 	// console.log("fantasy.js", map.getTypeData());
// 	fantasy.popFantasyModal(attractionData);
// };

// fantasy.getFantasyAttractions = () => {
// 	Fantasyland.innerHTML = "wubalubdubdub";
// 	// return attractionData;
// 	console.log("fantasy.js", map.getAttractionData());
// };

// fantasy.popFantasyModal = (data) =>{
// 	console.log("Rick:", data);
// 	for (var i = 0; i < data.length; i++){
// 		if (data[i].area_id === 3 && data[i].type_id === 1){
// 			document.getElementById("31").innerHTML += `<li>${data[i].name}</li>`;
// 		}
// 		else if (data[i].area_id === 3 && data[i].type_id === 2){
// 			document.getElementById("32").innerHTML += `<li>${data[i].name}</li>`;
// 		}
// 		else if (data[i].area_id === 3 && data[i].type_id === 3){
// 			document.getElementById("33").innerHTML += `<li>${data[i].name}</li>`;
// 		}
// 		else if (data[i].area_id === 3 && data[i].type_id === 4){
// 			document.getElementById("34").innerHTML += `<li>${data[i].name}</li>`;
// 		}
// 	}
// };

// module.exports = fantasy;
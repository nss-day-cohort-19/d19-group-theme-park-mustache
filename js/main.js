"use strict";

let requests = require('./requests.js');
let _ = require('lodash');
let special = require('./special');

/************************
Azim's part
************************/
let Handlebars = require('hbsfy/runtime'),
    adventure = require('./adventure.js'),
    attractionsTemplate = require('../templates/attractions.hbs');
function populateIt (rides, restaurants, shows, vendors, whichOne){
	let div = document.createElement('div');
    div.innerHTML += `<h1>Rides</h1>${attractionsTemplate(rides)}
						<h1>Restaurants</h1>${attractionsTemplate(restaurants)}
						<h1>Shows</h1>${attractionsTemplate(shows)}
						<h1>Vendors</h1>${attractionsTemplate(vendors)}`;
	let descript = "";
	requests.loadAreas()
	.then( (data) => {
	    _.forEach(data, (currVal, index) =>{
	        // console.log("currVal.id", currVal.id);
	        descript = `<p>${currVal.description}</p>`;
			if (whichOne === 2 && currVal.id === 2) {
				$('#adventure-content').append(div);
				$('#adventure-header').append(descript);
			} else if (whichOne === 3 && currVal.id === 3) {
				$('#frontier-content').append(div);
				$('#frontier-header').append(descript);
			} else if (whichOne === 6 && currVal.id === 6) {
				$('#tomorrow-content').append(div);
				$('#discovery-header').append(descript);
			} else if (whichOne === 5 && currVal.id === 5) {
				$('#Fantasyland').append(div);
				$('#fantasy-header').append(descript);
			} else if (whichOne === 1 && currVal.id === 1) {
				$('#cinderella-content').append(div);
				$('#mainStreet-header').append(descript);
			}
	    });
	}, (reject) => {
	    console.log("loadAreas isn't working");
	});
}

var populateModal = function(rides, restaurants, shows, vendors) {
    // console.log("main.js", rides, "restaurants:", restaurants, "shows:", shows, "vendors:", vendors);
    populateIt(rides, restaurants, shows, vendors, 2);
};

var populateFrontier = function(rides, restaurants, shows, vendors) {
 	populateIt(rides, restaurants, shows, vendors, 3);
};
var populateTomorrow = function(rides, restaurants, shows, vendors) {
    populateIt(rides, restaurants, shows, vendors, 6);
};
var populateFantasy = function(rides, restaurants, shows, vendors) {
    populateIt(rides, restaurants, shows, vendors, 5);
};
var PopulateCin = function(rides, restaurants, shows, vendors) {
    populateIt(rides, restaurants, shows, vendors, 1);
};
module.exports = { populateModal, populateFrontier, PopulateCin, populateTomorrow, populateFantasy };
/************************
make sure to delete this
************************/
/************************
Load attractions list to DOM
************************/
requests.loadAttractions()
.then( (data) => {
	let array = requests.filterData(data);
	let rides = `<div id="rides" class="list"><h4>Rides</h4>`;
	let restuarant = `<div id="restaurants" class="list"><h4>Restaurants</h4>`;
	let show = `<div id="shows" class="list"><h4>Shows</h4>`;
	let vendor = `<div id="vendors" class="list"><h4>Vendors</h4>`;
	_.forEach(array, (value, index) =>{
		_.forIn(value, (currItem, number) => {
			if (currItem.type_id === 1){
				rides += `<p>${currItem.name}</p>`;
				// console.log("name", currItem.name, "currItem", currItem);
			} else if (currItem.type_id === 2){
				restuarant += `<p>${currItem.name}</p>`;
			} else if (currItem.type_id === 3){
				show += `<p>${currItem.name}</p>`;
			} else {
				vendor += `<p>${currItem.name}</p>`;
			}
		});
	// console.log("value", value, "index", index);
	});
	rides += `<a href="#map">Return to Park Map</a></div>`;
	restuarant += `<a href="#map">Return to Park Map</a></div>`;
	show += `<a href="#map">Return to Park Map</a></div>`;
	vendor += `<a href="#map">Return to Park Map</a></div>`;
	$('#all-attractions').html(rides + restuarant + show + vendor);

}, (reject) => {
	console.log("something is broken");
});

/******************
Event Listeners for Map
******************/
// $( "#map" ).on( "mousemove", function( event ) {
// 	var parentOffset = $(this).offset();
// 	var relX = event.pageX - parentOffset.left;
// 	var relY = event.pageY - parentOffset.top;
//   $( "#log" ).text( "relX: " + relX + ", relY: " + relY );
// });

$("#map").click(function(event) {
	var parentOffset = $(this).offset();
	var relX = event.pageX - parentOffset.left;
	var relY = event.pageY - parentOffset.top;
	if (relX >= 473 && relX <= 801 && relY >= 60 && relY <= 306){
		//fire fantasy modal
		$('#fantasy').modal('show');
	} else if (relX >= 261 && relX <= 462 && relY >= 158 && relY <= 290){
		//fire Adventure modal
		$('#adventure').modal('show');
	} else if (relX >= 541 && relX <= 725 && relY >= 373 && relY <= 695){
		//fire MainStreet modal
		$('#mainStreet').modal('show');
	} else if (relX >= 139 && relX <= 519 && relY >= 331 && relY <= 607){
		//fire Frontier Modal
		$('#frontier').modal('show');
	} else if (relX >= 746 && relX <= 1045 && relY >= 249 && relY <= 559){
		//fire Discovery modal
		$('#discovery').modal('show');
	}
});
/******************
******************/

//////////// Footer function /////////////
requests.loadParkInfo()
.then((data) => {
	// console.log("park Data for madeline", data);
	console.log();
	$("#park-information-footer").append(`<p><strong>&copy Mustache Parks Inc.</strong></p>
																				<p><strong>Park Location:</strong> <a href="https://goo.gl/maps/o9GWjwLygao">${data[0].location}</a></p>
																				<p><strong>Park Hours:</strong> ${data[0].operating_hours[0].opening}am - ${data[0].operating_hours[0].closing}pm</p>`);
});

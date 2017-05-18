"use strict";

let requests = require('./requests.js');
let _ = require('lodash');
let special = require('./special');

//Working on populating modals
let fantasy = require('./fantasy.js'),
	fantasyTemplate = require('../templates/fantasy-modal.hbs');
// Working on populating modals

let cinderella = require('./cinderella.js');


function popMapOnLoad(){
}
// let nav = document.getElementById("nav");
// nav.addEventListener("click", cinderella.show);


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
	rides += `<a href="#map">Return to Park Map</a><hr></div>`;
	restuarant += `<a href="#map">Return to Park Map</a><hr></div>`;
	show += `<a href="#map">Return to Park Map</a><hr></div>`;
	vendor += `<a href="#map">Return to Park Map</a><hr></div>`;
	$('#all-attractions').html(rides + restuarant + show + vendor);

}, (reject) => {
	console.log("something is broken");
});




//////////// Footer function /////////////
requests.loadParkInfo()
.then((data) => {
	// console.log("park Data for madeline", data);
	console.log();
	$("#park-information-footer").append(`<p><strong>&copy Mustache Parks Inc.</strong></p>
																				<p><strong>Park Location:</strong> <a href="https://goo.gl/maps/o9GWjwLygao">${data[0].location}</a></p>
																				<p><strong>Park Hours:</strong> ${data[0].operating_hours[0].opening}am - ${data[0].operating_hours[0].closing}pm</p>`);
});

// Working on populating modals
let hobo = document.getElementsByTagName("body");
hobo[0].addEventListener("click", function(){
	console.log(event);
});
let fantasyBtn = document.getElementById("fantasyBtn");
fantasyBtn.addEventListener("click", fantasy.popFantasy);
// Working on populating modals

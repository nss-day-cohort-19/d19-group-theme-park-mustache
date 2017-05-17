"use strict";

let requests = require('../js/requests.js');
let _ = require('lodash');
let cinderella = require('../js/cinderella.js');



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
	let rides = `<div class="list"><h4>Rides</h4>`;
	let restuarant = `<div class="list"><h4>Restaurants</h4>`;
	let show = `<div class="list"><h4>Shows</h4>`;
	let vendor = `<div class="list"><h4>Vendors</h4>`;
	_.forEach(array, (value, index) =>{
		_.forIn(value, (currItem, number) => {
			if (currItem.type_id === 1){
				rides += `<p>${currItem.name}</p>`;
				console.log("name", currItem.name, "currItem", currItem);
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
	rides += `<hr></div>`;
	restuarant += `<hr></div>`;
	show += `<hr></div>`;
	vendor += `<hr></div>`;
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

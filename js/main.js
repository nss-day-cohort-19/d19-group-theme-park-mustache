"use strict";

let something = require('../js/requests.js');
let _ = require('lodash');



// function popListOnLoad(){
// 	//pull attraction types
// 	var types = {};
// 	something.loadAttractions().then

// 	//find all attractions with area_ids 2, 3, 5, 6, 7
// 	//group those attractions by type_id and push into a group div with type id name.
// }

function popMapOnLoad(){
}



something.loadAttractions()
.then( (data) => {
// 	let divToDOM = `<div>

}, (reject) => {
	console.log("something is broken");
});


console.log('hi!');

//////////// Footer function /////////////
something.loadParkInfo()
.then((data) => {
	console.log("park Data for madeline", data);
	console.log();
	$("#park-information-footer").append(`<p><strong>&copy Mustache Parks Inc.</strong></p>
																				<p><strong>Park Location:</strong> <a href="https://goo.gl/maps/o9GWjwLygao">${data[0].location}</a></p>
																				<p><strong>Park Hours:</strong> ${data[0].operating_hours[0].opening}am - ${data[0].operating_hours[0].closing}pm</p>`);
});

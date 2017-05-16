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
	var filterAtrractions = _.filter(data, function(o){
		let correct = [];
		if (['area_id', 2] || ['area_id', 3] || ['area_id', 5] || ['area_id', 6] || ['area_id', 7]){
			correct.push(o);
		}
		return correct;
	});
	console.log("filterAtrractions", filterAtrractions);
}, (reject) => {
	console.log("something is broken");
});


console.log('hi!');
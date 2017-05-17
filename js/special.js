"use strict";

let _ = require('lodash');
let requests = require('../js/requests.js');
let special = {};

requests.loadAttractions()
.then( (data) => {
	let correctAreas = special.filterData(data);
	let timedEvents = special.findTimedEvents(correctAreas);
});

//filter out the correct areas
special.filterData = (data) => {
  var filteredAttractions = _.filter(data, function(item){return item.area_id === 2 ||
    item.area_id === 3 || item.area_id === 5 || item.area_id === 6 ||
    item.area_id === 7;});
  return filteredAttractions;
};

//filter out the timed events from the correct areas
//find items with a timed key
special.findTimedEvents = (data) => {
	var timedEvents = _.filter(data, "times");
	console.log("timedEvents", timedEvents);
	//attempt to pull one item with timed events
	var firstItemWithTimes = timedEvents[0].times;
	console.log("firstItemWithTimes", firstItemWithTimes);
};


// timeLoop(timedEvents);
// function timeLoop(data){
// 	for (var i = 0; i < data.length; i++) {
// 	for (var j = 0; j < data[i].length; j++) {
// 		console.log("data[i].times", data[i].times);
// 	}
// }
// }
// };

//if greater than 12 --> "pm" array



//parseFloat each time (change string to number value)

//convert military time to regular time to output to DOM












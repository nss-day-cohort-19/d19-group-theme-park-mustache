"use strict";

let _ = require('lodash');
let requests = require('../js/requests.js');
let special = {};

document.getElementById('clock-input').addEventListener("change", function(){
	$('#happening-now').empty();

requests.loadAttractions()
.then( (data) => {
	let correctAreas = special.filterData(data);
	let timedEvents = special.findTimedEvents(correctAreas);
  let showEvents = special.showEvents(timedEvents);
	});
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
  var events = [];
	var input;
	var inputNum;
	var timedEvents = _.filter(data, "times");
	 input = document.getElementById("clock-input").value;
	 console.log(input);
	 inputNum = parseFloat(input);
	 timeLoop(timedEvents);
		  function timeLoop(data){
		    for (var i = 0; i < data.length; i++) {
		      for (var j = 0; j < data[i].times.length; j++) {
		          var num = parseFloat(data[i].times[j]);
							if (num >= inputNum && num <= (inputNum + 29)) {
								events.push(data[i]);
							}
		    		}

		  		}
				}
		return events;
};

special.showEvents = (data) => {
  console.log("these are the events", data);
	for (var i = 0; i < data.length; i++) {
	$("#happening-now").append(`<h5>${data[i].name}</h5>
															<p>${data[i].description}</p>
															<p><strong>Times: ${data[i].times}</strong></p>`);
}
};

module.exports = special;


//if greater than 12 --> "pm" array



//parseFloat each time (change string to number value)

//convert military time to regular time to output to DOM


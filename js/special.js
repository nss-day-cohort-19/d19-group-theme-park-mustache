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
	for (var i = 0; i < data.length; i++) {
		var timeArrays = data[i].times;
		var newTimes = [];
		for (var j = 0; j < timeArrays.length; j++) {
			var hours = timeArrays[j].substring(0,2);
			var minutes = timeArrays[j].substring(2,4);
			if (hours >= 13) {
				var normalHour = hours - 12;
				var pmTime = normalHour + ":" + minutes + "pm";
				// console.log(pmTime);
				newTimes.push(pmTime);
			} if (hours < 13) {
				var amTime = hours + ":" + minutes + "am";
				newTimes.push(amTime);
			}
			console.log("The new Time Array", newTimes);
		}
	$("#happening-now").append(`<h4>${data[i].name}</h4>
															<p>${data[i].description}</p>
															<p><strong>Times:</strong> ${newTimes} </p>
															<hr>`);
}
};

module.exports = special;


//if greater than 12 --> "pm" array



//parseFloat each time (change string to number value)

//convert military time to regular time to output to DOM

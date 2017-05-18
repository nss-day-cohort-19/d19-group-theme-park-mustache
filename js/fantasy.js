'use strict';

let map = require('../js/requests.js'),
fantasy = {},
areaData = [],
attractionData, typeData = [],
fantasyTemplate = require('../templates/fantasy-modal.hbs'),
fantasyData;


let Fantasyland = document.getElementById("Fantasyland");

fantasy.popFantasy = function(){
	Fantasyland.innerHTML = "";
	map.filterByArea(3)
		.then( (data) =>{
		attractionData = data;
		fantasy.popFantasyModal(data);
		}, (reject) => {
			console.log(reject);
	});
};

fantasy.getFantasyAttractions = () => {
	Fantasyland.innerHTML = "wubalubdubdub";
	// return attractionData;
	console.log("fantasy.js", map.getAttractionData());
};

fantasy.popFantasyModal = (data) =>{
	fantasyData = data;
	for (var i = 0; i < data.length; i++){
		// if (data[i].area_id === 3 && data[i].type_id === 1){
		// 	document.getElementById("31").innerHTML += `<li>${data[i].name}</li>`;
		// }
		// else if (data[i].area_id === 3 && data[i].type_id === 2){
		// 	document.getElementById("32").innerHTML += `<li>${data[i].name}</li>`;
		// }
		// else if (data[i].area_id === 3 && data[i].type_id === 3){
		// 	document.getElementById("33").innerHTML += `<li>${data[i].name}</li>`;
		// }
		// else if (data[i].area_id === 3 && data[i].type_id === 4){
		// 	document.getElementById("34").innerHTML += `<li>${data[i].name}</li>`;
		// }
        console.log(fantasyData[i]);
        Fantasyland.innerHTML += fantasyTemplate(fantasyData);
	}
};

module.exports = fantasy;
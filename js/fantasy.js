'use strict';

let map = require('../js/requests.js');
let fantasy = {};
let areaData = [];
// let attractionData;
let typeData = [];

let Fantasyland = document.getElementById("Fantasyland");

fantasy.popFantasy = function(){
	let attractionData = map.filterByArea(3);
	console.log("Mario", attractionData[1]);
	map.loadAttractions()
.then((data)=>{
	fantasy.popFantasyModal(data);
});

};

fantasy.getFantasyAttractions = () => {
	Fantasyland.innerHTML = "wubalubdubdub";
	// return attractionData;
	console.log("fantasy.js", map.getAttractionData());
};

fantasy.popFantasyModal = (data) =>{
	console.log("Rick:", data);
	for (var i = 0; i < data.length; i++){
		if (data[i].area_id === 3 && data[i].type_id === 1){
			document.getElementById("31").innerHTML += `<li>${data[i].name}</li>`;
		}
		else if (data[i].area_id === 3 && data[i].type_id === 2){
			document.getElementById("32").innerHTML += `<li>${data[i].name}</li>`;
		}
		else if (data[i].area_id === 3 && data[i].type_id === 3){
			document.getElementById("33").innerHTML += `<li>${data[i].name}</li>`;
		}
		else if (data[i].area_id === 3 && data[i].type_id === 4){
			document.getElementById("34").innerHTML += `<li>${data[i].name}</li>`;
		}
	}
};

module.exports = fantasy;
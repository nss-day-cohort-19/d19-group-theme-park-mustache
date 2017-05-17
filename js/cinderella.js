"use strict";

let requests = require('./requests.js');
let _ = require('lodash');
let map = {};

map.show = () => {
	console.log("yummy!");
};



requests.filterByArea(2)
	.then( (data) =>{
	console.log("data on cinderella", data[2]);
	}, (reject) => {
		console.log(reject);
});



// _.forIn(hi, (currVal, index) =>{
// 	console.log("currVal", currVal, "index", index);
// });



module.exports = map;
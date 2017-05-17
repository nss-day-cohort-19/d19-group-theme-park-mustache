"use strict";

let requests = require('./requests.js');
let _ = require('lodash');
let map = {};

map.show = () => {
	console.log("yummy!");
};



let hi = requests.filterByArea(2);
console.log("hi", hi);

module.exports = map;
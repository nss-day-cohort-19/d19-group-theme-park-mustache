(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],3:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],4:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],5:[function(require,module,exports){
"use strict";


},{}],6:[function(require,module,exports){
"use strict";


let areaData = [];
let attractionData = [];
let typeData = [];
let parkInfo = [];
let map = {};




map.loadAreas = function() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://theme-park-268d3.firebaseio.com/areas/.json"
    }).done(function(data) {
    	areaData = data;
      resolve(data);
      console.log(data);
    }).fail(function(error) {
      reject(error);
    });
  });
};
map.loadAreas();
map.loadTypes = function() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://theme-park-268d3.firebaseio.com/attraction_types/.json"
    }).done(function(data) {
    	typeData = data;
      resolve(data);
       console.log(data);
    }).fail(function(xhr, status, error) {
      reject(error);
    });
  });
};
map.loadTypes();
map.loadAttractions = function() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://theme-park-268d3.firebaseio.com/attractions/.json"
    }).done(function(data) {
    	attractionData = data;
      resolve(data);
       console.log(data);
    }).fail(function(xhr, status, error) {
      reject(error);
    });
  });
};
map.loadAttractions();
map.loadParkInfo = function() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://theme-park-268d3.firebaseio.com/park-info/.json"
    }).done(function(data) {
    	parkInfo = data;
      resolve(data);
       console.log(data);
    }).fail(function(xhr, status, error) {
      reject(error);
    });
  });
};
map.loadParkInfo();
// map.getAreaData = () => {
//   console.log(areaData);
// 	return areaData;
// };

// map.getAttractionData = () => {
// 	return attractionData;
// };

// map.getTypeData = () => {
// 	return typeData;
// };
// map.getParkData = () => {
// 	return parkInfo;
// };



module.exports = map;






},{}],7:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],8:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}]},{},[1,2,3,4,5,6,7,8]);

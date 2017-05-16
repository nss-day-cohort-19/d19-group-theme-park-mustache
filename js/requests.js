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
// map.loadParkInfo();
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

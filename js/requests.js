"use strict";

let _ = require('lodash');
// let requests = require('./requests.js');
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
      // console.log(data);
    }).fail(function(error) {
      reject(error);
    });
  });
};
// map.loadAreas();

map.loadTypes = function() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://theme-park-268d3.firebaseio.com/attraction_types/.json"
    }).done(function(data) {
    	typeData = data;
      resolve(data);
       // console.log(data);
    }).fail(function(xhr, status, error) {
      reject(error);
    });
  });
};
// map.loadTypes();

map.loadAttractions = function() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://theme-park-268d3.firebaseio.com/attractions/.json"
    }).done(function(data) {
    	attractionData = data;
      resolve(data);
       // console.log(data);
    }).fail(function(xhr, status, error) {
      reject(error);
    });
  });
};
// map.loadAttractions();

map.loadParkInfo = function() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://theme-park-268d3.firebaseio.com/park-info/.json"
    }).done(function(data) {
    	parkInfo = data;
      resolve(data);
       // console.log(data);
    }).fail(function(xhr, status, error) {
      reject(error);
    });
  });
};
// map.loadParkInfo();

map.filterData = (data) => {
  var filteredAttractions = _.filter(data, function(item){return item.area_id === 2 ||
    item.area_id === 3 || item.area_id === 5 || item.area_id === 6 ||
    item.area_id === 1;});
  var groupedAttractions = _.groupBy(filteredAttractions, (obj) =>{
    return obj.type_id;
  });
  // console.log("groupedAttractions", groupedAttractions);
  var ourAttractions = _.filter(groupedAttractions, function(obj){
    // console.log("obj", obj);
    for (let item in obj){
      return obj[item].type_id === 1 || obj[item].type_id === 2 ||
      obj[item].type_id === 3 || obj[item].type_id === 4;
    }
  });
  // console.log("ourAttractions", ourAttractions);
  return ourAttractions;
};

map.filterByArea = (areaNum) => {
  let newArray = [];
  map.loadAttractions()
  .then( (data) =>{
    let array = map.filterData(data);
    _.forEach(array, (value, index) =>{
      _.forIn(value, (currVal, num) =>{
        if (currVal.area_id === areaNum){
          newArray.push(currVal);
        }
      });
    });
    // console.log("filterByArea's array", newArray);
  }, (reject) =>{
    console.log("filterByArea is broken");
  }
  );
  return newArray;
};

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

console.log(map.filterByArea(3));


module.exports = map;

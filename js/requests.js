"use strict";


let areaData = [];
let attractionData = [];
let typeData = [];
let parkInfo = [];
let map = {};




map.loadAreas = function() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: ""
    }).done(function(data) {
    	areaData = data;
      resolve(data);
    }).fail(function(xhr, status, error) {
      reject(error);
    });
  });
};

map.loadTypes = function() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: ""
    }).done(function(data) {
    	typeData = data;
      resolve(data);
    }).fail(function(xhr, status, error) {
      reject(error);
    });
  });
};

map.loadAttractions = function() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: ""
    }).done(function(data) {
    	attractionData = data;
      resolve(data);
    }).fail(function(xhr, status, error) {
      reject(error);
    });
  });
};

map.loadParkInfo = function() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: ""
    }).done(function(data) {
    	parkInfo = data;
      resolve(data);
    }).fail(function(xhr, status, error) {
      reject(error);
    });
  });
};

map.getAreaData = () => {
	return areaData;
};

map.getAttractionData = () => {
	return attractionData;
};

map.getTypeData = () => {
	return typeData;
};
map.getParkData = () => {
	return parkInfo;
};



module.exports = map;






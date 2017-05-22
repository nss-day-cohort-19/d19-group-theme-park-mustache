"use strict";
var firebase = require('firebase');
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCwQyMoUEB7etZbODDvFcfSmWQ-HkCMFjk",
  authDomain: "user-list-group-project.firebaseapp.com",
  databaseURL: "https://user-list-group-project.firebaseio.com",
  projectId: "user-list-group-project",
  storageBucket: "user-list-group-project.appspot.com",
  messagingSenderId: "921654286586"
};
firebase.initializeApp(config);
const dtobject = firebase.database().ref();

var firebaseLink = "https://user-list-group-project.firebaseio.com/.json";

var domData = `<div>`;
$('.modal-body').click((e) => {
  if (e.target.innerHTML === 'add') {
    $('.badge').text(parseInt($('.badge').text()) + 1);
    var spanPar = e.target.parentElement.parentElement;
    $(e.target).prop("disabled",true);
    $(spanPar).append("<span>Added!</span>");
    dtobject.child('list').push(spanPar.firstChild.textContent);
    $('#list-content').append(`<h4>${spanPar.firstChild.textContent}</h4>`);
  }
});
$('.modal-footer').click((e) => {
    if (e.target.innerHTML === 'Clear') {
      firebase.database().ref("list").remove();
      $('.badge').text(parseInt($('.badge').innerHTML = 0));
      $('#list-content')[0].innerHTML = '';
    }
});

$.getJSON(firebaseLink, function(data) {
  if (data === null) {
    console.log('there is no events');
  } else {
      $('.badge').text(Object.keys(data.list).length);
      var list = data.list;
      for (let prop in list) {
      var keyValue = list[prop];
      domData += `<h4>${keyValue}</h4>`;
      }
      domData += `</div>`;
      $('#list-content').append(domData);
    }
});

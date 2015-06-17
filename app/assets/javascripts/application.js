// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require d3
//= require_tree .


function disableButton() {
  var buttons = document.getElementsByClassName("btn");
  buttons[6].disabled = true;
  buttons[6].value = "Updated";
  return true;
}

function hideLast() {
  var sections = document.getElementsByClassName("association");
  last = sections[sections.length-1];
  last.style.display = "none"
}

function showLast() {
  var sections = document.getElementsByClassName("association");
  last = sections[sections.length-1];
  last.style.display = "block"
}

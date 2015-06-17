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
  button = buttons[6];
  button.disabled = true;
  button.value = "Updating...";
  return true;
}

function hideLast() {
  var sections = document.getElementsByClassName("association");
  var last = sections[sections.length - 1];
  last.style.display = "none";
}

function showLast() {
  var sections = document.getElementsByClassName("association");
  var last = sections[sections.length - 1];
  last.style.display = "block";
}

function hideAndDelete(index) {
  var sections = document.getElementsByClassName("association");
  sections[index].style.display = "none";
  var records = document.getElementsByClassName("destroy");
  records[index].checked = "true";
}

function currentYPosition() {
    if (self.pageYOffset) return self.pageYOffset;
    return 0;
}

function elmYPosition(id) {
    var elm = document.getElementById(id);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}

function smoothScroll(id) {
    var startY = currentYPosition();
    var stopY = elmYPosition(id);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY); return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
        for ( var i=startY; i<stopY; i+=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }
    for ( var i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
    return false;
}

var toggle = false;
var container = null;

function myFunction() {
  var nav = document.getElementById("topnav");
  var title = document.getElementById("web-title");

  if (!toggle) {
    title.style.display = "none";
    nav.className += " navbar-toggled";
    toggle = true;
  } else {
    title.style.display = "inline-block";
    nav.className = "navbar topnav";
    toggle = false;
  }
}

window.onload = function() {
  var numbers = document.getElementsByClassName("numberText");
  if (numbers != null || numbers != undefined) {
    for (var i=0; i < numbers.length; i++) {
      var elem = numbers[i];
      elem.innerHTML += numbers.length;
    }
  }
}

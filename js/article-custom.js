// Change Logo
var headerLogo = document.getElementById("header-logo").src;
console.log(headerLogo);

function myFunction(x) {
    if (x.matches) { // If media query matches
        document.getElementById("header-logo").src = "../img/homepage-images/ps_logofinal_resized.png";
    } else {
        document.getElementById("header-logo").src = "../img/homepage-images/ps_withtextfinal2.png";
    }
  }
  
  var x = window.matchMedia("(max-width: 768px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes

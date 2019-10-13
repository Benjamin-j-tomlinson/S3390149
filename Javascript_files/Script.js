
window.onscroll = function() {myFunction()};

var navbar = document.getElementsByTagName("h2");
var sticky = navbar.offsetTop;

function myFunction(window.pageYOffset) {
  if (window.pageYOffset >= sticky) {
      alert("yes this is working")
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
};

function myFunction(x) {
  if (x.matches) { 
    document.body.style.backgroundColor = "#7e9bcc";
  } else {
   document.body.style.backgroundColor = "#c3d2eb";
  }
}
var x = window.matchMedia("(max-width: 700px)")

myFunction(x);

x.addEventListener("change", function() {
  myFunction(x);
});
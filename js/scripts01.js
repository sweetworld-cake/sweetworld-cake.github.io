// Modal Image Gallery
// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-black";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-black", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
//Slideshow show
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3500); // Change image every 2,5 seconds
}
/////////////////////////////////////////
///////////////////////////////////////////////
var j = 0;
var txt03 = 'Krzysztof Kopciński';
var speed = 50;
function typeWriter() {
  if (j < txt03.length) {
    document.getElementById("typewriter011").innerHTML += txt03.charAt(j);
    j++;
    setTimeout(typeWriter, speed);
  }
	 }
typeWriter();

var k = 0;
var txt02 = 'Pastry Chef';
var speed = 50;
function typeWriter02() {
  if (k < txt02.length) {
    document.getElementById("typewriter022").innerHTML += txt02.charAt(k);
    k++;
    setTimeout(typeWriter02, speed);
  }
	 }
typeWriter02();

////////////
///////////////////////////////////////
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex1 = 1;
showDivs(slideIndex1);
function plusDivs(m) {
  showDivs(slideIndex1 += m);
}

function currentDiv(m) {
  showDivs(slideIndex1 = m);
}

function showDivs(m) {
  var d;
  var z = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (m > z.length) {slideIndex1 = 1}
  if (m < 1) {slideIndex1 = z.length}
  for (d = 0; d < z.length; d++) {
    z[d].style.display = "none";
  }
  for (d = 0; d < dots.length; d++) {
    dots[d].className = dots[d].className.replace(" w3-opacity-off", "");
  }
  z[slideIndex1-1].style.display = "block";
  dots[slideIndex1-1].className += " w3-opacity-off";
  captionText.innerHTML = dots[slideIndex1-1].alt;
}

	
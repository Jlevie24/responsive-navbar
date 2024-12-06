//Variable for responsive nav bar

const navLinks = document.getElementById('nav-links');
const btn = document.getElementById('btn'); 
const xBtn = document.getElementById('xBtn'); 

// function for responsive nav bar

btn.addEventListener ('click', function() {
  navLinks.classList.toggle ('toggle');
  btn.classList.toggle ('btn-toggle');
  xBtn.classList.toggle ('x-icon-toggle');
});

xBtn.addEventListener ('click', function() {
  navLinks.classList.toggle ('toggle');
  btn.classList.toggle ('btn-toggle');
  xBtn.classList.toggle ('x-icon-toggle');
});

navLinks.addEventListener ('click', function() {
  navLinks.classList.remove ('toggle');
  btn.classList.toggle ('btn-toggle');
  xBtn.classList.remove ('x-icon-toggle');
});

// varaibles for light-dark theme mode

const darkModeBtn = document.getElementById ('moon-btn');
const body = document.body;

darkModeBtn.addEventListener ('click', function() {
  body.classList.toggle ('dark-mode');
})






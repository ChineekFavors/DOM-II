// Your code goes here
//first eventListener
//mouseover event toggle colors black and yellow
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover',function(){
  if (logoHeading.style.color === "black"){
      logoHeading.style.color = "yellow";
  }
  else{logoHeading.style.color = "black";}	
});

//second eventListener
//mouseout bus image grow
const img = document.querySelector('header.intro img');
img.addEventListener('mousewheel', function(){
  if(img.style.width === '100%'){
    img.style.width = '50%';
  }
  else{img.style.width = '100%';}

})
//third event on load display alert box
window.addEventListener('load', () => {
    alert('welcom to fun bus you get 25% off your first ride!');
});


//fourth event click h2 and text change colors and text below change
//h2
const welcomeH2 = document.querySelector('header.intro h2');
//paragraph
const para = document.querySelector('header.intro p');
welcomeH2.addEventListener('click', () =>{
  welcomeH2.style.color = 'yellow';
  para.textContent = 'Yes Yes the fun bus has arrived!';
  para.style.fontSize = '200%';

})
//fifth event
//dbclick image and it chages to diffent src
const adventureImg = document.querySelector('div.img-content img');

adventureImg.addEventListener('dblclick', function () {
    adventureImg.src = 'img/fun-bus.jpg';
 
});

//sixth event
const destination = document.querySelector('section.content-destination p');
destination.addEventListener("mouseenter", function( event ) {   
  // highlight the mouseenter target
   event.target.style.color = "purple";
   event.target.style.fontSize = '4rem';
})
//seventh event



//[ ] Nest two similar events somewhere in the site and prevent the event propagation properly
const divtwo =document.querySelector('div.destination')
divtwo.addEventListener("click", function( ) {   
  // highlight the mouseenter target
   divtwo.style.backgroundColor = "red";   
})

const divtwoP =document.querySelector('div.destination p')
divtwoP.addEventListener("click", function( event ) {   
  // highlight the mouseenter target
   event.target.style.color = "green";
   event.target.style.fontSize = '3rem';
   event.stopPropagation();
})

//[ ] Stop the navigation from items from refreshing the page by using `preventDefault()`
const navLinks =  document.querySelectorAll('nav.nav a');

 navLinks[0].addEventListener('click', function(e){
  e.preventDefault();
 })
 navLinks[1].addEventListener('click', function(e){
  e.preventDefault();
 })
 navLinks[2].addEventListener('click', function(e){
  e.preventDefault();
 })
 navLinks[3].addEventListener('click', function(e){
  e.preventDefault();
 })




















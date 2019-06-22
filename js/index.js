// Your code goes here
//first eventListener
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover',function(event){
	event.target.style.color = 'yellow';
	
});

//second eventListener

const bus = document.querySelector('.intro img');
bus.addEventListener('click', function(event){
	alert('All aboard the Fun Bus!');
});
//third eventListener

function zoom(event) {

  if (event.deltaY < 0) {
    // Zoom in
    scale *= event.deltaY * -2;
  }
  else {
    // Zoom out
    scale /= event.deltaY * 2;
  }

  // Restrict scale
  scale = Math.min(Math.max(.125, scale), 4);

  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('.logo-heading');
document.onwheel = zoom;

//fourth eventListener
const para = document.querySelector('.intro p');
para.addEventListener('mousemove', function(e){
	e.target.style.color = 'yellow';
});

//fifth eventListener
const pic = document.querySelector('.img-content img');
pic.addEventListener('dblclick', function(e){
	console.log('ibeen');
	e.target.src = '';
});

//[ ] Nest two similar events somewhere in the site and prevent the event propagation properly
//[ ] Stop the navigation from items from refreshing the page by using `preventDefault()`

const nav = document.querySelector('.nav-link');

console.log('i work')


















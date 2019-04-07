// Starter code for function

// What do I want to add the event handler on
var container = document.getElementById('container');

var totalClicks = 0;

// What is the event handler
function handleClick(event) {
  var target = event.target;
  if (target.className === 'product'){
    event.target.id = 'dragon';
    event.target.src = './img/dragon.jpg';
    totalClicks++; //add limiter for clicks

    if(totalClicks === 25){  //click limiter if statement needs to be outside handleClick
      container.removeEventListener('click'); //read about on MDN
      totalClicks = 0;
    }
  }
}
//Add event handler to DOM
container.addEventListener('click', handleClick);

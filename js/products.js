// Starter code for function

// What do I want to add the event handler on
var container = document.getElementById('container');

// What is the event handler
function handleClick(event) {
  console.log('Yahoo!');
  var target = event.target;
  if (target.className === 'product'){
    //SOMETHING
    console.log(target.className);
  }

}
//Add event handler to DOM
container.addEventListener('click', handleClick);

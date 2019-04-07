'use strict';

// Global Array/Storage needed

// Global Variables

var productPhoto = document.getElementById('productPhoto');
var PRODUCTS = {};
var totalVotesOnPage = 0;

// Starter code for function

function Product(){
  this.imgFilePath = imgFilePath;
  this.name = name;
  this.totalVotes = this.totalViews = 0;
  this.HTMLid = HTMLid;

  PRODUCTS[this.HTMLid] = this;
}

Product.prototype.getPercentClicked = function(){
  return this.totalVotes / this.totalViews;
};

Product.prototype.render = function(parentId){
  var parent = document.getElementById(parentId);

  var img = document.createElement('img');
  img.setAttribute('id', this.HTMLid);
  img.setAttribute('src', this.imgFilePath);
  img.setAttribute('class', 'product');

  parent.appendChild(img);
};

function randomlySelectNewImage(){

}

function addCurrentSetOfImages(event){
  event.target.id = 'dragon';
  event.target.src = './img/dragon.jpg';
}

function displayResults(){

}

// What is the event handler
function handleClick(event) {
  if (event.target.className === 'product_photo'){
    PRODUCTS[event.target.id].totalVotesOnPage++;

    //TO DO: If total clicks reached, stop listening
    if(totalVotesOnPage === 25){ //click limiter if statement needs to be outside handleClick
      productPhoto.removeEventListener('click'); //read about on MDN
      totalVotesOnPage = 0;
      displayResults();
      return;
    }

    randomlySelectNewImage();
    addCurrentSetOfImages(event);
  }
}

//Add event handler to DOM
productPhoto.addEventListener('click', handleClick);

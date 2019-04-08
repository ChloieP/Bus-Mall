'use strict';

// Global Scope Variables & Functions

var productImg = document.getElementById('productImg');
var totalVotesOnPage = 0;
var maxImages = 19;
var minImages = 0;
var PRODUCTS = {};
var productArray = [
  ['./img/bag.jpg', 'bag', 'bag'],
  ['./img/banana.jpg', 'banana', 'banana'],
  ['./img/bathroom.jpg', 'bathroom', 'bathroom'],
  ['./img/boots.jpg', 'boots', 'boots'],
  ['./img/breakfast.jpg','breakfast', 'breakfast'],
  ['./img/bubblegum.jpg', 'bubblegum', 'bubblegum'],
  ['./img/chair.jpg', 'chair ', 'chair'],
  ['./img/cthulhu.jpg', 'cthulhu', 'cthulhu'],
  ['./img/dog-duck.jpg', 'dog-duc', 'dog-duc'],
  ['./img/dragon.jpg', 'dragon', 'dragon'],
  ['./img/pen.jpg', 'pen', 'pen'],
  ['./img/pet-sweep.jpg', 'pet-sweep', 'pet-sweep'],
  ['./img/scissors.jpg', 'scissors', 'scissors'],
  ['./img/shark.jpg', 'shark', 'shark'],
  ['./img/sweep.png', 'sweep', 'sweep'],
  ['./img/tauntaun.jpg', 'tauntaun', 'tauntaun'],
  ['./img/unicorn.jpg', 'unicorn', 'unicorn'],
  ['./img/usb.gif', 'usb', 'usb'],
  ['./img/water-can.jpg', 'water-can', 'water-can'],
  ['./img/wine-glass.jpg', 'wine-glass', 'wine-glass'],
];

//https://stackoverflow.com/questions/38824349/how-to-convert-an-object-to-an-array-of-key-value-pairs-in-javascript

var PRODUCTS_ARRAY = Object.keys(productArray).map(function(key){
  return [Number(key), productArray[key]];
});

function Product(imgFilePath, name, HTMLid){
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

// Renders products, puts them in the DOM, gets totalViews, and adds eventListener to images

function newProduct(){
  for (var i = 0; i < productArray.length; i++ ){
    new Product(productArray[i][0], productArray[i][1], productArray[i][2]);
  }
}

function randomlySelectNewImage(minImages, maxImages){
  return Math.random() * (maxImages - minImages) + minImages;
}

// function renderImages() {
//   for (var i = 0; i < 3; i++) {

//   }
// }

var listResults = function (){
  document.createElement('resultsList');

  // PRODUCTS_ARRAY.sort(function(a, b)) {

};

// Event Handler

function votedImage(event) {
  if (event.target.className === 'product_photo'){
    PRODUCTS[event.target.id].totalVotesOnPage++;

    if(totalVotesOnPage === 25){ //click limiter if statement needs to be outside votedImage
      productImg.removeEventListener('click', function votedImage(event){});
      totalVotesOnPage = 0;
      listResults();
      return;
    }

    randomlySelectNewImage();
    addCurrentSetOfImages(event);

  }
}

//Add event handler to DOM
// productImg.addEventListener('click', handleClick);
//entry point

// var bag = new Product ('./img/bag.jpg', 'bag', 'bag');
// console.log(productArray[i]);

var canvas = document.getElementById('myChart');
var ctx = canvas.getContext('2d');
ctx.width = 50;
ctx.height = 50;

var backgroundColors = [
  'rgb(255, 99, 32)',
  'rgb(20, 40, 230)',
  'rgb(10, 240, 6)'
];

// Chart JS

var datasetItem = {
  data: [10, 20, 40],
  backgroundColor: backgroundColors
};

var data = {
  labels: ['red', 'blue', 'green'],
  datasets: [datasetItem]
};

var pieChartConfig = {
  type: 'doughnut',
  data: data,
};

var pieChart = new Chart(ctx, pieChartConfig);


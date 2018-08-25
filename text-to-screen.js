// author: Raymond
// date: 25/08/2018

// font setup
var font, fontsize = 40

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('assets/Roboto-Light.ttf');
}

// function setup() {
//   canvas = createCanvas(720, 480);
//   canvas.position(250);
//
//   // Set text characteristics
//   textFont(font);
//   textSize(fontsize);
//   textAlign(CENTER, CENTER);
//
//   drawSentence();
// }

// class for individual words as objects
function CreateNewWord(word, Parent) {
  //create a new word which will go into a list of words
  this.word = createDiv();
  this.word.parent(Parent);
  this.word.class("word");

  let wordTextObj = createElement("p", word);
  wordTextObj.parent(this.word);

  this.wordText = word;
  this.color = "white";
  this.status = null; //0 - correct

  //changing the Color
  this.changeStatus = function(Status) {
    this.status = Status;
    //console.log("Color changing!");
    if (Status == 0) {
      this.word.style("color", "green");
    } else if (Status == 1) {
      this.word.style("color", "red");
    } else if (Status == 2) {
      this.word.style("color", "yellow");
      //redundant
    }
  }
}
/*
The Bored API helps you find things to do when you're bored! There are fields like the number of participants, activity type, and more that help you narrow down your results.
https://www.boredapi.com/
https://www.boredapi.com/api/activity
*/

let RandomActivity;
let toggle = false;

let smile; //smile.png preload
function preload(){
  smile = loadImage("images/smile.png")
}  

function setup() {
  createCanvas(800, 600);
  rectMode(CENTER);
//fetching data from Board API
fetch("https://www.boredapi.com/api/activity")
.then((response) => {
console.log("response received")
console.log(response)
return response.json()
})
.then((data) => {
  console.log("json parsed!")
  console.log(data["activity"])
  RandomActivity = data["activity"]//load activity from Board API and give it to activity
  return data['activity']
})
.catch((err) => {
console.log("it didn't work!")
console.error(err)
})
  }
  
  
  function draw() {
  background(9,101,234);
  //outline
  stroke(10);
  strokeWeight(4);    
  fill(255);
  rect(400,300,width - 150,250,8);
  //pink rect
  fill(244, 124, 124);
  rect(400,200,width - 150,50,8, 8, 0, 0);//small pink rect
  //text
  noStroke();
  fill(15);
  textSize(20);
  textStyle(BOLD);
  text("Find things to do when you're board!", 100, 208);
  //smile png
  push()
  translate(width / 2, height / 2);
  rotate(PI / 180 * 15); //rotate smile.png
  image(smile,150,-250,100,100);
  imageMode(CENTER);
  pop()

  if(RandomActivity != undefined){
    textSize(40);
    textStyle(BOLD);
    noStroke();
    fill(30);
    textWrap(WORD);
    text(RandomActivity,400,280,600);
  }
  }
  



let catCount = 0;
let dogCount = 0;
let birdCount = 0;
let fishCount = 0;


let gotData = false;

let showMessageCat = false;
let showMessageDog = false;
let showMessageBird = false;
let showMessageFish = false;

window.addEventListener('DOMContentLoaded', async () => {

        
// let showVotes = true;
// let voteCat = true; 
// let catCount = 0;
// let voteDog = true; 





// GET function using loadGet() | From Postman

async function loadGet(){
console.log("running loadGet")


// ????
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("animal", "dog");
urlencoded.append("votes", "0");

var requestOptions = {
method: 'GET',
headers: myHeaders,
// body: urlencoded,
redirect: 'follow'
};


const data = await fetch("http://localhost:3030/api/",requestOptions);
const result = await data.json();
console.log(result[0].votes);

catCount = result[3].votes;
dogCount = result[2].votes;
birdCount = result[1].votes;
fishCount = result[0].votes;

gotData = true;

showAllVotes();
}


///
const specialUrlCat = "http://localhost:3030/api/tP9eCA3nl6VeJBu9"

const specialUrlDog = "http://localhost:3030/api/b4mkpyQp3c2zhcXd"

const specialUrlBird = "http://localhost:3030/api/aWq4oGUP71nivULK"

const specialUrlFish = "http://localhost:3030/api/PMgfiYc84P0FZwDb"

// define a custom function to wrap your await
async function mySpecialRequestCat(url){
try{
  catCount++;

  const options = {
    method: 'PUT',
    headers: {
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      "votes" : catCount
    })
  }

    const data = await fetch(url,options);
    const result = await data.json();

    getVotesCat(result);

} catch(err){
    return err;
}  
}

// define a custom function to wrap your await
async function mySpecialRequestDog(url){
try{
  // dogCount= dogCount+3;
  dogCount++
  

  const options = {
    method: 'PUT',
    headers: {
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      "votes" : dogCount
    })
  }

    const data = await fetch(url,options);
    const result = await data.json();

    getVotesDog(result);

} catch(err){
    return err;
}  
}


// define a custom function to wrap your await
async function mySpecialRequestBird(url){
  try{
    // dogCount= dogCount+3;
    birdCount++
    
  
    const options = {
      method: 'PUT',
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        "votes" : birdCount
      })
    }
  
      const data = await fetch(url,options);
      const result = await data.json();
  
      getVotesBird(result);
  
  } catch(err){
      return err;
  }  
  }



  // define a custom function to wrap your await
async function mySpecialRequestFish(url){
  try{
    // dogCount= dogCount+3;
    fishCount++
    
  
    const options = {
      method: 'PUT',
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        "votes" : fishCount
      })
    }
  
      const data = await fetch(url,options);
      const result = await data.json();
  
      getVotesFish(result);
  
  } catch(err){
      return err;
  }  
  }



// see update numbers in the client side | console.log on the Inspect on website

async function getVotesCat(result){
// console.log(result.message);
catCount = result.message;

// showVotes = true; 
showAllVotes(); 

document.getElementById("voted__p").innerHTML = "You Voted for";
document.getElementById("voted").innerHTML = "Cats!";

}

// see update numbers in the client side | console.log on the Inspect on website

async function getVotesDog(result){
// console.log(result.message);
dogCount = result.message;

// showVotes = true; 
showAllVotes();
document.getElementById("voted__p").innerHTML = "You Voted for";
document.getElementById("voted").innerHTML = "Dogs!";

}

// see update numbers in the client side | console.log on the Inspect on website

async function getVotesBird(result){
  // console.log(result.message);
  birdCount = result.message;
  
  // showVotes = true; 
  showAllVotes(); 
  document.getElementById("voted__p").innerHTML = "You Voted for";
  document.getElementById("voted").innerHTML = "Birds!";

  
  }


  // see update numbers in the client side | console.log on the Inspect on website

async function getVotesFish(result){
  // console.log(result.message);
  fishCount = result.message;
  
  showAllVotes(); 
  document.getElementById("voted__p").innerHTML = "You Voted for";
  document.getElementById("voted").innerHTML = "Fishes!";

  
  }

//Buttons
document.getElementById("cat").addEventListener("click", function addVoteCat(){

// if(voteCat){
  mySpecialRequestCat(specialUrlCat)
// }
});

document.getElementById("dog").addEventListener("click", function addVoteDog(){

// if(voteDog){  
    mySpecialRequestDog(specialUrlDog)
// }
});

document.getElementById("bird").addEventListener("click", function addVoteBird(){

  // if(voteDog){  
      mySpecialRequestBird(specialUrlBird)
  // }
  });

  document.getElementById("fish").addEventListener("click", function addVoteFish(){

    // if(voteDog){  
        mySpecialRequestFish(specialUrlFish)

    // }
    });

//Show Numbers on screen
async function showAllVotes(){
// if(showVotes){
  document.getElementById("catNum").innerHTML = catCount;
  document.getElementById("dogNum").innerHTML = dogCount;
  document.getElementById("birdNum").innerHTML = birdCount;
  document.getElementById("fishNum").innerHTML = fishCount;


// }
}


loadGet();

})

// P5.JS \\

let mousePos;

let dist;

let widthSize;
let heightSize;

let minSize;
let maxSize;

let currentSize;


let position;

let whatAnimal="";


let currentSizeCat;
let currentSizeDog;
let currentSizeBird;
let currentSizeFish;


let showData = false;

let total;
let catTotal;
let dogTotal;
let birdTotal;
let fishTotal;

let percentageValue;
let percentageCat;
let percentageDog;
let percentageBird;
let percentageFish;



function setup() {
  
  let node = document.getElementById('show__graph');  
  window.document.getElementsByTagName('section')[2].appendChild(node);
  new p5(sketch, node);  
   
  }

let sketch = function(p) {
  p.setup = function(){
    widthSize = windowWidth/2.5;
    heightSize = windowHeight/1.5;
    p.createCanvas(widthSize,heightSize);
    p.mousePos = createVector(0, 0,); 
    
    p.textAlign(CENTER, CENTER);
    p.noStroke();   
  }

  p.draw = function() {
    if (!gotData) {
        return;
    }
    p.background(235);
    p.mousePos = createVector(p.mouseX, p.mouseY);

    //PERCENTEGE
    catTotal = catCount;
    dogTotal= dogCount;
    birdTotal = birdCount;
    fishTotal = fishCount;

    total = catTotal + dogTotal + birdTotal + fishTotal;

    //CAT
    p.position = createVector(widthSize * 0.20, heightSize/2);
    p.mousePos = createVector(p.mouseX, p.mouseY);
    p.currentSizeCat =  Math.floor((catTotal*4) / total * 100);
    p.percentageCat =  Math.floor((catTotal) / total * 100);
    whatAnimal = "CATS";

    animalShow(p.position, p.mousePos, catCount, p.currentSizeCat, p.percentageCat, whatAnimal);

    //DOG
    p.position = createVector(widthSize * 0.40, heightSize/2);
    p.mousePos = createVector(p.mouseX, p.mouseY);
    p.currentSizeDog = Math.floor((dogTotal*4) / total * 100);
    p.percentageDog =  Math.floor((dogTotal) / total * 100);

    
    whatAnimal = "DOGS";

    animalShow(p.position, p.mousePos, dogCount, p.currentSizeDog, p.percentageDog, whatAnimal );

      //BIRD
      p.position = createVector(widthSize * 0.60, heightSize/2);
      p.mousePos = createVector(p.mouseX, p.mouseY);
      p.currentSizeBird =  Math.floor((birdTotal*4) / total * 100);
      p.percentageBird =  Math.floor((birdTotal) / total * 100);

      whatAnimal = "BIRDS";
  
      animalShow(p.position, p.mousePos, birdCount, p.currentSizeBird, p.percentageBird, whatAnimal);
  
      //FISH
      p.position = createVector(widthSize* 0.80, heightSize/2);
      p.mousePos = createVector(p.mouseX, p.mouseY);
      p.currentSizeFish = Math.floor((fishTotal*4) / total * 100);
      p.percentageFish =  Math.floor((fishTotal) / total * 100);

      whatAnimal = "FISHES";
  
      animalShow(p.position, p.mousePos, fishCount, p.currentSizeFish, p.percentageFish,  whatAnimal );
  
    }


  function animalShow(position, mousePos, animalCount, currentSize, percentageValue, whatAnimal){

    minSize = currentSize;
    maxSize = currentSize * 2;
  
    p.dist = p5.Vector.dist(position, mousePos);

    if(p.dist < minSize/2){  

        p.fill(54, 7, 100);
        p.ellipse(position.x, position.y, (currentSize * 1.5) + 20 , (currentSize * 1.5 ) + 20);

        p.fill(85, 14, 156);
        p.ellipse(position.x, position.y, currentSize* 1.5, currentSize* 1.5);
        showData = true;

      }
      else{
        p.fill(54, 7, 100);
        p.ellipse(position.x, position.y, currentSize, currentSize);
        showData = false;
      }

    p.fill(255);
    p.textSize(15);
    p.strokeWeight(3);

    p.text(whatAnimal, position.x, position.y);

    if(showData){
    p.textSize(25);
    p.strokeWeight(5);
    p.text(percentageValue.toString() + " %", position.x, position.y - (currentSize/2));

    p.textSize(10);
    p.strokeWeight(.3);
    p.text(animalCount.toString() + " votes", position.x, position.y + 20);

    
    }
    p.fill(20);
    p.textSize(50);
    p.strokeWeight(10);
    p.text(total.toString(), widthSize/2,heightSize/6);

    p.textSize(12);
    p.strokeWeight(.3);
    p.text("Total Votes", widthSize/2,heightSize/6 + 30);
  }

};









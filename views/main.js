
    
window.addEventListener('DOMContentLoaded', async () => {

        
// let showVotes = true;
// let voteCat = true; 
let catCount = 0;
// let voteDog = true; 

let dogCount = 0;
let birdCount = 0;
let fishCount = 0;

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

}

// see update numbers in the client side | console.log on the Inspect on website

async function getVotesDog(result){
// console.log(result.message);
dogCount = result.message;

// showVotes = true; 
showAllVotes(); 

}

// see update numbers in the client side | console.log on the Inspect on website

async function getVotesBird(result){
  // console.log(result.message);
  birdCount = result.message;
  
  // showVotes = true; 
  showAllVotes(); 
  
  }


  // see update numbers in the client side | console.log on the Inspect on website

async function getVotesFish(result){
  // console.log(result.message);
  fishCount = result.message;
  
  // showVotes = true; 
  showAllVotes(); 
  
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








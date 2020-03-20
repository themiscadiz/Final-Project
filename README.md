
<!-- Every README should start with an H1 -->
# Final Project - Voting Website for your Favorite Animal
<!-- A one sentence description of the project or assignment -->
This is a project is a Website were the user can vote between four options for their favorite animal. 

<img src="https://github.com/themiscadiz/Images_for_Final_Project_Documentation/blob/master/Images/11.png" width="600">

<!-- It is good practice to add an about or summary -->
## About
The website start with a selection of four animals to choose. after you click in your favorite animal the user would be able to confirm that they already vote for a specidfic animal. Also in the websitie you can see how many votes each animal has in total an compare their percentage of cast votes to the other animals.

<!-- It is essential to describe how to set up your project -->
## Setup
<!-- Any knowledge or tools you will need before hand -->
### Prerequisites

The following prerequisites are necessary:

A text editor - like VS Code
Terminal or Command line.
Install node.js
Postman - to manage your database
Glitch - to deploy your website

* To setup the project you need access to a computer and the internet. 
* To be able to see the website you can go to [Glitch Website](link)
* To use your terminal or command line to locally host your website (in case of Mac)
* Download P5.js librarioes to run locally your p5 code. 



<!-- any installation needs should be defined -->
### Installation

To acces or view the website their is not need to install or subscribe to a platform.
To be able to see the website you can go to [Glitch Website](link)

<!-- Write instructions on how to start working on your project -->
### Develop
**If you want to host this website locally:**

1. Open and used Node.js through your Terminal.
2. Initialize node.js
3. Install express, path, nodemon, nedb libraries using <code> npm install </code>
4. Use <code> .gitignore </code> for the folder that you dont want to make it public on Github if you plan to make a repository.
5. Download P5.js libraries to run locally your p5 code. 

Create an Glitch Account to Deploy the website.
Create a Postman account to manage the database

## Built with
* [Nodejs](https://nodejs.org/en/)
* [VS Code](https://code.visualstudio.com/)
* [Github](https://github.com)
* [Glitch](https://glitch.com/)
* [Postman](https://www.postman.com/downloads/)

## Authors
* [Themis Garcia](https://github.com/themiscadiz) -- NYU ITP student

***
***
***

<!-- For your assignments you might consider  -->
# Notes & Process

### Sketching
For this assignment I sketch a simple website were I can interact with some of the content of the Current Weather api. Although this API provides little information I decided to use this one, undestanding that accesing the API it was going to be a challenge. 
For this sketch I designed an interface where the user can click a button to change the value from the Celsius to Fahrenheit. The information is displayed in the same area. The user is also able to see sother data such as Precipitation, Date, day or night, and how are the conditions of the day (cloudy, sunny, etc.). 

![img](https://github.com/themiscadiz/API_Assignment/blob/master/Images%20for%20Doc%20week%203/2.png)
![img](https://github.com/themiscadiz/API_Assignment/blob/master/Images%20for%20Doc%20week%203/1.png)


### Accesing and API
Using the developer site of accuweather was very accesible. 
The most challenging part was to be able to see the data from console in my localhost. I used the async function to access the results. However, I spent a lot of time trying to figure it out how to acces each part of the result, because it wasn't clear to me that I was getting an array. After that, I was able to access each part of the array.

### async function and fetch()
I'm still not completly sure how tu use this function and in what conditions makes sense to use it. However, to access the API data, I created another async function to be able to manipulate it. I think that to be able to manipulate data from the API this has to happen in a async function. I started this exercise with the example code shown on class.

### getElement
I used document.getElementById("localDate").innerHTML when I want to use the data in the html file.

### API data to dynamically change the DOM - Interactive Button
Creating the buttons was the other challenging part of this project. I wasn't sure how to make a button change a value from the file.js. 

![img](https://github.com/themiscadiz/API_Assignment/blob/master/Images%20for%20Doc%20week%203/2.gif)

I managed this was using:

In file.js
<code>document.getElementById("myBtn").addEventListener("click", function changeTemp(){...}</code>
the .addEventListener help me to open a communication with the html elemnts.

In index.html
<code><button><input type="button" id="myBtn" value="Celsius"></button></code>
Using "value" in the html I was able to manipulate the results as a booloean statement.

![img](https://github.com/themiscadiz/API_Assignment/blob/master/Images%20for%20Doc%20week%203/8.jpg)


### new Date();
To get the local date a used a built-in function from js that gives you yout current time. I decided to use this function instead the time from the API because this one is updated each time that the user refresh the website. Instead the one in the API update as frequent as the API data update. Wich means that sometimes minutes pass and the time hasn't changed.

### html and css
The website has an responsive design where the information of precipitation, time and day, changes from a row into a column. Because I have more dynamic things to go around in the code, I had more difficulties creating and styling the website. However at the end I decided with a simple design approach to be able focus on the functionality. 

<!-- How you built this project - Include images, gifs, and notes here ## Process & Documentation -->

<!-- Any specific challenges or struggles documented -->
## Challenges & Struggles
This project was very challenging being the first time that I attempted to use an API. The most challenging processes were: 
1. Creating an interactive button
2. Accesing the API data
3. Understanding how to use: .addEventListener | getElementById | async function | fetch

<!-- Any questions you have -->
## Questions
1. I am not sure if I had the best approach to create a dynamic button.
2. How to add the degree symbol (°)? adding this to the information returned by the API.

<!-- References for resources and inspiration -->
## References
[newDate()](https://www.w3schools.com/js/js_dates.asp)
[newDate() - Time](http://www.java2s.com/Code/JavaScript/Development/Getthecurrenttimeandthenextractthehoursminutesandseconds.htm)

# Click image below for watch Video
[![Video_Documentation](https://github.com/themiscadiz/Images_for_Final_Project_Documentation/blob/master/Images/11.png?raw=true)](https://youtu.be/QHd9iiGpXCw "DWD Project")

# Final-Project
### References
http://expressjs.com/en/starter/static-files.html
https://stackoverflow.com/questions/53308128/problem-serving-static-files-with-express
https://stackoverflow.com/questions/37931357/css-file-is-not-working-in-node-js

problems reading static files in node.js. accesing "public forlder"

express api tutorial - Joey Lee https://github.com/joeyklee/simple-express-api

https://www.w3schools.com/html/html_filepaths.asp


Instance Container P5.js https://p5js.org/examples/instance-mode-instance-container.html 
 

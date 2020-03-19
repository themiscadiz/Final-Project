const express = require('express')
const app = express()
const port = 3030
const path = require('path');
const fs = require('fs');
const indexLocation = path.join(__dirname + "/views/");

const Datastore = require('nedb');
const pathToData = path.resolve(__dirname, "db/db")
const db = new Datastore({ filename: pathToData});
db.loadDatabase();


// Send files from the public directory
app.use(express.static( path.resolve(__dirname, 'views') ));

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({extended:true})); // to support URL-encoded bodies


// app.get("/", (request, response) => {
//     response.sendFile("index.html");
// });


app.get('/', function(req, res) {
    res.sendFile(indexLocation)
});

let cat = 0;
let dog = 0;
let bird = 0;
let fish = 0;


// GET - /api get everything
app.get("/api", (request, response) => {    
    // db references our nedb instance
    // we use "find" and an empty search {} to give us back all the data in the db
    db.find({}, function (err, docs) {
        if(err){
            return err;
        } 
        // like before we send the json response
        response.json(docs);
    });
});

//To add a new element to db
app.post("/api", (request, response) => {
    // our unix timestamp
    const unixTimeCreated = new Date().getTime();
    // add our unix time as a "created" property and add it to our request.body
    const newData = Object.assign({"created": unixTimeCreated}, request.body)

    // add in our data object to our database using .insert()
    db.insert(newData, (err, docs) =>{
        if(err){
            return err;
        }
        response.json(docs);
    });
})



// PUT - /api
app.put("/api/:id", (request, response)=> {

    // we get the id of the item we want from request.params.id ==> this matches the :id of the URL parameter
    const selectedItemId = request.params.id;

    const updatedDataProperties = request.body
    
    
    //If the selected id is a CAT, then update in the database
    if(selectedItemId == "tP9eCA3nl6VeJBu9"){


        cat=request.body.votes;

        // Set an existing field's value
        db.update({ _id: selectedItemId  }, { $set: updatedDataProperties }, (err, numReplaced) => {
            if(err){
                response.status(404).send("not working");
            }
        });
        response.json(
        {message: cat}
        )

    }
    //If the selected id is a DOG, then update in the database
    else if(selectedItemId == "b4mkpyQp3c2zhcXd"){

        // console.log(selectedItemId);
        // console.log("it's a dog");

        dog=request.body.votes;

        // Set an existing field's value
        db.update({ _id: selectedItemId  }, { $set: updatedDataProperties }, (err, numReplaced) => {
            if(err){
                response.status(404).send("not working");
            }
           
        });
        response.json(
        {message: dog}
        )
    }

//If the selected id is a BIRD, then update in the database
else if(selectedItemId == "aWq4oGUP71nivULK"){

    // console.log(selectedItemId);

    bird=request.body.votes;

    // Set an existing field's value
    db.update({ _id: selectedItemId  }, { $set: updatedDataProperties }, (err, numReplaced) => {
        if(err){
            response.status(404).send("not working");
        }
       
    });
    response.json(
    {message: bird}
    )
}


//If the selected id is a FISH, then update in the database
else if(selectedItemId == "PMgfiYc84P0FZwDb"){

    // console.log(selectedItemId);

    fish=request.body.votes;

    // Set an existing field's value
    db.update({ _id: selectedItemId  }, { $set: updatedDataProperties }, (err, numReplaced) => {
        if(err){
            response.status(404).send("not working");
        }
       
    });
    response.json(
    {message: fish}
    )
}




}
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

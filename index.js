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

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({extended:true})); // to support URL-encoded bodies

// Animales.com
app.get('/', function(req, res) {
    res.sendFile(indexLocation)
});

let cat = 0;
let dog = 0;


// database 
async function getVotes(){
    // const contents = fs.readFileSync(path.join(__dirname, "./db/votes.json"));
    // const obj = JSON.parse(contents);
    // return obj.votes;

    db.find({},  function (err, docs) {
        if(err){
            return err;
        } 

        console.log(docs);

        // let x = docs[0].votes;

        // like before we send the json response
        return  docs.votes;
    });


    db.find({},  function (err, docs) {
        if(err){
            return err;
        } 

        // console.log(docs[0].votes);

        // let x = docs[0].votes;

        // like before we send the json response
        console.log(docs);
        return  docs;
    });



}
    

    // const contents = {"votes":cat}

    // fs.writeFile(path.join(__dirname, "./db/votes.json"), JSON.stringify(contents), (err) => {
    //     if(err){
    //       return console.error(err)
    //     } 
    //     //resolve(content);
    // });

    // // const obj = JSON.parse(contents);
    // // return obj.votes;

    // console.log(cat);

// }


// var routerCat = express.Router();
// app.get('/api/cat', (req, res) => {

//     //console.log(getVotes());  
//     updateVotes();  

//     //cat = getVotes();
//     // Send cat value to the frontend
//     res.json(
//         {message: cat}
//     )
// })


// GET - /api
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






// // GET - /api
// app.get("/api", (request, response) => {    
//     // db references our nedb instance
//     // we use "find" and an empty search {} to give us back all the data in the db
//     db.find({}, function (err, docs) {
//         if(err){
//             return err;
//         } 
//         // like before we send the json response
//         response.json(docs);
//     });
// });


// app.post("/api", (request, response) => {
//     // our unix timestamp
//     const unixTimeCreated = new Date().getTime();
//     // add our unix time as a "created" property and add it to our request.body
//     const newData = Object.assign({"created": unixTimeCreated}, request.body)

//     // add in our data object to our database using .insert()
//     db.insert(newData, (err, docs) =>{
//         if(err){
//             return err;
//         }
//         response.json(docs);
//     });
// })



// PUT - /api
app.put("/api/:id", (request, response)=> {

    // we get the id of the item we want from request.params.id ==> this matches the :id of the URL parameter
    const selectedItemId = request.params.id;

    const updatedDataProperties = request.body

    if(selectedItemId == "tP9eCA3nl6VeJBu9"){

        console.log(selectedItemId);
        console.log("it's a cat");

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
    else if(selectedItemId == "b4mkpyQp3c2zhcXd"){
        console.log(selectedItemId);
        console.log("it's a dog");
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
}
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const express = require('express');
const path = require('path');

const app = express();
app.use(express.static( path.resolve(__dirname, 'views') ));

app.get("/", (request, response) => {
    response.send("hello");
});

app.listen(3030, () => {
    console.log("check out the magic at: http://localhost:3030")
})
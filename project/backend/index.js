const express = require("express");
const app = express();
const cors = require("cors");
const path = require('path');


app.use(cors());
app.use(express.json());
app.use(express.static('../frontend/website648'))


//routs
app.get('/', function(req, res){

        res.sendFile('/Users/agunderson/Desktop/csc648/project/frontend/website648/Home.html');
});

app.get('/backendlead', function(req,res){
    res.sendFile()
});



app.listen(5000, () => {
    console.log("server has started on port")
});


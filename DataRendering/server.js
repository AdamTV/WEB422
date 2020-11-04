var $ = require('jquery');
var _ = require('lodash');

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).red("index");
});

 app.listen(8080,()=>{
        console.log(`server listening on: 8080`);
    });
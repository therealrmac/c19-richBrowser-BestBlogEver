"use strict";

//let blog= require("./blog");
let $= require("jquery");

function getBlog(event){
    return new Promise(function(resolve,reject){
        $.ajax({
            url: "blog.json"
        }).done(function(data){
            console.log("blog data from json is", data);
            resolve(data);
        });
    });
}












module.exports= {getBlog};



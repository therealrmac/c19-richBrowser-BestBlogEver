"use strict";

let entrys= require("../templates/makeBlog.hbs");
let $= require("jquery");

function populateDom(data){
    console.log("blog data", data);
    $("#output").html(entrys(data));
}


module.exports= {populateDom};

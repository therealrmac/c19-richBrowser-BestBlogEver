"use strict";
console.log("Main has loaded");

let jl= require("./loader");
let template= require("./domBuilder");
let Handlebars= require("hbsfy/runtime");

Handlebars.registerHelper('grouped_each', function(every, context, options) {
    var out = "", subcontext = [], i;
    if (context && context.length > 0) {
        for (i = 0; i < context.length; i++) {
            if (i > 0 && i % every === 0) {
                out += options.fn(subcontext);
                subcontext = [];
            }
            subcontext.push(context[i]);
        }
        out += options.fn(subcontext);
    }
    return out;
});

Handlebars.registerHelper({eq: function (v1, v2) {
    return v1 === v2;
}});

function loadBlog(event){
    jl.getBlog()
    .then(function(data){
        var allBlog= Object.keys(data);
        console.log("the data is", data);
        allBlog.forEach((key)=>{
            data[key].id= key;
        });
       // console.log("all blogs is", allBlog);
        template.populateDom(data);
    });
}

loadBlog();

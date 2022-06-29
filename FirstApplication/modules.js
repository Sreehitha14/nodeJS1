// var fs = require('fs')

// fs.readFile("./text.txt", "utf8", function(err, data){
//     if(err){
//         console.log("error in reading file");
//     }
//     else{
//         console.log(data.toUpperCase());
//     }
// })
// //for readfile, the callback func needs 2 parameters
// //utf8 is to print text in form of text if we omit it, we will get o/p in form of no.s
// windows + G - screen recording
// Object is nth but consisting of properties and values

// var os = require('os')

// console.log(os.hostname())
// console.log(os.tmpdir())
// console.log(os.release())
// console.log(os.platform())
// console.log(os.type())

// var cowsay = require('cowsay')
// console.log(cowsay.say({text : "Text By Cow", e : "**", T : "^^"}))

//var chalk = require("chalk")

//console.log(chalk.blue("Hi") + "Svecw" + chalk.red("Bye"))
// var chalk = require("chalk");

// console.log(chalk.bgBlue("Hello"));

// var calc = require('./calc')
// console.log(calc.add(25, 12))
// console.log(calc.sub(55, 10))
// console.log(calc.mul(2, 10))

// calc.div(12, 0, (err, result) =>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(result);
//     }
// })

// JSON.stringify() - java script obj to JSON string
// JSON.parse() - JSON to js
var book = {title : "Core Java", author : "Herbert Sheild", Price : 500}
var jsonbook = JSON.stringify(book)
console.log(jsonbook)
var bookobj = JSON.parse(jsonbook)
console.log(bookobj)
for(ele in bookobj){
    console.log(ele + ":" + bookobj[ele])
}
// create a file with json data and then convert it into js obj and then print using for - in
// verifylogin("User1", "pwd1", function(err,result){     //in recent version we can vomit function keyword and wrie it as verifylogin("user1","pwd1",(err,result)=>{func-body})
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(result);
//     }
// });
// //function within function is callback function. verifylogin is nt callback func but inner func is callback, func body will be stored in callback
// //ctrl + / is used to cmnt all lines
// function verifylogin(user, pwd, callback){
//     if(pwd == "pwd1"){
//         callback(null, "correct login");
//     }
//     else{
//         callback("incorrect login", null);
//     }
// }


console.log("Prgrm is strtng")

setTimeout(() => {
    console.log("inside timeout")
}, 2000);
console.log("aftr timeout")
console.log("Prgrm end")
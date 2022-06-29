// // Include request Module
// var nd = require("needle");


// exports.getWeatherInfo=function(location,callbackfunc){
//     var url = "http://api.weatherstack.com/current?access_key=d8748264842036317a04438e5f27bc7c&query=" + location;

//         nd.get(url,(err, response, body)=>{
//                 if(err){
//                     callbackfunc(err, null);
//                 }
//                 else{
//                     var jsonobj = {longitude : body.location.lon, latitude : body.location.lat}
//                     callbackfunc(null, JSON.parse(jsonobj))
//                 }
//             })

// /* Call request function by sending url
//  		Implement following steps in the callback request function:
//  			Step 1: if error occurred, then call callbackfunc by sending arguments error and null.
//  			Step 2 : otherwise call callbackfunc with null and response.body.current.temperature.
// */


//  }
// //After request function, Store getWeatherInfo function into module.exports.getWeatherInfo

var nd = require('needle')

exports.getWeatherInfo=function(location,callbackfunc){
var url = "http://api.weatherstack.com/current?access_key=a1bb9408aa5314f3e8c6381a99ee8d52&query="+location
nd.get(url,(err,response,body)=>{
    if(err)
        callbackfunc(err,null)
    else
        callbackfunc(null,body.current.temperature)
})
}

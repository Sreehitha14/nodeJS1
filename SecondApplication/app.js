const { getPackedSettings } = require("http2");
var nd = require("needle");

// var url = "https://jsonplaceholder.typicode.com/todos/1"

// nd.get(url,(err, response, body)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(body);
//     }
// })

// var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=a7794fc5707c11eea6ce59c73b63bb68&language=en-US&page=1moviedb.org/3/movie/{movie_id}?api_key=a7794fc5707c11eea6ce59c73b63bb68&language=en-US";

// nd.get(url,(err, response, body)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(body);
//     }
// })

// nd.get(url,(err, response, body)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         var results = body.results
//         for(ele in results)
//             console.log(results[ele].title);
//     }
// })

// var url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3JlZWhpdGhhMTQiLCJhIjoiY2wzbzB6YzIzMGk1ejNkbzlmaWR4ZTEzMSJ9.2RW2Ubk2fEGURE8JkkIkCw"

// nd.get(url,(err, response, body)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(body);
//     }
// })

//var url = "https://api.mapbox.com/geocoding/v5/mapbox.places/San%20Francisco.json?access_token=pk.eyJ1Ijoic3JlZWhpdGhhMTQiLCJhIjoiY2wzbzB6YzIzMGk1ejNkbzlmaWR4ZTEzMSJ9.2RW2Ubk2fEGURE8JkkIkCw"

// nd.get(url,(err, response, body)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(body);
//     }
// })

// nd.get(url,(err, response, body)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(JSON.parse(body)); //since it is in form of string, we need to convert it to JSON obj
//     }
// })

// var url = "http://api.weatherstack.com/current?access_key=d8748264842036317a04438e5f27bc7c&query=%22New%20York%22"


// // nd.get(url,(err, response, body)=>{
// //     if(err){
// //         console.log(err);
// //     }
// //     else{
// //         console.log(body);
// //     }
// // })

// nd.get(url,(err, response, body)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(body.current.temperature);
//         console.log(body.location.lat);
//         console.log(body.location.lon)
//         var desc = body.current.weather_description;
//         for(var ele in desc)
//             console.log(desc[ele])
//     }
// })


for(var i = 1 ; i <= 10 ; i++){
    var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=a7794fc5707c11eea6ce59c73b63bb68&language=en-US&page=1moviedb.org/3/movie/{movie_id}?api_key=a7794fc5707c11eea6ce59c73b63bb68&language=en-US&page=1";
    nd.get(url,(err, response, body)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(body.results.original_language);
    }
})
}

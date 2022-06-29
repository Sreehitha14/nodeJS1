var express = require('express');
var router = express.Router();
var path = require('path');
var mysql=require('../database/db');

/* GET home page. */
//Get is used with url's
router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Express' });
 res.send("<h2>Hello! This is Express developed by Sreehitha</h2>");
 //res.sendFile(path.resolve("public/tables.html"))
});
router.get('/tt', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  //res.send("<h2>Hello! This is Express developed by Sreehitha</h2>");
  res.sendFile(path.resolve("public/tables.html"))
 });
 router.get('/links', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  //res.send("<h2>Hello! This is Express developed by Sreehitha</h2>");
  res.sendFile(path.resolve("public/Hyperlinks.html"))
 });
 router.get('/Reg', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  //res.send("<h2>Hello! This is Express developed by Sreehitha</h2>");
  res.sendFile(path.resolve("public/Registration form.html"))
 });
 router.get('/login', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  //res.send("<h2>Hello! This is Express developed by Sreehitha</h2>");
  res.sendFile(path.resolve("public/login form.html"))
 });
 router.post('/loginsubmit', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  //res.send("<h2>Hello! This is Express developed by Sreehitha</h2>");
  //res.sendFile(path.resolve("public/login form.html"))
  var output = "username:" + req.body.name + "<br>password:" + req.body.password;
  res.send(output)
 });
//  router.post('/formsubmit', function(req, res, next) {
//   // res.render('index', { title: 'Express' });
//   //res.send("<h2>Hello! This is Express developed by Sreehitha</h2>");
//   //res.sendFile(path.resolve("public/login form.html"))


//   var output = "Firstname:" + req.body.firstname + "<br>Middlename:" + req.body.middlename + "<br>Lastname:" + req.body.lastname + "<br>Phone:" + req.body.phone + "<br>Address:" + req.body.addr + "<br>Email:" + req.body.email ;
//   res.send(output)
//  });

router.post('/submitform', function(req, res, next) {
 var username=req.body.username
 var gender=req.body.optradio
 var mail = req.body.email
 var mob = req.body.mobile
 var output="<table border=1><tr><td>Username<td>"+username+"<tr><td>Gender<td>"+gender + "<tr><td>email<td>"+mail + "<tr><td>Mobile<td>"+mob;
  res.send(output)
 });

router.get('/demo', function(req, res, next) {
  res.render('index', { title:'Embedded java code complete' });
});
router.get('/fbposts', function(req, res, next) {
  var post = [
    {title : "HBD", message : "Happy Birthday To You"},
    {title : "casual", message : "Hi How are You"},
    {title : "announcement", message : "Tommorrow is a holiday"},
  ];
  res.render('index', { title:'Facebook posts', posts:post });
});

// router.get('/selectqry', function(req, res, next) {

// mysql.getConnection((err, connection) => {
//    if(err) throw err;
// connection.query("SELECT * FROM student1 limit 2", (err, rows) => {
//   connection.release(); 
//   if(err) throw err;
//   //res.render('index', {rows:rows});
//   res.send(rows);
//    });
//   });
// });

router.get('/selectqry', function(req, res, next) {

  mysql.getConnection((err, connection) => {
     if(err) throw err;
  connection.query("SELECT * FROM student1 limit 2", (err, rows) => {
    connection.release(); 
    if(err) throw err;
    res.render('datadisplay', {rows:rows});
    //res.send(rows);
     });
    });
  });

module.exports = router;

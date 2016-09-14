var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser= require( 'body-parser' );
var pg = require('pg');
var connectionString = 'postgress://localhost:5432/koalas';
var urlencodedParser = bodyParser.urlencoded( {extended: false } );
var port = process.env.PORT || 8080;
// static folder
app.use( express.static( 'public' ) );

// spin up server
app.listen( port, function(){
  console.log( 'server up on', port );
});

// base url
app.get( '/', function( req, res ){
  console.log( 'base url hit' );
  res.sendFile( 'index.html' );
});

// get koalas
app.get( '/getKoalas', function( req, res ){
  console.log( 'getKoalas route hit' );
  //assemble object to send
  pg.connect(connectionString, function(err, client, done){

  if(err){
  console.log(err);
}
else {
  console.log('connected to db');
}

  var resultsArray = [];
  var queryResults = client.query('Select * FROM koalaInfo');
  queryResults.on('row', function(row){
    resultsArray.push(row);
    console.log(resultsArray);
  });
    queryResults.on('end', function(){
      done();
  });
  var objectToSend={
    response: 'from getKoalas route'
  }; //end objectToSend
  //send info back to client
  res.send( objectToSend );
});
});
// add koala
app.post( '/addKoala', urlencodedParser, function( req, res ){
  console.log( 'addKoala route hit' );
  //assemble object to send
  var objectToSend={
    name: req.body.name,
    sex:  req.body.sex,
    age:  req.body.age,
    transfer: req.body.transfer,
    notes: req.body.notes
  }; //end objectToSend
  //send info back to client
  res.send( objectToSend );
});

// add koala
app.post( '/editKoala', urlencodedParser, function( req, res ){
  console.log( 'editKoala route hit' );
  //assemble object to send
  var objectToSend={
    response: 'from editKoala route'
  }; //end objectToSend
  //send info back to client
  res.send( objectToSend );
});

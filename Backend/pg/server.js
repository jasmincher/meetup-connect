const bodyParser = require('body-parser') // turns response into usable format
const cors = require('cors')  // allows/disallows cross-site communication
//const morgan = require('morgan') // logs requests
const pg = require('pg');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

//Setting up the views, Configure application
app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({       //avtivate get for body-parser
//   extended: true
// }));
app.use(express.static('public'));

app.get('/', (request, response) => {
  console.log('it worked');
  response.json({ info: 'Node.js, Express, and Postgres WomenTech' }) //Look for a get req in the root.
});




//Connect to Postgress database
let options = {
  user: 'postgres',
  host: 'localhost',
  database: 'Tech',
  password: 'geidy',
  port:5433
}

//Using pools
var db = new pg.Pool(options);
//Conection using created pool
db.connect() 
.then( res => console.log('connected to database'))
.catch( err => console.log(err));

 
//for(var i = 0; i < resizeBy.rowCount; i++){
//console.log(res.rows[i].FirstName + " " + res.rows[i].LastName + " " + res.rows[i].interest)}

// 192.168.43.75
// frontend: axios.get(;='localhost:4000/getUserInfo--/)
//Get information from a form an update database
//The frontend is getting info from my database
app.get('/UserInfo', function(req, response) {
  console.log('getting a request');
  //database calls queries
  db.query("Select * from \"WomenTech\"")
  .then (res => {
    console.log('Got the data from database');
    response.send(res.rows);
  })
  .catch( err => {
    console.log(err);
    response.send([]);
  });
});

  //Post method to get info out of database to interact with React
  //Take the form info into my db
  app.post('/UserInfo', function(req, response){
    // the user data
    console.log(req.body);
    
    let queryStr = "Insert INTO \"WomenTech\" (\"FirstName\", \"LastName\", \"Email\", \"Location\", \"Interest\")";
    queryStr += "VALUES ($1, $2, $3, $4, $5)";
    let {firstName, lastName, email, city, interest} = req.body;

    db.query(queryStr, [firstName, lastName, email, city, interest],
    function (err, res, fields){
      if(err) {
        response.send('we crashed!');
        throw err
      };

      // console.log(res.rows)
      // var dataInfo = [];
      // for(i=0;i<rows.length;i++){
      //   dataInfo.push(res.rows[i].FirstName + " " + res.rows[i].LastName + " "
      //   + res.rows[i].Email + res.rows[i].Location + " " + res.rows[i].Interest);
      // }
      //response to the request
      response.send(res.rows);
      //res.end(JSON.stringify(dataInfo));
  });  
});
    


//Get method to access database and return results for users with same interest(in Json)
app.get('/search/:interest', function(req, response){
  console.log('getting a request');
  db.query("Select * from \"WomenTech\" WHERE \"Interest\" LIKE '%"+ req.params.interest +"%'",
    function(err, res, fields){
      if(err) throw err;
      // console.log(res.rows);
      //  var data = [];
      //  for(i=0;i<res.rows.length;i++){
      //    data.push(res.rows[i].FirstName + " " + res.rows[i].LastName + " " + res.rows[i].Interest);
      //  }
      response.send(res.rows);
      // res.end(JSON.stringify(data));
    });
  });

  //Post method to access database and get results for equal interest
  app.post('/search', function(req, response){ //POST method to access DB and return results in JSON
    db.query("Select * from \" WomenTech\" WHERE\" Interest\" LIKE ' '%" + req.params.Interest + "%'",
    function(err, rows, fields){
      if(err) throw err;
      var data = [];
      for(i=0;i<rows.length;i++){
        data.push(rows[i].FirstName + " " + rows[i].LastName + " " + rows[i].Email);
      }
      response.send(JSON.stringify(data));
      console.log(req.params.Interest);
    });
  });
 

//declaring the app listening port for output
  app.listen(4000, function() {
  console.log('listening on port 4000');
})


//pool shutdown

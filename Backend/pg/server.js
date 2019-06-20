const bodyParser = require('body-parser') // turns response into usable format
//const cors = require('cors')  // allows/disallows cross-site communication
//const morgan = require('morgan') // logs requests
const pg = require('pg');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

//Setting up the views, Configure application
app.use(bodyParser.urlencoded({       //avtivate get for body-parser
  extended: true
}));
app.use(express.static('public'));
app.get('/', (request, response) => {
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

//   query = "SELECT * From WomenTech WHERE interest = 'React'";
//   //console.log(err);
//   client.query(query)
//    .then(res => { 
//     for(var i = 0; i < resizeBy.rowCount; i++){
//       console.log(res.rows[i].FirstName + " " + res.rows[i].LastName + " " + res.rows[i].interest)}

//   } 
// )
//   .catch(e => console.error(e.stack));
// });
//Get information from a form an update database
app.get('/getNewInfo'), function(req, res){
  
}



//Get method to access database and return results for users with same interes(in Json)
app.get('/search/:interest', function(req, response){
  console.log('getting a request');
  db.query("Select * from \"WomenTech\" WHERE \"Interest\" LIKE '%React%'",
    function(err, res, fields){
      if(err) throw err;
      console.log(res.rows);
      // var data = [];
      // for(i=0;i<rows.length;i++){
      //   data.push(rows[i].FirstName + " " + rows[i].LastName + " " + rows[i].interest);
      // }
      response.send(res.rows);
      // res.end(JSON.stringify(data));
    });
  });

  //Post method to access database and get results for equal interest
  app.post('/search', function(req, res){ //POST method to access DB and return results in JSON
    db.query('SELECT * FROM WomenTech WHERE Interest LIKE "%' + req.params.interest + '%"',
    function(err, rows, fields){
      if(err) throw err;
      var data = [];
      for(i=0;i<rows.length;i++){
        data.push(rows[i].FirstName + " " + rows[i].LastName + " " + rows[i].Email);
      }
      res.end(JSON.stringify(data));
      console.log(req.params.input);
    });
  });
 



// frontend: axios.get(;='localhost:4000/getWome--/)
const getWomenInterest = {};
app.get('/getWomenInterest/:interest', function(request, response) {
  // database calls (queries)

//respond to the request
  response.send('hey')
});

app.listen(4000, function() {
  console.log('listening on port 4000');
})


//pool shutdown

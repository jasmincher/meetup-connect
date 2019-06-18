nodeconst bodyParser = require('body-parser') // turns response into usable format
const cors = require('cors')  // allows/disallows cross-site communication
const morgan = require('morgan') // logs requests

const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static('public'));

let options = {
  user: 'postgres',
  host: 'host',
  database: 'postgres',
  password: 'geidy',
  port:5433
}

// frontend: axios.get(;='localhost:4000/getWome--/)
app.get('/getWomenWithInterest/:something', function(request, response) {
  // database calls (queries)

//respond to the request
  response.send('hey')
});

var pool = new pg.Pool(options);
//Conection using created pool
pool.connect(function(err, client, done){
  query = "SELECT * From WomenTech WHERE interest = 'React'";
  //console.log(err);
  client.query(query)
   .then(res => { 
    for(var i = 0; i < resizeBy.rowCount; i++){
      console.log(res.rows[i].FirstName + " " + res.rows[i].LastName + " " + res.rows[i].interest)}

  } 
)
  .catch(e => console.error(e.stack));
})

//pool shutdown
pool.end()




app.use(bodyParser.json())
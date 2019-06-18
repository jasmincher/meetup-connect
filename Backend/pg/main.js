
const getData = (request, respond, db) => {
    db.select('*').from('WomenTech')
      .then(items => {
        if(items.length){
          res.json(items)
        } else {
res.json({dataExists: 'false'})
}
})
.catch(err => res.status(400).json({dbError: 'db error'}))
}

const postData = (request, respond, db) => {
const { id, FirstName, LastName, Email, Image, Location, Interest } = req.body
const added = new Date()
db('WomenTech').insert({id, FirstName, LastName, Email, Image, Location, added})
.returning('*')
.then(item => {
res.json(item)
})
.catch(err => respond.status(400).json({dbError: 'db error'}))
}

const putData = (request, respond, db) => {
const { id, FirstName, LastName, Email, Image, Location, Interest } = req.body
db('WomenTech').where({id}).update({FirstName, LastName, Email, Image, Location})
.returning('*')
.then(item => {
res.json(item)
})
.catch(err => res.status(400).json({dbError: 'db error'}))
}


function test(){
    console.log("Geidy");
}

test();




module.exports = {
    getData,
    postData,
    putData
}
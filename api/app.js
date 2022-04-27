require('dotenv').config()
const mongoose = require('mongoose');
// const {MongoClient} = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');
const postRoutes = require('./views/posts.route');

const PORT = process.env.PORT || 4000
const { MESSAGE, DATABASE_URL } = process.env

// declare application instance
const app = express();

// add middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/blog/', postRoutes);

app.get('/', (req, res) => {
    res.status = 200;
    res.send({
        message: "Welcome to my Blog API"
    })
})

// app.use('/blog/', postRoutes);
mongoose.connect(DATABASE_URL, ()=> {
  app.listen(PORT, (result)=> {
    console.log(`${MESSAGE} at: http://localhost:${PORT}`)
  })
}).catch(error=> console.error(error))


/*

MVC
M - Model (business data and logic)
V - View (Data access layer from the model)
C - Controller - (middle man between model and view)

*/

/* alternative */
/*
const client = new MongoClient(DATABASE_URL)
client.connect()
      .then((db)=> {
        console.log('***', db)
      })
      .catch(err => console.error(err))
      */
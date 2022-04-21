const express = require('express');
const bodyParser = require('body-parser');
const postRoutes = require('./views/posts.route');

const PORT = process.env.PORT || 4000

// declare application instance
const app = express();

// add middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/blog/', postRoutes);

app.get('/', (req, res) => {
    res.status = 200;
    res.send({
        message: "Welcome to my YouTube channel"
    })
})

// app.use('/blog/', postRoutes);

app.listen(PORT, ()=> {
  console.log(`Server running at: http://localhost:${PORT}`)
})

/*

MVC
M - Model (business data and logic)
V - View (Data access layer from the model)
C - Controller - (middle man between model and view)

*/

const express = require('express');

const PORT = process.env.PORT || 4000

// declare application instance
const app = express();

app.get('/', (req, res) => {
    res.status = 200;
    res.send({
        message: "Welcome to my YouTube channel"
    })
})

app.listen(PORT, ()=> {
  console.log(`Server running at: http://localhost:${PORT}`)
})
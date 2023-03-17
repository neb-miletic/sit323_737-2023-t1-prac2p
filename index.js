let exoress = require('express')

let app = exoress()

//respond with 'Hello world' when GET request is made to the homepage

app.get('/', function (req, res) {
    res.send('Hello world!')
})

// Listen to a particular port

app.listen(3000)
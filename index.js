//  Define the required packages
const 
express = require('express'),
app = express(),
logger = require('morgan'),
bodyParser = require('body-parser'),
axios = require('axios'),
httpClient = axios.create(),
PORT = 3000


//Middleware
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/public`))


app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
})


//Set the PORT 3000
app.listen(PORT, (err) => {
    console.log(err || `Server running on ${PORT}.`)
    })
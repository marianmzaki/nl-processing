// Configure the environment variables
const path = require('path')
const dotenv = require('dotenv')
const express = require('express');
//Create an instance for the server
const app = express();
const mockAPIResponse = require('./mockAPI.js');
const bodyParser = require('body-parser')
const axios = require('axios')
//const requestPost = require('./handleRequest')

// Configure cors to avoid cors-origin issue
const cors = require('cors');
app.use(cors())

const PORT = 8081

// Add Configuration to be able to use env variables
dotenv.config()
// Get the API_KEY from the .env file
const apiKey = process.env.API_Key
console.log(`Your API Key is ${process.env.API_KEY}`);
console.log(`Your API Key is ${apiKey}`);

// Configure express to use body-parser as middle-ware.
// Use json
app.use(bodyParser.json())  

// qUse url encoded values
app.use(bodyParser.urlencoded({
  extended: false
}))

// Configure express static directory.
app.use(express.static('dist'));
console.log(__dirname)

// API
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
let userInput = []

app.get('/', function(req, res){
    res.sendFile(path.resolve('dist/index.html'));
    
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});

app.post('/article', async (req, res) =>{
    userInput = req.body.url;
    console.log( req.body.url);
    console.log(`User Input URL: ${userInput}`);
    const apiURL = `${baseURL}key=${apiKey}&url=${userInput}&lang=en`
    console.log(apiURL)
    //const response = await fetch(apiURL)
    const response = await axios.post(apiURL)
    console.log("finish external axios post and print response")
    //console.log(response)
    //console.log(response.data)
    const mcData = await response.data
    console.log(mcData)
    res.send(mcData)
    // server sends only specified data to the client.
      const projectData = {
       score_tag : mcData.score_tag,
       agreement : mcData.agreement,
       subjectivity : mcData.subjectivity,
       confidence : mcData.confidence,
       irony : mcData.irony
      }
      res.send(projectData);
    
});

console.log(app.post);

app.listen(PORT, function() {
  console.log(`app listening on port ${PORT}!`)
});

module.exports = app;``
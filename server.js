 //Firstly, we need to import express to use it. It is core module.
const express = require('express');

// Instantiate express to a variable (generally, we name it ‘app’).
const app = express();

//specify the port number where your server is going to listen.
const port = 3000;

//Let’s return some message when the root route(/) is requested from the browser.
app.get('/', (req, res) => {
    res.send("Hello world");
});

//about page request
app.get('/about', (req, res) => {
    res.send("About Page");
});

// app.listen() method here takes in two parameters, the first one represents the port number and the
//other one is a callback function that returns a message to the console, upon successfully listening to the specified port
app.listen(3000, () => {
    console.log(`server is listening at port ${port}`);
});
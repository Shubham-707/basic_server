//Firstly, we need to import express to use it. It is core module.
const e = require('express');
const express = require('express');
//path module to serve files.
const path = require('path');
// Instantiate express to a variable (generally, we name it ‘app’).
const app = express();

//specify the port number where your server is going to listen.
const port = 3000;

//Let’s return some message when the root route(/) is requested from the browser.
app.get('/', (req, res) => {
    res.send("Hello world");
});

//Deliver HTML Files with Express
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/home.html'));
});

//about page request
app.get('/about', (req, res) => {
    res.send("About Page");
});



//load the css pages for the html page
// To load the static server files included in the index.html use express.static 
// app.use is a middleware which is executed when a route is hit.
// e.g. app.use('/about,(req,res)=>{cosnsole.log('This is middleware')});
//everytime the about route is hit then console have a message.
app.use(express.static(__dirname));
//handling errors (__dirname+"index.html")
app.get('*',(req,res)=>{
    res.status(404).sendFile(__dirname + "/index.html");
});



// app.listen() method here takes in two parameters, the first one represents the port number and the
//other one is a callback function that returns a message to the console, upon successfully listening to the specified port
app.listen(3000, () => {
    console.log(`server is listening at port ${port}`);
});




// FINALLY THSESE STUFFS TO CREATE A COMPLETE SERVER.

// const express = require('express');
// const path = require('path');
// const app = express();

// const port = 3000;

// app.get('/', (req, res) => {
//     res.send("Hello world");
// });

// app.get('/home', (req, res) => {
//     res.sendFile(path.join(__dirname, '/home.html'));
// });

// app.use(express.static(__dirname));
// app.use('*',(req,res)=>{
//     res.status(404).sendFile(__dirname + "/index.html");
// });

// app.listen(3000, () => {
//     console.log(`server is listening at port ${port}`);
// });
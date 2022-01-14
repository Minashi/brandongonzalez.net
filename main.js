// Required Modules
const path = require('path');
const fs = require('fs');

//var sslfilename = path.basename('D:/Documents/Microsoft VS Code/website/SSL')


// SSL KEY
const privateKey = fs.readFileSync('D:/Documents/Microsoft VS Code/website/SSL/key.pem');
const certificate = fs.readFileSync('D:/Documents/Microsoft VS Code/website/SSL/cert.pem');
var credentials = {key: privateKey, cert: certificate};


// Requiring Module
const express = require('express');
const https = require('https');
const app = express();
const _dirname = 'D:/Documents/Microsoft VS Code/website';
const port = 443; //switch to port 443 after tests for security

const server = https.createServer(credentials, app);

// Route handling '/' request
app.get('/', (req, res) => {
    res.sendFile(path.join(_dirname, '/index.html'));
});

// Route handling '/about' request
app.get('/about', (req, res) => {
    res.send('<h2>YEAHYEAHDABABY</h2>');
});


// Server setup
//listen for request on port 8080, and as a callback function have the port listened on logged
server.listen(port, () => {
    console.log('server listening on port ' + port);
});
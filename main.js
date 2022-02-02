#!/usr/bin/env node

// TODO set up a way to redirect http to https

// Requiring Module --------------------------------
const express = require('express');
const http = require('http');
const https = require('https');
const path = require('path');
const fs = require('fs');


// Constants --------------------------------
const projectDir = '/home/minashi/projectResume';
const unSecurePort = 80;
const securePort = 443; //switch to port 443 after tests for security
const app = express();


// SSL KEY --------------------------------
const privateKey = fs.readFileSync('/home/minashi/projectResume/SSL/key.pem');
const certificate = fs.readFileSync('/home/minashi/projectResume/SSL/cert.pem');
var credentials = {key: privateKey, cert: certificate};


// Initialization --------------------------------
app.use(express.static(__dirname + '/public')); //initate the use of all files in public


// Routing/pathways --------------------------------
// Route handling '/' request (get post put delete)
app.get('/', (req, res) => {
    res.sendFile(path.join(projectDir, '/index.html'));
});

// Route handling '/about' request
app.get('/about', (req, res) => {
    res.send('<h2>about Page</h2>');
});


// security stuff --------------------------------
const helmet = require('helmet'); //middleware for security
app.use(helmet()); //initiate helmet


// Server setup --------------------------------
//listen for request on port 443, and as a callback function have the port listened on logged
app.listen(unSecurePort, () => {
    console.log('server listening on port ' + unSecurePort);
});

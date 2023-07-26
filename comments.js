//create web server
//http is a core module
const http = require('http');
const fs = require('fs');
const path = require('path');
const { parse } = require('querystring');

//create server
const server = http.createServer((req, res) => {
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);
    // console.log(req.headers['user-agent']);
    // console.log(req.headers['accept-language']);
    // console.log(req.headers['accept']);
    // console.log(req.headers['accept-encoding']);
    // console.log(req.headers['cookie']);
    // console.log(req.headers['cache-control']);
    // console.log(req.headers['connection']);
    // console.log(req.headers['host']);
    // console.log(req.headers['upgrade-insecure-requests']);
    // console.log(req.headers['sec-fetch-dest']);
    // console.log(req.headers['sec-fetch-mode']);
    // console.log(req.headers['sec-fetch-site']);
    // console.log(req.headers['sec-fetch-user']);
    // console.log(req.headers['accept-encoding']);
    // console.log(req.headers['referer']);
    // console.log(req.headers['if-none-match']);
    // console.log(req.headers['accept-language']);
    // consol

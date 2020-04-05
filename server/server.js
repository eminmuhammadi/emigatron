/***
  For Documentation
  https://www.npmjs.com/package/ngrok
*/
/* eslint-disable no-console */
process.env.NODE_ENV = 'production';
const fs          = require('fs');
const http        = require('http');
const https       = require('https');
const path        = require('path');
const ngrok       = require('ngrok');
const express     = require('express');
const app         = require('express')();
const compression = require('compression');
const { HTTP_PORT , HTTPS_PORT, NGROK_TOKEN, SECRET} = require(path.join(__dirname, 'config.js'));

app.disable('x-powered-by')
app.use(compression());

  (async function () {

    console.log(`\x1b[40m`,`\x1b[32m`,
    `
         _______  __   __  ___   _______  _______ 
        |       ||  |_|  ||   | |       ||   _   |
        |    ___||       ||   | |    ___||  |_|  |
        |   |___ |       ||   | |   | __ |       |
        |    ___||       ||   | |   ||  ||       |
        |   |___ | ||_|| ||   | |   |_| ||   _   |
        |_______||_|   |_||___| |_______||__| |__|
    
        [+] Sever starting...
        [~] Project : https://github.com/eminmuhammadi/emigatron.git
        [~] Author  : Emin Muhammadi
        [~] Version : 1.0.0
    `,`\x1b[0m`);

    http.createServer(app).listen(HTTP_PORT, () => {
      console.log(`\x1b[40m`,`\x1b[32m`,
      `
        [+] HTTP Server running on ${HTTP_PORT} port`,`\x1b[0m`);
    });

    https.createServer({
      key: fs.readFileSync(path.join(__dirname, '/ssl/key.pem'),'utf8'),
      cert: fs.readFileSync(path.join(__dirname, '/ssl/cert.pem'),'utf8')
    }, app).listen(HTTPS_PORT, () => {
      console.log(`\x1b[40m`,`\x1b[32m`,
      `
        [+] HTTPS Server running on ${HTTPS_PORT} port`,`\x1b[0m`);
    });

    const url = await ngrok.connect({
        proto: 'http',
        addr: HTTP_PORT,
        authtoken: NGROK_TOKEN,
    });
      console.log(`\x1b[40m`,`\x1b[32m`,
      `
        [+] Localhost environment proxied to ${url}`,`\x1b[0m`);
  })().then(()=>{

  /**
   *  Client build path to detect storage
   */  
  app.use(express.static(path.join(__dirname, '/client/build')));
  /**
   *  Client build project
   */  
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
  });
});

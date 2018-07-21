"use strict";

const http = require('http');
const httpProxy = require('http-proxy');
const fs = require('fs');

const config = JSON.parse(fs.readFileSync('./config.json', 'utf-8'));

const listenPort = config.listenPort || 4000;
const targetHost = config.targetHost || 'http://localhost:80';

const proxy = httpProxy.createProxyServer();
const requestHandler = (req, res) => {
  req.headers = {
    ...req.headers,
    ...config.appendHeaders
  }
  proxy.web(req, res, { target: targetHost });
}

http.createServer(requestHandler).listen(listenPort);
console.log('listening');
console.log('http://localhost:' + listenPort);
console.log('');
console.log('config');
console.log(JSON.stringify(config, undefined, 2));

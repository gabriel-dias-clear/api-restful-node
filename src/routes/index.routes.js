const express = require('express');
const routes = express.Router();

routes.get('/', (req,res)=>{

    res.setHeader('Content-Type', 'text/html');
    res.status(200).end('<h1> Hello </h1>');

})

module.exports = routes;
// import express from 'express';

const express = require('express'); //commonjs
const app = express(); //app express
const port = 8081; //port

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
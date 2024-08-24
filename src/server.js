require('dotenv').config();
const path = require('path');
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const router = require('./routes/web');
const connection = require('./config/database');

const app = express();
const port = process.env.PORT || 8888; //port
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//khai báo route
app.use('/', webRoutes);

//test connection

/// simple query
connection.query(
    'SELECT * FROM Users u',
    function(err, results, fields) {
      console.log(">>> result: " , results); // results contains rows returned by select statement
    }
  );

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
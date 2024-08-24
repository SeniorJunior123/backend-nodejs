const connection = require('../config/database');

const getHomepage = (req, res) => {
    let users = [];

    connection.query(
        'SELECT * FROM Users u',
        function (err, results, fields) {
            users = results;
            console.log(">>> result: ", results); 
            
            res.send(JSON.stringify(users))// results contains rows returned by select statement
        }
    );
}

const getABC = (req, res) => {
    res.send('Hello World! with Hiep')
}

const getDemohtml = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage, getABC, getDemohtml,

}
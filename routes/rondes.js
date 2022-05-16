var express = require('express');
var router = express.Router();
var db=require('../database');

// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/rondes-list', function(req, res, next) {
    var sql='SELECT * FROM RONDE';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('rondes-list', { title: 'Ronde List', rondeData: data});
    console.log(data);
  });
});

module.exports = router;
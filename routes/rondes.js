var express = require('express');
var router = express.Router();
var db=require('../database');

// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/rondes-list', function(req, res, next) {
    var sql='SELECT R.ID_RDE id, R.DATE_RDE heure, R.TPS_RDE temps, P.ID_TAB_PHT nb_tab, GROUP_CONCAT(P.REF_PHT ORDER BY P.ID_TAB_PHT) AS tab_presence, FLOOR((((CHAR_LENGTH(GROUP_CONCAT(P.REF_PHT ORDER BY P.ID_TAB_PHT)))+1)/2)) nb_tab FROM RONDE R JOIN PHOTO P ON P.ID_RDE_PHT = R.ID_RDE GROUP BY R.ID_RDE;';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('rondes-list', { title: 'Ronde List', rondeData: data});
    console.log(data);
  });
});

module.exports = router;
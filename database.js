//function connect () {
var mysql = require('mysql');

console.log('Get connection ...');

var conn = mysql.createConnection({
  database: "u716502433_PTC",
  host : "185.224.137.3",
  port : "3306",
  user: "u716502433_PTC",
  password: "6B:cY+]s"
});

conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

//}


//module.exports = { connect };
module.exports = conn;

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host: "",
  user: "",
  password: "",
  database: ""
});

connection.connect();

let get_reviews = function(req, res){
    connection.query('SELECT * FROM Reviews', function(err, rows, fields){
        if(err) {
            res.json({error: err, sucess: false});
            return;
        }
        res.json(rows);
    });
};

let find_review = function(req, res){
  connection.query('SELECT * FROM Reviews', function(err, rows, fields){
      if(err) {
          res.json({error: err, sucess: false});
          return;
      }
      res.json(rows);
  });
};
  
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.route('/api/reviews')
       .get(get_reviews);
/*
app.route('/api/review/:reviewId')
       .get(get_review);
*/
app.route('/api/reviews/search')
       .get(find_review);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

/*
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "mysql-christramier.alwaysdata.net",
  user: "173307",
  password: "",
  database: "christramier_db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(sql);
  });
});*/
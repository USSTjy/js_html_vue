var dbhost = "localhost";
var dbuser = "root";
var dbpassword = "password123";
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: dbhost,
  user: dbuser,
  password: dbpassword,
});
connection.connect();

var createDB = "create database if not exists `myplan`";
connection.query(createDB, function (err, result) {
  if (err) throw err;
});
// 切换数据库
var useSql = "use myplan";
connection.query(useSql, function (err, result) {
  if (err) throw err;
  console.log("res===", result);
});

// 往表格login_info中插入数据
var insertSql =
  "insert into login_info (userName,userPsd) values ('jy','123456')";
connection.query(insertSql, function (err, result) {
  if (err) throw err;
  console.log("res===insertSql===", result);
});

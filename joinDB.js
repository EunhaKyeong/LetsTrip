// MySQL 모듈 추출
var mysql = require('mysql');

// 데이터베이스를 연결한다.
var client = mysql.createConnection({
    host : 'localhost',
    user : 'root', 
    password : '',
    database : 'SignUp'
});

client.connect();

// 데이터베이스 쿼리를 사용한다.
client.query('SELECT * FROM members', function(error, result, fields) {
    if (error) {
        console.log("에러 발생");
    } else {
        console.log(result);
    }
});
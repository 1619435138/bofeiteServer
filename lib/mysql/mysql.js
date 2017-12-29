const mysql = require('mysql');
const Q = require('q');

//创建数据库连接
let connect = mysql.createConnection(config.mysqlInfo);

//连接数据库
connect.connect();

//exports是把模块接口公开
exports.query = (sql) => {
	// connect: 数据库实例配置
	// query： 操作数据库API
	// sql: 操作数据库sql语句
	// Q.ninvoke返回一个promise
	return Q.ninvoke(connect, 'query', sql);

}

/*
q()创建了一个promise对象，
	可在其后接.then来进行链式调用，
	其参数obj将作为该promise的resolve对象，
	传递给then中的函数作为参数。例如，

	q(1).then(function(v) {  
		console.log(v); //1  
	})
*/
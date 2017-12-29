/**
	global	全局
	require	是从外部获取模块

	var myadd=require('./add');   //本目录下的add.js
**/
	global.__basename = __dirname;  
	global.config = require(__basename + '/config/config.js')

	const express = require('express');
	const Router = require(__basename + '/router/router.js');
//express实例化
	const app = express();

//设置跨域权限
	app.all('*', (req, res, next) => {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Headers', 'X-Requested-With');
		res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
		res.header('X-Powered-By', '3.2.1');
		next();
	});

//设置静态目录
//中间件
	app.use(express.static(__basename + '/public'));

//加载所有路由信息
	Router.router(app)
	

app.get('*', (req, res) => {
	res.send('找不到页面');
})

app.listen(config.server.port);
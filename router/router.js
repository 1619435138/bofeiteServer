const RouterController = require(__basename + '/routerController/routerController.js');

exports.router = function (app) {
	app.get('/', RouterController.homeController);
	app.post('/', RouterController.homeController);
	app.get('/about', RouterController.homeController);
}
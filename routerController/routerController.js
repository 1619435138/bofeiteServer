const API = require(__basename + '/server/api.js');
const SQL = require(__basename + '/lib/sql/sql.js');

class RouterController {

	constructor () {

	}

	homeController (req, res) {
		let sql = SQL.homeSQl();
		API.query(sql)
			.then((result) => {
				res.send(result[0]);
			})
	}

}

module.exports = new RouterController();
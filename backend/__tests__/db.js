const connection = require('../src/database/connection');

module.exports = {
	async prepare() {
		await connection.migrate.rollback();
		await connection.migrate.latest();
	},

	async destroy() {
		await connection.destroy();
	}
};

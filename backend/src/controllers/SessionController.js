const connetion = require('../database/connection');

module.exports = {
	async create(request, response) {
		const { id } = request.body;

		const ong = await connetion('ongs')
			.where('id', id)
			.select('name')
			.first();

		if (!ong) {
			return response
				.status(400)
				.json({ error: 'No ONG was found with this ID' });
		}
		return response.json(ong);
	}
};

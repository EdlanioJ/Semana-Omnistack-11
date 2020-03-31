const connetion = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');
module.exports = {
	async index(request, response) {
		const ongs = await connetion('ongs').select('*');

		return response.json(ongs);
	},
	async create(request, response) {
		const { name, email, whatsapp, city, uf } = request.body;

		const id = generateUniqueId();

		await connetion('ongs').insert({
			id,
			name,
			email,
			whatsapp,
			city,
			uf
		});
		response.json({ id });
	}
};

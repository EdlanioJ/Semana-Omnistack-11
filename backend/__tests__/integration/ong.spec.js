const request = require('supertest');

const db = require('../db');
const generateUniqueId = require('../../src/utils/generateUniqueId');
const app = require('../../src/app');

const factory = require('../factories');

describe('ONG', () => {
	beforeEach(db.prepare);

	afterAll(db.destroy);

	it('should be able to create a new ONG', async () => {
		const response = await request(app)
			.post('/ongs')
			.send({
				name: 'APAD',
				email: 'contact@apad.co.ao',
				whatsapp: '244922334455',
				city: 'sequele',
				uf: 'LA'
			});
		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty('id');
		expect(response.body.id).toHaveLength(8);
	});

	it('should list all ONG', async () => {
		const id = generateUniqueId();
		await factory.create('ong', { id });

		const response = await request(app).get('/ongs');

		expect(response.status).toBe(200);
		expect(response.body).toEqual(
			expect.arrayContaining([expect.objectContaining({ id })])
		);
		expect(Array.isArray(response.body)).toBe(true);
	});
});

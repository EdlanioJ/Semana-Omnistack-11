const request = require('supertest');

const db = require('../db');
const generateUniqueId = require('../../src/utils/generateUniqueId');
const app = require('../../src/app');

const factory = require('../factories');

describe('Incident', () => {
	beforeEach(db.prepare);

	afterAll(db.destroy);

	it('should be able to create incident', async () => {
		const id = generateUniqueId();
		await factory.create('ong', { id });

		const response = await request(app)
			.post('/incidents')
			.send({
				title: 'caso 1',
				description: 'case description 1',
				value: 123456
			})
			.set('authorization', id);

		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty('id');
	});
	it('should be able to list incidents', async () => {
		const id = generateUniqueId();

		await factory.create('ong', { id });
		await factory.create('incident', { ong_id: id });

		const response = await request(app).get('/incidents');

		expect(response.status).toBe(200);
		expect(response.body).toEqual(
			expect.arrayContaining([expect.objectContaining({ ong_id: id })])
		);
		expect(Array.isArray(response.body)).toBe(true);
	});

	it('it should delete incident if authencated', async () => {
		const ong_id = generateUniqueId();

		await factory.create('ong', { id: ong_id });
		const id = await factory.create('incident', { ong_id });

		const response = await request(app)
			.delete(`/incidents/${id}`)
			.set('authorization', ong_id);

		expect(response.status).toBe(204);
	});

	it('it should not delete incident with wrong authentication', async () => {
		const ong_id = generateUniqueId();

		await factory.create('ong', { id: ong_id });
		const id = await factory.create('incident', { ong_id });

		const response = await request(app)
			.delete(`/incidents/${id}`)
			.set('authorization', '1290');

		expect(response.status).toBe(401);
	});
});

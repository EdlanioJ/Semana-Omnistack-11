const request = require('supertest');

const db = require('../db');
const generateUniqueId = require('../../src/utils/generateUniqueId');
const app = require('../../src/app');

const factory = require('../factories');

describe('Session', () => {
	beforeEach(db.prepare);

	afterAll(db.destroy);

	it('should auhtenticate with valid id', async () => {
		const id = generateUniqueId();
		await factory.create('ong', { id, name: 'APAD' });

		const response = await request(app)
			.post('/sessions')
			.send({ id });

		expect(response.body).toHaveProperty('name');
		expect(response.body.name).toBe('APAD');
	});

	it('should not auhtenticate with invalid id', async () => {
		const id = generateUniqueId();

		const response = await request(app)
			.post('/sessions')
			.send({ id });

		expect(response.status).toBe(400);
	});
});

const request = require('supertest');

const db = require('../db');
const generateUniqueId = require('../../src/utils/generateUniqueId');
const app = require('../../src/app');

const factory = require('../factories');

describe('Profile', () => {
	beforeEach(db.prepare);

	afterAll(db.destroy);

	it('should list incidents from an authenticated ONG', async () => {
		const id = generateUniqueId();
		await factory.create('ong', { id });

		const response = await request(app)
			.get('/profile')
			.set('authorization', id);

		expect(response.status).toBe(200);
		expect(Array.isArray(response.body)).toBe(true);
	});
});

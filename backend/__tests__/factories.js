const connenction = require('../src/database/connection');
const faker = require('faker/locale/pt_BR');

const factory = require('knex-factory')(connenction);

factory.define('ong', 'ongs', {
	name: faker.company.companyName(),
	email: faker.internet.email(),
	whatsapp: faker.phone.phoneNumber(),
	city: faker.address.city(),
	uf: faker.address.stateAbbr()
});

factory.define('incident', 'incidents', {
	title: faker.lorem.sentence(),
	description: faker.lorem.paragraphs(),
	value: faker.finance.amount()
});
module.exports = factory;

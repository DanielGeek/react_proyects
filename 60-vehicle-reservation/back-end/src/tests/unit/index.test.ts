// app.test.js

const request = require('supertest');
import app from '../../index';

describe('GraphQL API', () => {
	it('should return the list of reservations', async () => {
		const query = `
            query {
                reservations {
                    _id
                    userId
                    vehicleId
                    from
                    to
                }
            }
        `;

		const response = await request(app)
			.post('/graphql')
			.send({ query })
			.expect(200);

		// console.log(response.body.data);

		expect(response.body.data).toMatchObject({
			reservations: expect.arrayContaining([
				{
					_id: expect.any(String),
					userId: expect.any(String),
					vehicleId: expect.any(String),
					from: expect.any(String),
					to: expect.any(String),
				},
			]),
		});
	});
});

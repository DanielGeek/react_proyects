const axios = require('axios');
const { graphql } = require('graphql');
const schema = require('../../../schema/schema');

jest.mock('axios');

describe('GraphQL Schema', () => {
	it('should retrieve a user and company by id', async () => {
		axios.get.mockResolvedValueOnce({
			data: {
				id: '23',
				firstName: 'Bill',
				age: 20,
                companyId: '1',
			},
		});

        const responseCompany = {
            data: {
                id: '1',
                name: 'Apple',
                description: 'iphone',
            },
        };

        axios.get.mockResolvedValueOnce(responseCompany);

		const query = `
        query ($id: String) {
            user(id: $id) {
                id
                firstName
                age,
                company {
                    id
                    name
                    description
                }
            }
        }
        `;

		const variables = {
			id: '23',
		};

		const result = await graphql(schema, query, null, null, variables);
        
		expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/users/23');
        expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/companies/1');
		expect(result).toHaveProperty('data.user.id', '23');
		expect(result).toHaveProperty('data.user.firstName', 'Bill');
		expect(result).toHaveProperty('data.user.age', 20);
        expect(result).toHaveProperty('data.user.company.id', '1');
        expect(result).toHaveProperty('data.user.company.name', 'Apple');
        expect(result).toHaveProperty('data.user.company.description', 'iphone');

	});
    it('should retrieve company by id', async () => {
		axios.get.mockResolvedValueOnce({
			data: {
				id: '1',
				name: 'Apple',
				description: 'iphone',
			},
		});

		const query = `
        query ($id: String) {
            company(id: $id) {
                id
                name
                description,
            }
        }
        `;

		const variables = {
			id: '1',
		};

		const result = await graphql(schema, query, null, null, variables);
        
        expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/companies/1');
        expect(result).toHaveProperty('data.company.id', '1');
        expect(result).toHaveProperty('data.company.name', 'Apple');
        expect(result).toHaveProperty('data.company.description', 'iphone');

	});
});

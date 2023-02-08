const axios = require('axios');
const { graphql } = require('graphql');
const schema = require('../../../schema/schema');

jest.mock('axios');

const addUser = ({ firstName, age }) => {
    return axios.post(`${process.env.API_URL}/users`, { firstName, age })
        .then(resp => resp.data);
};

const deleteUser = ({ id }) => {
    return axios.delete(`${process.env.API_URL}/users/${id}`)
        .then(resp => resp.data);
};

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
        
		expect(axios.get).toHaveBeenCalledWith(`${process.env.API_URL}/users/23`);
        expect(axios.get).toHaveBeenCalledWith(`${process.env.API_URL}/companies/1`);
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
        
        expect(axios.get).toHaveBeenCalledWith(`${process.env.API_URL}/companies/1`);
        expect(result).toHaveProperty('data.company.id', '1');
        expect(result).toHaveProperty('data.company.name', 'Apple');
        expect(result).toHaveProperty('data.company.description', 'iphone');

	});

    it('should retrieve company by id and the users', async () => {
		axios.get.mockResolvedValueOnce({
			data: {
				id: '1',
				name: 'Apple',
				description: 'iphone',
			},
		});

        const users = [
            { id: '23', firstName: 'Bill', age: 20 },
        ];
        axios.get.mockResolvedValue({ data: users });

		const query = `
        query ($id: String) {
            company(id: $id) {
                id
                name
                description,
                users {
                    id
                    firstName
                    age
                }
            }
        }
        `;

		const variables = {
			id: '1',
		};

		const result = await graphql(schema, query, null, null, variables);
        
        expect(axios.get).toHaveBeenCalledWith(`${process.env.API_URL}/companies/1/users`);
        expect(result).toHaveProperty('data.company.id', '1');
        expect(result).toHaveProperty('data.company.name', 'Apple');
        expect(result).toHaveProperty('data.company.description', 'iphone');
        expect(result).toHaveProperty('data.company.users[0].id', '23');
        expect(result).toHaveProperty('data.company.users[0].firstName', 'Bill');
        expect(result).toHaveProperty('data.company.users[0].age', 20);

	});

    it('addUser', async () => {
        const firstName = 'Ezequiel';
        const age = 32;
        const spy = jest.spyOn(axios, 'post').mockImplementation(() => Promise.resolve({ data: { firstName, age } }));

        const result = await addUser({ firstName, age });

        expect(spy).toHaveBeenCalledWith(`${process.env.API_URL}/users`, { firstName, age });
        expect(result).toEqual({ firstName, age });

        spy.mockRestore();
    });

    it('deleteUser', async () => {
        const id = '32';
        const spy = jest.spyOn(axios, 'delete').mockImplementation(() => Promise.resolve({ data: { id } }));

        const result = await deleteUser({ id });

        expect(spy).toHaveBeenCalledWith(`${process.env.API_URL}/users/${id}`);
        expect(result).toEqual({ id });

        spy.mockRestore();
    });
});

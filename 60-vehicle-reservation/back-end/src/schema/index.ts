import { gql } from 'apollo-server-express';
import { makeExecutableSchema } from '@graphql-tools/schema';

// Define the GraphQL schema
const typeDefs = gql`
	type Reservation {
		_id: String
		userId: String!
		vehicleId: String!
		from: String!
		to: String!
	}

	type Query {
		reservation(id: ID!): Reservation,
		reservations: [Reservation!]
	}

	type Mutation {
		createReservation(
			userId: String!
			vehicleId: String!
			from: String!
			to: String!
		): Reservation
	}

	type Mutation {
		deleteReservation(id: ID!): Reservation
	}
	
	type Mutation {
		updateReservation(id: ID!, input: UpdatedReservationInput): Reservation
	}

	input UpdatedReservationInput {
		userId: String, 
		vehicleId: String, 
		from: String, 
		to: String
	}
`;
const schema = makeExecutableSchema({ typeDefs });

export default schema;

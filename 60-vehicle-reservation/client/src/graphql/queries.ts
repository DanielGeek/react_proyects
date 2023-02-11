import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

const GRAPHQL_URL = 'http://localhost:4000/graphql';

export const client = new ApolloClient({
    uri: GRAPHQL_URL,
    cache: new InMemoryCache(),
});

export const RESERVATIONS_QUERY = gql`
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

export const CREATE_RESERVATION_MUTATION = gql`
    mutation createReservation($userId: String!, $vehicleId: String!, $from: String!, $to: String!) {
        createReservation(userId: $userId, vehicleId: $vehicleId, from: $from, to: $to) {
            _id
            userId
            vehicleId
            from
            to
        }
    }
`;

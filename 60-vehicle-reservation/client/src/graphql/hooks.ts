import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { RESERVATIONS_QUERY, CREATE_RESERVATION_MUTATION } from './queries';
import { ReservationsData } from '../interfaces';

export const useCreateReservation = () => {
	const [createReservation, { loading, error }] = useMutation(
		CREATE_RESERVATION_MUTATION,
		{
			update(cache, { data: { createReservation } }) {
				const { reservations } = cache.readQuery({ query: RESERVATIONS_QUERY }) as ReservationsData;
				cache.writeQuery({
					query: RESERVATIONS_QUERY,
					data: { reservations: reservations.concat([createReservation]) },
				});
			},
		}
	);

	return {
		createReservation: async (
			userId: string,
			vehicleId: string,
			from: Date,
			to: Date
		) => {
			const result = await createReservation({
				variables: { userId, vehicleId, from, to },
			});
			return result.data.createReservation;
		},
		loading,
		error: Boolean(error),
	};
};

export const useReservations = () => {
	const { data, loading, error } = useQuery<ReservationsData>(
		RESERVATIONS_QUERY,
		{
			fetchPolicy: 'network-only',
		}
	);

	return {
		reservations: data?.reservations || [],
		loading,
		error: Boolean(error),
	};
};

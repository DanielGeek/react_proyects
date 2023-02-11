import Reservation from '../../../models/Reservation';
import { IResolvers } from '@graphql-tools/utils';
import resolvers from '../../../resolvers';
import { isValidObjectId } from 'mongoose';
import mongoose from 'mongoose';

const reservation = {
	userId: '12345',
	vehicleId: '67890',
	from: '01/01/2023',
	to: '01/02/2023',
};

describe('Resolvers', () => {
	describe('Query.reservations', () => {
		it('should return a list of reservations', async () => {
			// Arrange
			const expectedResult = [
				{
					_id: '123',
					userId: 'user1',
					vehicleId: 'vehicle1',
					from: '2022-01-01',
					to: '2022-01-02',
				},
				{
					_id: '456',
					userId: 'user2',
					vehicleId: 'vehicle2',
					from: '2022-02-01',
					to: '2022-02-02',
				},
			];
			const findSpy = jest
				.spyOn(Reservation, 'find')
				.mockReturnValue(expectedResult);

			// Act
			const result = await resolvers.Query.reservations();

			// Assert
			expect(findSpy).toHaveBeenCalled();
			expect(result).toEqual(expectedResult);
		});
	});

	describe('Query.reservation', () => {

		it('should return null when given an invalid id', async () => {
			// Arrange
			const isValidObjectIdSpy = jest
				.spyOn(mongoose, 'isValidObjectId')
				.mockReturnValue(false);

			// Act
			const result = await resolvers.Query.reservation(null, { id: 'invalid' });

			// Assert
			expect(isValidObjectIdSpy).toHaveBeenCalledWith('invalid');
			expect(result).toBeNull();
		});
	});
});

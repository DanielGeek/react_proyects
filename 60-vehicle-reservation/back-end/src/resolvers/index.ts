import { isValidObjectId } from "mongoose";
import { IResolvers } from '@graphql-tools/utils';
import Reservation from '../models/Reservation';


const resolvers: IResolvers = {
  Query: {
    async reservations() {
      return await Reservation.find();
    },
    async reservation(_, { id }) {
      if ( !isValidObjectId(id) ) {
        console.log('is not a valid mongo id')
        return null;
      }
      try {
        const reservation = await Reservation.findById(id);
        return JSON.parse(JSON.stringify(reservation));
      } catch (error) {
        console.log(error)
      }
    },
  },
  Mutation: {
    async createReservation(root, args) {
      const reservationData = {
        userId: args.userId,
        vehicleId: args.vehicleId,
        from: args.from,
        to: args.to
      };
      try {
        const reservation = new Reservation(reservationData);
        return await reservation.save();
      } catch (error) {
        console.log(error)
      }
    },
    async deleteReservation(_, { id }) {
      if ( !isValidObjectId(id) ) {
        console.log('is not a valid mongo id')
        return null;
      }
      try {
        console.log(id)
        return await Reservation.findByIdAndDelete(id);
      } catch (error) {
        console.log(error)
      }
    },
    async updateReservation(_, { id, input }) {
      if ( !isValidObjectId(id) ) {
        console.log('is not a valid mongo id')
        return null;
      }
      try {
        return await Reservation.findByIdAndUpdate(id, input, { new: true });
      } catch (error) {
        console.log(error)
      }
    },

  },
};

export default resolvers;

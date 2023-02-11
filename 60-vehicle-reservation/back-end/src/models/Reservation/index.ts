import mongoose, { Schema, Document } from 'mongoose';

export interface IReservation extends Document {
  _id: String;
  userId: string;
  vehicleId: string;
  from: string;
  to: string;
}

const Reservation: Schema = new Schema({
  userId: {
    type: String,
    required: true
  },
  vehicleId: {
    type: String,
    required: true
  },
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  }
});

export default mongoose.model<IReservation>('Reservation', Reservation);

export interface ReservationsData {
    reservations: Reservation[];
}

export interface Reservation {
    _id?: string;
    userId: string;
    vehicleId: string;
    from: Date;
    to: Date;
}
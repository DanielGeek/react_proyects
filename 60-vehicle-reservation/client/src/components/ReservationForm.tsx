import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { DatePicker } from "@material-ui/pickers";
import Button from '@material-ui/core/Button';
import ReservationList from './ReservationTable';
import { useCreateReservation } from '../graphql/hooks';
import { Reservation } from '../interfaces';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      width: '25ch',
      margin: theme.spacing(1),
    },
  },
}));


const ReservationForm = () => {
  const { createReservation, loading } = useCreateReservation();
  const [reservation, setReservation] = useState<Reservation>({
    userId: '',
    vehicleId: '',
    from: new Date,
    to: new Date
  });
  const classes = useStyles();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    setReservation({
      ...reservation,
      [event.target.name]: event.target.value
    });
  };

  const handleDateChange = (field: string, date: Date | null) => {
    setReservation({
      ...reservation,
      [field]: date,
    });
  };

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(reservation.userId == '' || reservation.vehicleId == '' || reservation.from.toISOString() == '' || reservation.to.toISOString() == '') 
      return alert('All data is required');
    if(reservation.from > reservation.to)
      return alert('The From date cannot be greater than the To date')
    const { userId, vehicleId, from, to } = reservation;
    // Send the reservation data to the backend
    await createReservation(userId, vehicleId, from, to)
  };

  return (
    <>
      <form className={classes.root} onSubmit={handleSubmit}>
        <br /><br /><br />
        <TextField
          label="User Id"
          name="userId"
          value={reservation.userId}
          onChange={handleInputChange}
        />
        
        <TextField
          label="Vehicle Id"
          name="vehicleId"
          value={reservation.vehicleId}
          onChange={handleInputChange}
        />

        <DatePicker
          label="From"
          value={reservation.from}
          onChange={(date) => handleDateChange("from", date)}
          format="MM/dd/yyyy"
          fullWidth
        />

        <DatePicker
          label="To"
          value={reservation.to}
          onChange={(date) => handleDateChange("to", date)}
          format="MM/dd/yyyy"
          fullWidth
        />

        <Button type="submit" variant="contained" color="primary" role="button" aria-label="save-reservation">
          Save Reservation
        </Button>

      </form>
      <br />
      <ReservationList />
    </>
  );
};

export default ReservationForm;

import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useCreateReservation, useReservations } from '../../graphql/hooks';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ReservationForm from '../../components/ReservationForm';
import { useQuery } from '@apollo/client';

jest.mock('../../graphql/hooks', () => ({
	useCreateReservation: () => ({
		createReservation: jest.fn(),
		loading: false,
	}),
	useQuery: () => ({
		data: { reservations: [] },
		loading: false,
		error: false,
	}),
	useReservations: () => ({
		reservations: [],
		loading: false,
		error: false,
	}),
}));

describe('ReservationForm', () => {
	let mockCreateReservation = jest.fn();

	// beforeEach(() => {
	// 	mockCreateReservation.mockClear();
	// });

	beforeEach(() => {
		mockCreateReservation = jest.fn();
		// Se establece el mock global para la función `fetch`
		global.fetch = jest.fn().mockResolvedValue({ ok: true });
	  });

	  afterEach(() => {
		// Se limpia el mock global para la función `fetch` después de cada prueba
		(global.fetch as jest.Mock).mockClear();
		(global.fetch as jest.Mock).mockRestore();
	  });

	it.only('should render the form and handle submission', async () => {
		const { getByLabelText, getByTestId, getByText, getByRole } = render(
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<ReservationForm />
			</MuiPickersUtilsProvider>
		);

		expect(getByLabelText('User Id')).toBeInTheDocument();
		expect(getByLabelText('Vehicle Id')).toBeInTheDocument();
		expect(getByLabelText('From')).toBeInTheDocument();
		expect(getByLabelText('To')).toBeInTheDocument();
		expect(getByLabelText('save-reservation')).toBeInTheDocument();
		
		// Spy on the `alert` function
		const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
		
		// await act(async () => {
		const userIdInput = getByTestId('user-id');
		userEvent.type(userIdInput, 'user123');

		const vehicleIdInput = getByTestId('vehicle-id');
		userEvent.type(vehicleIdInput, 'vehicle123');

		const fromDateInput = getByTestId('from');
		userEvent.type(fromDateInput, '02/28/2023');

		const toDateInput = getByTestId('to');
		userEvent.type(toDateInput, '03/03/2023');
		// Submit the form
		const saveButton = getByLabelText('save-reservation');
		userEvent.click(saveButton);

		//   })

		
		// Wait for form submission to complete
		await waitFor(() => {
			expect(global.fetch).toHaveBeenCalledTimes(1);
			expect(global.fetch).toHaveBeenCalledWith(
			  'https://my.api.com/reservations',
			  {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
				  userId: 'user123',
				  vehicleId: 'vehicle123',
				  fromDate: new Date('02/28/2023').toISOString(),
				  toDate: new Date('03/03/2023').toISOString(),
				}),
			  }
			);
		  });

		// Restore the `alert` function
		alertSpy.mockRestore();
	});

	it('should display an error message if any form fields are missing', async () => {
		render(
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<ReservationForm />
			</MuiPickersUtilsProvider>
		);
		const saveButton = screen.getByRole('button', {
			name: /Save Reservation/i,
		});

		// Submit the form without filling in any fields
		fireEvent.click(saveButton);

		// Wait for error message to display
		await waitFor(() => {
			expect(screen.getByText('All data is required')).toBeInTheDocument();
			expect(mockCreateReservation).not.toHaveBeenCalled();
		});
	});

	it('should display an error message if "From" date is after "To" date', async () => {
		render(
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<ReservationForm />
			</MuiPickersUtilsProvider>
		);
		const fromDateInput = screen.getByLabelText('From');
		const toDateInput = screen.getByLabelText('To');
		const saveButton = screen.getByRole('button', {
			name: /Save Reservation/i,
		});

		// Fill in form fields with "To" date before "From" date
		fireEvent.change(fromDateInput, { target: { value: '03/03/2023' } });
		fireEvent.change(toDateInput, { target: { value: '02/28/2023' } });

		// Submit the form
		fireEvent.click(saveButton);

		// Wait for error message to display
		await waitFor(() => {
			expect(
				screen.getByText('The From date cannot be greater than the To date')
			).toBeInTheDocument();
			expect(mockCreateReservation).not.toHaveBeenCalled();
		});
	});
});

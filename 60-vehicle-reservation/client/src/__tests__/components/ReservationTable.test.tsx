import React from 'react';
import { render, screen, within } from '@testing-library/react';
import ReservationTable from '../../components/ReservationTable';

jest.mock('../../graphql/hooks');

describe('ReservationTable component', () => {
  test('should render a table with reservations data', () => {
    const mockReservations = [
      {
        _id: '1',
        userId: 'user1',
        vehicleId: 'vehicle1',
        from: new Date(2022, 1, 28),
        to: new Date(2022, 2, 5),
      },
      {
        _id: '2',
        userId: 'user2',
        vehicleId: 'vehicle2',
        from: new Date(2022, 3, 1),
        to: new Date(2022, 3, 7),
      },
    ];

    // Mock the return value of the useReservations hook
    require('../../graphql/hooks').useReservations.mockReturnValue({
      reservations: mockReservations,
      loading: false,
      error: null,
    });

    render(<ReservationTable />);

    // Check that the table is rendered
    expect(screen.getByRole('table')).toBeInTheDocument();

    // Check that the table headers are rendered
    expect(screen.getByRole('columnheader', { name: 'ID' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'User ID' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Vehicle ID' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'From' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'To' })).toBeInTheDocument();

    // Check that the table rows are rendered with the correct data
    const tableRows = screen.getAllByRole('row');
    expect(tableRows).toHaveLength(mockReservations.length + 1); // Include the table header row
    for (let i = 0; i < mockReservations.length; i++) {
      const reservation = mockReservations[i];
      const rowCells = within(tableRows[i + 1]).getAllByRole('cell');
      expect(rowCells[0]).toHaveTextContent(reservation._id);
      expect(rowCells[1]).toHaveTextContent(reservation.userId);
      expect(rowCells[2]).toHaveTextContent(reservation.vehicleId);
      expect(rowCells[3]).toHaveTextContent(reservation.from.toString());
      expect(rowCells[4]).toHaveTextContent(reservation.to.toString());
    }
  });
});

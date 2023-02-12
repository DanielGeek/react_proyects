import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { render, screen } from '@testing-library/react';
import { getByLabelText } from '@testing-library/dom'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { client } from '../graphql/queries';
import ReservationForm from '../components/ReservationForm';

import '../index.css';

describe('main test', () => {
  it('renders without crashing', () => {
    const { getByLabelText } = render(
      <ApolloProvider client={client}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <ReservationForm />
        </MuiPickersUtilsProvider>
      </ApolloProvider>,
    );

    expect(getByLabelText('save-reservation')).toBeInTheDocument();
  });
});

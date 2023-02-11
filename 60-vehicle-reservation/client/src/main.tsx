import { ApolloProvider } from '@apollo/client';
import React from 'react'
import ReactDOM from 'react-dom/client'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import ReservationForm from './components/ReservationForm';
import { client } from './graphql/queries';

import './index.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ReservationForm />
      </MuiPickersUtilsProvider>
    </ApolloProvider>
  </React.StrictMode>
)

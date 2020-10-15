import React from 'react';
import { Provider } from 'react-redux';

// store almacena todos mis estados
import { store } from './store/store';
import { AppRouter } from './router/AppRouter';

export const CalendarApp = () => {
    return (
        // Provider provee a los componentes hijos la info del store
        <Provider store={ store }>
            <AppRouter />            
        </Provider>
    )
}

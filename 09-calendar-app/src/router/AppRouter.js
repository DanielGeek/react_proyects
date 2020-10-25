import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { startChecking } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {

    const dispatch = useDispatch();
    // selecciono de mi store el checking
    const { checking, uid } = useSelector(state => state.auth);

    // renovar token siempre que se ejecute un dispatch
    useEffect(() => {

        dispatch(startChecking());

    }, [dispatch])

    if (checking) {
        return (<h5>Espere...</h5>);
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        exact
                        path="/login"
                        component={LoginScreen}
                        // si el uid tiene algo es true
                        isAuthenticated={!!uid}
                    />

                    <PrivateRoute
                        exact
                        path="/"
                        component={CalendarScreen}
                        isAuthenticated={!!uid}
                    />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}

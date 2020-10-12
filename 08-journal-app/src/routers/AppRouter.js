import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";

import { useDispatch } from 'react-redux';

import { firebase } from '../firebase/firebase-config';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { JournalScreen } from '../components/journal/JournalScreen';
import { login } from '../actions/auth';
import { loadNotes } from '../helpers/loadNotes';
import { setNotes } from '../actions/notes';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setCheking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // observa si el user esta auth
        firebase.auth().onAuthStateChanged(async (user) => {

            // if(user?.uid) {
            if (user) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);

                const notes = await loadNotes(user.uid);
                // guardar en el state de Redux las notas del user
                dispatch(setNotes(notes));

            } else {
                setIsLoggedIn(false);
            }

            setCheking(false);

        })

    }, [dispatch, setCheking, setIsLoggedIn])

    if (checking) {
        return (
            <h1>Wait...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        path="/auth"
                        component={AuthRouter}
                        isAuthenticated={isLoggedIn}
                    />

                    <PrivateRoute
                        //si esta autenticado deja ir a la ruta
                        isAuthenticated={isLoggedIn}
                        exact
                        path="/"
                        component={JournalScreen}
                    />

                    <Redirect to="/auth/login" />

                </Switch>
            </div>
        </Router>
    )
}

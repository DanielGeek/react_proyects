import React, { useContext, useEffect } from 'react';
import { AuthContext } from './../auth/AuthContext';
import { Redirect } from 'react-router';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import { ChatPage } from '../pages/ChatPage';
import { AuthRouter } from './AuthRouter';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {

  const { auth, verifyToken } = useContext(AuthContext);

  useEffect(() => {
    verifyToken();
  }, [verifyToken])

  if ( auth.checking ) {
    return <h1>Espere por favor</h1>
  }

  return (
      <Router>
        <div>
          <Switch>
            {/* <Route path="/auth" component={ AuthRouter } /> */}
            <PublicRoute isAuthenticated={ auth.logged } path="/auth" component={ AuthRouter } />
            <PrivateRoute isAuthenticated={ auth.logged } exact path="/" component={ ChatPage } />

            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
  )
}

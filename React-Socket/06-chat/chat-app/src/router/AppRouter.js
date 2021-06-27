import React from 'react';
import { Redirect } from 'react-router';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { ChatPage } from '../pages/ChatPage';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
  return (
      <Router>
        <div>
          <Switch>
            <Route path="/auth" component={ AuthRouter } />
            <Route exact path="/" component={ ChatPage } />

            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
  )
}

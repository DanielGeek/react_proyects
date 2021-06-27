import React from 'react';
import { Redirect } from 'react-router';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { ChatPage } from '../pages/ChatPage';

export const AppRouter = () => {
  return (
      <Router>
        <div>
          <Switch>
            <Route path="/login" component={ LoginPage } />
            <Route path="/register" component={ RegisterPage } />
            <Route path="/" component={ ChatPage } />

            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
  )
}

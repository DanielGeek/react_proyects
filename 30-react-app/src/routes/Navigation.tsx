import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import {
  FormikAbstractation,
  FormikBasePage,
  FormikComponents,
  FormikYupPage,
  RegisterPage,
  RegisterFormitkPage,
} from '../03-forms/pages';


import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" activeClassName="nav-active" exact>Register Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" activeClassName="nav-active" exact>Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" activeClassName="nav-active" exact>Formik Yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" activeClassName="nav-active" exact>Formik Components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstractation" activeClassName="nav-active" exact>Formik Abstractation</NavLink>
            </li>
            <li>
              <NavLink to="/formik-register" activeClassName="nav-active" exact>Register Formik</NavLink>
            </li>
            <li>
              <NavLink to="/home" activeClassName="nav-active" exact>Home</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/formik-basic">
            <FormikBasePage/>
          </Route>
          <Route path="/formik-yup">
            <FormikYupPage />
          </Route>
          <Route path="/formik-components">
            <FormikComponents />
          </Route>
          <Route path="/formik-abstractation">
            <FormikAbstractation />
          </Route>
          <Route path="/formik-register">
            <RegisterFormitkPage />
          </Route>
          <Route path="/home">
            <h1>Homo</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
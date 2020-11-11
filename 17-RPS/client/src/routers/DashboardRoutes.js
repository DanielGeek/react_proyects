import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Navbar } from '../UI/NavBar/Navbar'
import { RPS } from '../containers/RPS'
import { WinnerScreen } from '../components/Winners/WinnerScreen'

export const DashboardRoutes = () => {

    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/home" component={RPS} />
                    <Route exact path="/Winners" component={WinnerScreen} />

                    <Redirect to="/home" />
                </Switch>
            </div>
        </>
    )
}

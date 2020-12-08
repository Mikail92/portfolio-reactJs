import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from '../homepage';
import PortfolioItem from '../../components/portfolio-item';

// Normal Route
import PublicRoute from "../_PublicRoute";

export default function Routes() {
    return (
        <Switch>
            <PublicRoute 
                exact path="/"
                component={Homepage}
            />
            <PublicRoute 
                exact path="/portfolio-section"
                component={PortfolioItem}
            />
        </Switch>
    )
}
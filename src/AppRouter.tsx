import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {publicRoutes} from 'src/utils/routes';
import {PersonalizedHoroscope} from './utils/constants';

const AppRouter = () => {
    return (
        <Switch>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact={true} />
            )}
            <Redirect to={PersonalizedHoroscope} />
        </Switch>
    );
};

export default AppRouter;

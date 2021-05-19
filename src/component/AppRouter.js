import React, {useContext} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import {CHAT_ROUTER, LOGIN_ROUTER} from "../ulits/constant";
import {privateRoutes, publicRoutes} from "./routers";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../index";

const AppRouter = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    return user ?
        (
            <Switch>
                {privateRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact={true}/>
                )}
                <Redirect to={CHAT_ROUTER}/>
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact={true}/>
                )}
                <Redirect to={LOGIN_ROUTER}/>
            </Switch>
        )
};

export default AppRouter;
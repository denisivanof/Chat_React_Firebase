import React, {useContext} from 'react';
import {AppBar, Button, Grid, Toolbar} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTER} from "../ulits/constant";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Navbar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return (
        <AppBar color={'primary'} position="static">
            <Toolbar variant={"dense"}>
                <Grid container justify={"flex-end"}>
                    {user ?
                        <Button onClick={() => auth.signOut()} variant={"outlined"}>Выйти</Button>
                        : <NavLink to={LOGIN_ROUTER}>
                            <Button variant={"outlined"}>Логин</Button>
                        </NavLink>}

                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
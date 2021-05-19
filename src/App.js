import './App.css';
import React, {useContext} from 'react';
import {BrowserRouter} from 'react-router-dom'
import Navbar from "./component/Navbar";
import AppRouter from "./component/AppRouter";
import {Context} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "./component/Loader";

const App = () => {
    const {auth} = useContext(Context)
    const [user, loading, error] = useAuthState(auth)

    if (loading) {
        return <Loader/>
    }
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    );
};

export default App;

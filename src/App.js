import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Routes from "./route/Routes";
import Auth from "./utils/Auth";
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import Header from "./components/Header";
import Loader from "./components/loader/Loader";


function App() {
    const location = useLocation();

    const { loading }  = useSelector(state => state.loading);
    const dispatch = useDispatch();
    return (
        <React.Fragment>
            <Header /> 
            <Routes/>
            <Loader loading={loading} />
        </React.Fragment>
    )
    
}


export default App;

import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SecureRoute from "../utils/SecureRoute";
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import DetailPay from '../pages/DetailPay';
import Payment from '../pages/Payment';
import Test from '../pages/test';
import PageNotFound from '../pages/PageNotFound';

const Routers = (props) => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("didMount")
    }, [])
    
    return (
        <>
           <Switch>
                <Route exact path="/" component={() => <Redirect to="/home" />} />
                <Route path="/home" component={Home} />
                <Route path="/product-detailsut/:id" component={ProductDetails} />
                <Route path="/detail-pay/:id" component={DetailPay} />
                <Route path="/payment/:id" component={Payment} />
                <Route path="/test" component={Test} />
                {/* <SecureRoute exact path="/passive_surv/disease_statement/edit/:id" component={Disease_Statement_Save} /> */}
                <Route path="*" exact={true} component={PageNotFound} />
            </Switch>
        </>
         
    )
}

export default Routers
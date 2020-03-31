import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginScreen from "_screens/Login/index";
import HomePage from "_screens/HomePage";

const RootNavigator = ()=>(
    <Router>
        <Scene key="root">
            <Scene key="login" component={LoginScreen} initial={true} hideNavBar></Scene>
            <Scene key="homePage" component={HomePage} hideNavBar></Scene>
        </Scene>
    </Router>
);

export default RootNavigator;

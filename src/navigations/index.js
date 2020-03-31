import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginScreen from "_screens/Login/index";

const RootNavigator = ()=>(
    <Router>
        <Scene key="root">
            <Scene key="login" component={LoginScreen} initial={true} hideNavBar={true}></Scene>
        </Scene>
    </Router>
);

export default RootNavigator;

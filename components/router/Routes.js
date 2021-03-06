import React, { Component } from 'react';
import {Actions, Router, Scene} from 'react-native-router-flux';
import Splash from '../splash/Splash';
import User from '../users/User';
import Verification from '../users/Verification';

export default class Routes extends Component {
    state = {  }
    render() {
        return (
            <Router>
                <Scene key='root'>
                    <Scene key='Splash' initial component={Splash} hideNavBar/>
                    <Scene key='User' component={User} hideNavBar/>
                    <Scene key='Verification' component={Verification} hideNavBar/>
                </Scene>
            </Router>
        );
    }
}
//src/SignupScreeeen
import React from 'react';
import { View, Text, Button } from 'react-native';
import LoginForm  from '../components/organisms/loginForm/index';

const LoginScreen = (props) => {
    return (
        <LoginForm navigation = {props.navigation} />
    );
};

export default LoginScreen;
import React from 'react';
import Login from '../pages/Login';

import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen 
            name="Login"
            component={Login}
            options={{
                title: 'Log In',
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
        />
    </AuthStack.Navigator>
);

export default AuthRoutes;
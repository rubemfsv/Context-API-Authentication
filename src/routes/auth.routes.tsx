import React from 'react';
import SignIn from '../pages/SignIn';

import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen 
            name="Signin"
            component={SignIn}
            options={{
                title: 'Sign In',
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  alignItems: 'center',
                },
              }}
        />
    </AuthStack.Navigator>
);

export default AuthRoutes;
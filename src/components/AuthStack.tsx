import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Register} from '../screens/auth';
import {AuthParamList} from '../@types/AuthParamList';

const Stack = createStackNavigator<AuthParamList>();

interface AuthStackProps {}

export const AuthStack: React.FC<AuthStackProps> = ({}) => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerTitle: 'Log in'}}
      />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

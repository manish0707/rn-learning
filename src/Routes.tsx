import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppTabs, AuthContext, AuthStack} from '../src/components';
import {useContext} from 'react';

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}: RoutesProps) => {
  const {user} = useContext(AuthContext);

  return (
    <NavigationContainer>
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

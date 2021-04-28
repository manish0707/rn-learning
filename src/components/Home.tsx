import React from 'react';
import {useContext} from 'react';
import {Text, Button} from 'react-native';
import {Center} from '../components';
import {AuthContext} from './AuthProviders';
interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  const {logout} = useContext(AuthContext);
  return (
    <Center>
      <Text>This is home screen</Text>
      <Button title="Logout" onPress={() => logout()} />
    </Center>
  );
};

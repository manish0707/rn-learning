import React from 'react';
import {useContext} from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';
import {AuthNavProps} from '../../@types/AuthParamList';
import {AuthContext, Center} from '../../components';

export const Login: React.FC<AuthNavProps<'Register'>> = ({
  navigation,
  route,
}: AuthNavProps<'Register'>) => {
  const {login} = useContext(AuthContext);
  return (
    <Center>
      <View style={styles.Container}>
        <Text style={styles.Text}>{route.name} Screen</Text>
        <Button title="Log in" onPress={() => login()} />
        <Button
          title="Create New Account"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </Center>
  );
};

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    height: 400,
    width: '90%',
    borderWidth: 1,
    padding: 20,
    borderRadius: 20,
  },
  Text: {
    fontSize: 25,
    textAlign: 'center',
  },
});

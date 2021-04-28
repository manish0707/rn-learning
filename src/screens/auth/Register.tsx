import React from 'react';
import {Text, StyleSheet, Button} from 'react-native';
import {AuthNavProps} from '../../@types/AuthParamList';
import {Center} from '../../components';

export const Register: React.FC<AuthNavProps<'Register'>> = ({
  navigation,
  route,
}: AuthNavProps<'Register'>) => {
  return (
    <Center>
      <Text style={styles.Text}>{route.name} Screen</Text>
      <Button
        title="Go To Login"
        onPress={() => navigation.navigate('Login')}
      />
    </Center>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontSize: 25,
  },
});

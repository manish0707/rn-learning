import React from 'react';
import {useContext} from 'react';
import {Text, Button, StyleSheet} from 'react-native';
import {Center} from '../../../components';
import {AuthContext} from '../../../components/AuthProviders';
interface FeedProps {}

export const Feed: React.FC<FeedProps> = ({}) => {
  const {user, logout} = useContext(AuthContext);
  return (
    <Center>
      <Text style={styles.Text}>Welcome, {user?.username}</Text>
      <Button title="Logout" onPress={() => logout()} />
    </Center>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontSize: 20,
    marginVertical: 10,
  },
});

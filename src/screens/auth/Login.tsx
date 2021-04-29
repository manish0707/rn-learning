import React from 'react';
import {useState} from 'react';
import {useContext} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {AuthNavProps} from '../../@types/AuthParamList';
import {AuthContext, Center} from '../../components';

export const Login: React.FC<AuthNavProps<'Login'>> = ({
  navigation,
}: AuthNavProps<'Login'>) => {
  const {login} = useContext(AuthContext);
  const [userData, setUserData] = useState({username: '', password: ''});

  function handleLogin() {
    const {username, password} = userData;
    if (username && password) {
      login({username, password});
    }
  }
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <Center styles={{backgroundColor: '#576574'}}>
      <View style={styles.Container}>
        <Text style={styles.Heading}>Log In</Text>
        <View style={styles.FormContainer}>
          <View style={styles.FormFieldContainer}>
            <Icon name="person" size={20} />
            <TextInput
              onChangeText={username => setUserData({...userData, username})}
              placeholder="Username"
              style={styles.TextInput}
            />
          </View>
          <View style={styles.FormFieldContainer}>
            <Icon name="lock" size={20} />
            <TextInput
              onChangeText={password => setUserData({...userData, password})}
              placeholder="Password"
              style={styles.TextInput}
              secureTextEntry
            />
          </View>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.SubmitButton}>Log In</Text>
          </TouchableOpacity>
          <Text style={styles.RegisterText}>
            First Time Here?{' '}
            <Text
              style={styles.RegisterLink}
              onPress={() => navigation.navigate('Register')}>
              Register
            </Text>
          </Text>
        </View>
      </View>
    </Center>
  );
};

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  Heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  FormContainer: {
    height: 350,
    display: 'flex',
    justifyContent: 'space-evenly',
    color: 'white',
  },
  FormFieldContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    width: 200,
  },
  TextInput: {
    color: 'white',
  },
  SubmitButton: {
    backgroundColor: 'black',
    color: 'white',
    padding: 10,
    borderRadius: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
  RegisterText: {
    textAlign: 'center',
    fontSize: 14,
    color: 'white',
  },
  RegisterLink: {
    color: '#74b9ff',
  },
});

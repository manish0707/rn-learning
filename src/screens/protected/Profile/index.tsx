import React from 'react';
import {Text} from 'react-native';
import {Center} from '../../../components';

interface ProfileProps {}

export const Profile: React.FC<ProfileProps> = ({}) => {
  return (
    <Center>
      <Text>This is profile screen!</Text>
    </Center>
  );
};

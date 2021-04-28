import React from 'react';
import {Text} from 'react-native';
import {Center} from '../components';

interface SearchProps {}

export const Search: React.FC<SearchProps> = ({}) => {
  return (
    <Center>
      <Text>This is search screen</Text>
    </Center>
  );
};

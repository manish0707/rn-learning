import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Feed} from './Feed';
import {FeedDetails} from './FeedDetails';

const HomeStackNavigator = createStackNavigator<{
  Feed: undefined;
  FeedDetails: undefined;
}>();

export const HomeStack = () => {
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen name="Feed" component={Feed} />
      <HomeStackNavigator.Screen name="FeedDetails" component={FeedDetails} />
    </HomeStackNavigator.Navigator>
  );
};

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {AppParamList} from '../../@types/AppParamList';
import {HomeStack} from './Home/HomeStack';
import {Search} from './Search';
import {Profile} from './Profile';

interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppParamList>();

export const AppTabs: React.FC<AppTabsProps> = ({}) => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="search" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

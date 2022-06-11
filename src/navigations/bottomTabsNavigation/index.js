import React from 'react';
import {Dimensions} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FeedTabScreen from '../../routes/afterAuthentication/FeedTab';
import ProfileTabNavigation from '../profileTabNavigation';

import {feedTabOptions, profileTabOptions} from './tabsOptions';

const w = Dimensions.get('window').width;

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          height: w * 0.18,
          paddingBottom: w * 0.05,
        },
      }}>
      <Tab.Screen
        name="Feed"
        component={FeedTabScreen}
        options={feedTabOptions}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileTabNavigation}
        options={profileTabOptions}
      />
    </Tab.Navigator>
  );
}

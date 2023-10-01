import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ListingDetails, ListingScreen } from '../screens';

const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: 'modal',
        headerShown: false,
      }}
    >
      <Stack.Screen name="Listings" component={ListingScreen} />
      <Stack.Screen name="ListingDetails" component={ListingDetails} />
    </Stack.Navigator>
  );
};

export default FeedNavigator;

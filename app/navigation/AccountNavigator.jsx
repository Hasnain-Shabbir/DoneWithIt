import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AccountScreen, Messages } from '../screens';

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Messages" component={Messages} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;

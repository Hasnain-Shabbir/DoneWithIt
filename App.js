import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { Screen } from './app/components';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';

export default function App() {
  return (
    <GestureHandlerRootView>
      <Screen>
        <NavigationContainer theme={navigationTheme}>
          <AuthNavigator />
        </NavigationContainer>
      </Screen>
    </GestureHandlerRootView>
  );
}

import React, { useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Screen, OfflineNotice } from './app/components';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import AuthContext from './app/auth/AuthContext';
import AuthProvider from './app/auth/AuthContext';
import authStorage from './app/auth/storage';
import { SplashScreen } from './app/screens';

export default function App() {
  const [user, setUser] = useState();

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  return (
    <SplashScreen func={restoreUser}>
      <AuthProvider.Provider value={{ user, setUser }}>
        <GestureHandlerRootView>
          <Screen>
            <OfflineNotice />
            <NavigationContainer theme={navigationTheme}>
              {user ? <AppNavigator /> : <AuthNavigator />}
            </NavigationContainer>
          </Screen>
        </GestureHandlerRootView>
      </AuthProvider.Provider>
    </SplashScreen>
  );
}

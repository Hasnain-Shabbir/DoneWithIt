import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { ListItem, Screen } from './app/components';
import { ListEditScreen } from './app/screens';

export default function App() {
  return (
    <GestureHandlerRootView>
      <Screen>
        <ListEditScreen />
      </Screen>
    </GestureHandlerRootView>
  );
}

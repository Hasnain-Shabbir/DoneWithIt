import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ListEditScreen from './app/screens/ListEditScreen/ListEditScreen';

export default function App() {
  return (
    <GestureHandlerRootView>
      <ListEditScreen />
    </GestureHandlerRootView>
  );
}

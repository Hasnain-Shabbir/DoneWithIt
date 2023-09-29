import React from 'react';
import { SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { ListItem } from './app/components';

export default function App() {
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={{ paddingVertical: 50 }}>
        <ListItem
          title="Mosh Hamedani"
          subTitle="code with mosh"
          image={require('./app/assets/mosh.jpg')}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

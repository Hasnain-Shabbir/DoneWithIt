import React, { useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Screen, AppTextInput, AppPicker } from './app/components';

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Camera', value: 3 },
];

export default function App() {
  const [category, setCategory] = useState('');

  return (
    <GestureHandlerRootView>
      <Screen>
        <AppPicker
          icon="apps"
          items={categories}
          onSelectedItem={(item) => setCategory(item)}
          placeholder="Category"
          selectedItem={category}
        />
        <AppTextInput placeholder="Email" icon="email" />
      </Screen>
    </GestureHandlerRootView>
  );
}

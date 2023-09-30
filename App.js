import React, { useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { FormImagePicker, ImageInputList, Screen } from './app/components';
import ListEditScreen from './app/screens/ListEditScreen/ListEditScreen';

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleDelete = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <GestureHandlerRootView>
      <Screen>
        <ListEditScreen />
      </Screen>
    </GestureHandlerRootView>
  );
}

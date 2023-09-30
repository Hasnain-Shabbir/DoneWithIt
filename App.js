import React, { useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { ImageInputList, Screen } from './app/components';

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
        <ImageInputList
          imageUris={imageUris}
          onAddImage={handleAdd}
          onRemoveImage={handleDelete}
        />
      </Screen>
    </GestureHandlerRootView>
  );
}

import React, { useEffect, useState, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Splash from 'expo-splash-screen';

const SplashScreen = ({ children, func }) => {
  const [isReady, setIsReady] = useState(false);

  async function prepare() {
    try {
      await Splash.preventAutoHideAsync();
      func();
    } catch (error) {
      console.log('Error Loading the Splash Screen', error);
    } finally {
      setIsReady(true);
    }
  }

  useEffect(() => {
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await Splash.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return <View onLayout={onLayoutRootView}>{children}</View>;
};

export default SplashScreen;

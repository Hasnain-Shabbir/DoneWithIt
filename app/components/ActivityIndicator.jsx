import React from 'react';
import LottieView from 'lottie-react-native';
import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';

const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require('../assets/animations/loader.json')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: colors.white,
    width: '100%',
    height: '100%',
    opacity: 0.8,
    zIndex: 4,
  },
});

export default ActivityIndicator;

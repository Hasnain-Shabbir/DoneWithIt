import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import AppButton from './AppButton';
import colors from '../config/colors';

const ApiButton = ({ errorMessage, title, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <MaterialCommunityIcons
          name="close-network"
          size={100}
          color={colors.light}
        />
      </View>
      <AppText style={styles.error}>{errorMessage}</AppText>
      <AppButton title={title} onPress={onPress} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  },
  icon: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 95,
    height: 150,
    justifyContent: 'center',
    width: 150,
  },
  error: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 15,
  },
  button: {
    marginTop: 30,
  },
});

export default ApiButton;

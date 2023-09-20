import {
  SafeAreaView,
  View,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { AppButton } from '../../components';

const Welcome = () => {
  return (
    <ImageBackground
      style={styles.background}
      blurRadius={10}
      source={require('../../assets/background.jpg')}
      resizeMode="cover"
    >
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/logo-red.png')}
          resizeMode="contain"
          style={styles.logo}
        />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonsContainer: {
    width: '100%',
    padding: 20,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  },
});

export default Welcome;

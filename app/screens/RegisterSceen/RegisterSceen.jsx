import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
  Screen,
  ActivityIndicator,
} from '../../components';
import authApi from '../../api/auth';
import { useApi, useAuth } from '../../hooks';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

function RegisterScreen() {
  const [registerFailed, setRegisterFailed] = useState(false);
  const registerApi = useApi(authApi.register);
  const loginApi = useApi(authApi.login);

  const [error, setError] = useState('');
  const auth = useAuth();

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);

    if (result.ok === false) {
      setRegisterFailed(true);
      if (result.data.error) setError(result.data.error);
      else {
        setError('An unexpected error occurred');
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password,
    );

    auth.login(authToken);
    setRegisterFailed(false);
  };

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <AppForm
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={registerFailed} />
          <AppFormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" />
        </AppForm>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;

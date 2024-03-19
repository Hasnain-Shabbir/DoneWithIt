import React from 'react';
import { View, StyleSheet, Keyboard, Alert } from 'react-native';
import messagesApi from '../api/messages';

const ContactSellerForm = ({ listing }) => {
  const handleSumbit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      console.log('Error sending message', result);

      return Alert.alert('Error', 'Could not send the message to the server');
    }

    resetForm();
  };
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {},
});

export default ContactSellerForm;

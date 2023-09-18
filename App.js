import React from 'react';
import { View, StyleSheet } from 'react-native';
import SignUp from './auth/SignUp'; 
import Login from './auth/Login'; 
import ForgotPass from './auth/ForgotPass';
import ChangePass from './auth/ChangePass';

export default function App() {
  return (
    <View style={styles.container}>
      <ChangePass /> {}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

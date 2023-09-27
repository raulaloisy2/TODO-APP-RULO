import React from 'react';
import { View, StyleSheet } from 'react-native';
import SignUp from './auth/SignUp'; 
import Login from './auth/Login'; 
import ForgotPass from './auth/ForgotPass';
import ChangePass from './auth/ChangePass';
import Jobs from  './auth/Jobs';

export default function App() {
  return (
    <View style={styles.container}>
      <Jobs /> {}
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
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


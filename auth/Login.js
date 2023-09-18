import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Validaciones
    if (username === '') {
      setError('Por favor, ingrese su nombre de usuario.');
      return;
    }
    
    if (password === '') {
      setError('Por favor, ingrese su contraseña.');
      return;
    }

    // Lógica de inicio de sesión (aquí puedes realizar una solicitud a tu servidor)
    console.log('Nombre de Usuario:', username);
    console.log('Contraseña:', password);

    // Limpiar errores y campos
    setError('');
    setUsername('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Iniciar Sesión</Text>
      
      {error !== '' && <Text style={styles.error}>{error}</Text>}

      <View style={styles.formGroup}>
        <Text style={styles.label}>Nombre de Usuario</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su nombre de usuario"
          value={username}
          onChangeText={text => setUsername(text)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su contraseña"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <Text>
        <Text>¿Olvidaste tu contraseña? </Text>
        <Text style={styles.link}>Recuperar Contraseña</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  formGroup: {
    marginBottom: 10,
    width: '80%',
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Login;

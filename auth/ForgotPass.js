import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

function ForgotPass() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = () => {
    // Validaciones
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailPattern.test(email)) {
      setError('El correo electrónico no es válido.');
      return;
    }

    // Lógica para enviar el correo de restablecimiento (aquí puedes realizar una solicitud a tu servidor)
    console.log('Correo Electrónico:', email);

    // Limpiar errores y campo
    setError('');
    setEmail('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olvidé mi Contraseña</Text>
      
      {error !== '' && <Text style={styles.error}>{error}</Text>}

      <View style={styles.formGroup}>
        <Text style={styles.label}>Correo Electrónico</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su correo electrónico"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Enviar Correo de Restablecimiento</Text>
      </TouchableOpacity>

      <Text>
        <Text>¿No tienes una cuenta? </Text>
        <Text style={styles.link}>Regístrate</Text>
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

export default ForgotPass;

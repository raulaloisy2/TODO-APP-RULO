import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function SignUp() {
  // Definir estados para los valores de los campos de entrada
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = () => {
    // Validar el campo de correo electrónico con una expresión regular
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailPattern.test(email)) {
      setError('El correo electrónico no es válido.');
      return;
    }

    console.log('Nombre:', nombre);
    console.log('Correo Electrónico:', email);
    console.log('Contraseña:', password);

    // Restablecer los valores de los campos de entrada y el mensaje de error
    setNombre('');
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Nombre ejemplo</Text>
      <Text style={styles.title}>Registro</Text>
      {error !== '' && <Text style={styles.error}>{error}</Text>}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Nombre de Usuario</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su nombre de usuario"
          value={nombre}
          onChangeText={text => setNombre(text)}
        />
      </View>
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
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
      <Text>
        <Text>¿Ya tienes una cuenta? </Text>
        <Text style={styles.link}>Iniciar Sesión</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
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

export default SignUp;

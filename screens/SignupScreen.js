import React, { useState } from 'react';
import Footer from '../components/Footer';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function SignupScreen({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async () => {
    if (!firstName || !surname || !email || !password || !confirmPassword) {
      Alert.alert('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('https://plugspot.co.uk/mobile_api_integration/signup.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: firstName,
        surname: surname,
        email: email,
        password: password
      })
    });

      const result = await response.json();

      if (result.success) {
        Alert.alert(
        'Signup successful!',
        'Please check your email',
        'to verify your account.'
      );
        navigation.navigate('Login');
      } else {
        Alert.alert('Signup failed', result.message || 'Please try again.');
      }

    } catch (error) {
      console.error(error);
      Alert.alert('An error occurred. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>PLUG</Text>
      <Text style={styles.tagline}>Connect, communicate and share with friends and family</Text>

      <View style={styles.signupBox}>
        <Text style={styles.signupTitle}>Signup</Text>

        <View style={styles.nameRow}>
          <TextInput
            placeholder="First Name"
            style={[styles.input, styles.nameInput]}
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput
            placeholder="Surname"
            style={[styles.input, styles.nameInput]}
            value={surname}
            onChangeText={setSurname}
          />
        </View>

        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
          <Text style={styles.signupButtonText}>SIGNUP</Text>
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <Text style={styles.loginPrompt}>Already Have an Account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F4F4',
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 70,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 10,
    fontStyle: 'italic',
    textShadowColor: 'black',
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 1,
    color: 'pink',
  },
  tagline: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  signupBox: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    alignItems: 'center',
  },
  signupTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap:10,
  },
  nameInput: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    marginBottom: 12,
    borderRadius: 6,
    backgroundColor: '#fafafa',
    width: '100%',
  },
   signupButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    width: '100%',
  },
  signupButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  loginPrompt: {
    marginTop: 20,
    fontSize: 14,
    color: '#333',
  },
  loginLink: {
    color: '#007BFF',
    marginTop: 5,
    fontSize: 14,
  },
  loginContainer: {
  alignSelf: 'flex-start',
},

});
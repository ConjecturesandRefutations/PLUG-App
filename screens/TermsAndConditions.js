import React, { useState } from 'react';
import Footer from '../components/Footer';
import { View, ScrollView, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function TermsAndConditions({ navigation }) {
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
    <ScrollView style={styles.container}>

      <Footer />
    </ScrollView>
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

});
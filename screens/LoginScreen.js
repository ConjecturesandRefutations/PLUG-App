  import React, { useState } from 'react';
  import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
  import Footer from '../components/Footer';

  const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleLogin = async () => {
    try {
      const response = await fetch('https://plugspot.co.uk/mobile_api_integration/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const data = await response.json();

    if (response.ok && data.success) {
      navigation.navigate('IndexScreen');
    } else {
      if (data.error === 'email') setErrorMsg('Email not verified. Check your inbox.');
      else if (data.error === 'password') setErrorMsg('Invalid password');
      else if (data.error === 'user') setErrorMsg('Invalid email');
      else setErrorMsg('Login failed. Please try again.');
    }
    } catch (error) {
      console.error(error);
      setErrorMsg('Network error. Please try again later.');
    }
  };

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.logo}>PLUG</Text>
        <Text style={styles.tagline}>Connect, communicate and share with friends and family</Text>

        <View style={styles.loginBox}>
          <Text style={styles.loginTitle}>Login</Text>

          {errorMsg !== '' && <Text style={styles.errorText}>{errorMsg}</Text>}

          <TextInput
            style={styles.input}
            placeholder="email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            placeholder="password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity>
            <Text style={styles.forgotText}>Forgotten your password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>

          <Text style={styles.signupPrompt}>Don't have an account?</Text>

          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signupLink}>Signup</Text>
          </TouchableOpacity>
        </View>

        <Footer />
      </ScrollView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      padding: 24,
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow: 1,
      backgroundColor: '#F5F4F4',
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
      fontFamily: 'Open Sans',
    },
    tagline: {
      textAlign: 'center',
      fontSize: 16,
      color: '#333',
      marginBottom: 30,
      fontWeight: '600',
    },
    loginBox: {
      width: '100%',
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 12,
      elevation: 4,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 2 },
    },
    loginTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 15,
      textAlign: 'center',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      padding: 12,
      marginBottom: 12,
      borderRadius: 6,
      backgroundColor: '#fafafa',
    },
    forgotText: {
      color: '#007bff',
      textAlign: 'right',
      marginBottom: 20,
    },
    loginButton: {
      backgroundColor: '#007bff',
      paddingVertical: 12,
      borderRadius: 6,
      alignItems: 'center',
    },
    loginButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    signupPrompt: {
      marginTop: 20,
      color: '#333',
    },
    signupLink: {
      color: '#007BFF',
      marginTop: 5,
      fontSize: 14,
    },
  });

  export default LoginScreen;

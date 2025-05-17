import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>PLUG</Text>
      <Text style={styles.tagline}>
        Connect, communicate and share with friends and family
      </Text>

      <View style={styles.loginBox}>
        <Text style={styles.loginTitle}>Login</Text>

        <TextInput placeholder="email" style={styles.input} />
        <TextInput placeholder="password" secureTextEntry style={styles.input} />

        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgotten your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        <Text style={styles.signupPrompt}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signupLink}>Signup</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footerLinks}>
        Privacy Policy | Terms and Conditions
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 48,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 10,
  },
  tagline: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  loginBox: {
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
  loginTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  forgotText: {
    color: '#007BFF',
    fontSize: 14,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 15,
    width: '100%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  signupPrompt: {
    fontSize: 14,
    color: '#333',
  },
  signupLink: {
    color: '#007BFF',
    marginTop: 5,
    fontSize: 14,
  },
  footerLinks: {
    fontSize: 12,
    color: '#007BFF',
    marginTop: 30,
    textAlign: 'center',
  },
});

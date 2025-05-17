import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function SignupScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>PLUG</Text>
      <Text style={styles.tagline}>
        Connect, communicate and share with friends and family
      </Text>

      <View style={styles.signupBox}>
        <Text style={styles.signupTitle}>Signup</Text>

        <View style={styles.nameRow}>
          <TextInput placeholder="First Name" style={[styles.input, styles.nameInput]} />
          <TextInput placeholder="Surname" style={[styles.input, styles.nameInput]} />
        </View>

        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} />
        <TextInput placeholder="Confirm Password" secureTextEntry style={styles.input} />

        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupButtonText}>SIGNUP</Text>
        </TouchableOpacity>

        <Text style={styles.loginPrompt}>Already Have an Account?</Text>
        <TouchableOpacity>
          <Text style={styles.loginLink}>Login</Text>
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
  },
  nameInput: {
    flex: 1,
    marginRight: 10,
  },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 5,
    marginBottom: 15,
  },
  signupButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 15,
    width: '100%',
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  loginPrompt: {
    fontSize: 14,
    color: '#333',
  },
  loginLink: {
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

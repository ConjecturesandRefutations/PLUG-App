import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.logo}>PLUG</Text>
      <Text style={styles.tagline}>Connect, communicate and share with friends and family</Text>

      <View style={styles.loginBox}>
        <Text style={styles.loginTitle}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="email"
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry
        />

        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgotten your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        <Text style={styles.signupPrompt}>Don't have an account?</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupLink}>Signup</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerLink}>Privacy Policy</Text>
        </TouchableOpacity>
        <Text style={styles.footerSeparator}>|</Text>
        <TouchableOpacity>
          <Text style={styles.footerLink}>Terms and Conditions</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    backgroundColor: '#f6f6f6',
  },
  logo: {
    fontSize: 40,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 10,
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
  footer: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerLink: {
    color: '#007bff',
    marginHorizontal: 5,
  },
  footerSeparator: {
    color: '#007bff',
  },
});

export default LoginScreen;

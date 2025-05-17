import Footer from '../components/Footer';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function SignupScreen({ navigation }) {
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

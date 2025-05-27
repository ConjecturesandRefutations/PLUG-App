import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate('Privacy')}>
        <Text style={styles.footerLink}>Privacy Policy</Text>
      </TouchableOpacity>
      <Text style={styles.footerSeparator}> | </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Terms')}>
        <Text style={styles.footerLink}>Terms and Conditions</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerLink: {
    fontSize: 12,
    color: '#007BFF',
    textAlign: 'center',
  },
  footerSeparator: {
    color: '#007bff',
  },
});

export default Footer;

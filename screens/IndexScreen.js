import React from 'react';
import Footer from '../components/Footer';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

export default function TermsAndConditions({ navigation }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text>
        {/* Your terms and conditions text goes here */}
      </Text>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F4F4',
    paddingHorizontal: 30,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

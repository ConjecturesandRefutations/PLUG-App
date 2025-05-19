import React, { useState } from 'react';
import Footer from '../components/Footer';
import { View, ScrollView, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function TermsAndConditions({ navigation }) {

  return (
    <ScrollView style={styles.container}
    contentContainerStyle={styles.contentContainer}>
      <Text>
      
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
    justifyContent: 'center',
    alignItems: 'center',
  },  
    contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

});
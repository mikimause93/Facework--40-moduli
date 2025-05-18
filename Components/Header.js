import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>FaceWork</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#003366',
    padding: 15,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

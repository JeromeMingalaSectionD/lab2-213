import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/Header';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Header title="About Screen" />
      <Text style={styles.text}>This is the About screen of your app.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 18, marginVertical: 10},
});

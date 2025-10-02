import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header({title}: {title: string}) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {padding: 16, backgroundColor: '#6200EE', width: '100%'},
  title: {color: 'white', fontSize: 20, textAlign: 'center'},
});

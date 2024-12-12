import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {API_BASE} from '@env';

export default function Enkv() {
  return (
    <View style={styles.container}>
      <Text>{API_BASE},,;l,</Text>

      <Text>{process.env.APP_ENV} eve</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

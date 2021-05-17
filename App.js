import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { ErrorComponent } from './src/error/ErrorComponent';

export default function App() {
  const ButtonError = () => {
    throw Error('error!');
  };

  return (
    <View style={styles.container}>
      <ErrorComponent>
        <ButtonError />
      </ErrorComponent>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

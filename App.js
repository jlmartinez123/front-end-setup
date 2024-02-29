import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const App = () => {
  const handlePress = () => {
    console.log('Button pressed!');
  }
  return (
    <View style={styles.container}>
      <Text>Test</Text>

      <Button title="Button" on Press={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
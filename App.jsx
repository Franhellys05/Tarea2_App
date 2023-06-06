import React from 'react';
import {View, StyleSheet} from 'react-native';
import MaxValueComponent from './components/MaxValueComponent';

const App = () => {
  return (
    <View style={styles.container}>
      <MaxValueComponent />
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

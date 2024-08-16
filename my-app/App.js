import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>Hello buddy</Text>
      </View>
      <Text style={styles.dummyText}> Another hello buddy</Text>
      <Button title="Press me " />
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
  dummyText: { margin: 16, borderWidth: 2, borderColor: 'blue', padding: 16 },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {

  const[age, setAge] = useState<string>("")
  
  const ageAsNumber: number = !isNaN(Number(age)) === true ? Number(age) : 220
  const lower: number = (220 - ageAsNumber) * 0.65
  const upper: number = (220 - ageAsNumber) * 0.85
  

  return (
    <View style={styles.container}>
      <Text style = {styles.heading}>Heart Rate Limits Calculator</Text>
      <Text>Enter your age:</Text>
      <TextInput style = {styles.box}
      placeholder='age'
      keyboardType='number-pad'
      value={age}
      onChangeText={setAge}
      />
      <Text>Lower limit: {lower.toFixed(2)} bpm</Text>
      <Text>Upper limit: {upper.toFixed(2)} bpm</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 16
  },
  heading: {
    fontSize:24,
    marginTop: 24,
    marginBottom: 16,
    fontWeight: '500'
    
  },
  box: {
    marginTop: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderRadius: 5,
    width: 100
  }
});

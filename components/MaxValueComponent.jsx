import React, {useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';

const MaxValueComponent = () => {
  const [numbers, setNumbers] = useState([]);
  const [maxValue, setMaxValue] = useState(null);

  const handleCalculateMaxValue = () => {
    if (numbers.length > 0) {
      const max = Math.max(...numbers);
      setMaxValue(max);
    }
  };

  return (
      <View>
      <TextInput
        placeholder="Ingrese números separados por coma"
        onChangeText={text => setNumbers(text.split(',').map(Number))}
        style={{marginBottom: 10}}
      />
      <Button title="Calcular" onPress={handleCalculateMaxValue} />
      {maxValue && <Text>El valor máximo es: {maxValue}</Text>}
    </View>
  );
};

export default MaxValueComponent;

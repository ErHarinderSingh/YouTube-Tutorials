import React, {useState} from 'react';
import {SafeAreaView, Button, Text} from 'react-native';
import appStyles from '../../styles';

const UseStateScreen = () => {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }
  function decrementCount() {
    setCount(count - 1);
  }

  return (
    <SafeAreaView style={appStyles.appContainer}>
      <Text style={appStyles.countLabel}>{count}</Text>
      <Button onPress={incrementCount} title="Increment Count" />
      <Button onPress={decrementCount} title="Decrement Count" />
    </SafeAreaView>
  );
};

export default UseStateScreen;

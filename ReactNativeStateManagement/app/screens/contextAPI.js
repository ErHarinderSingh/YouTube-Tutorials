import React, {useContext} from 'react';
import {SafeAreaView, Button, Text} from 'react-native';
import appStyles from '../../styles';
import {
  CounterContext,
  DecrementCount,
  IncrementCount,
} from '../providers/contextApiProvider';

const ContextApiScreen = () => {
  const [state, dispatch] = useContext(CounterContext);

  function incrementCount() {
    dispatch(IncrementCount());
  }

  function decrementCount() {
    dispatch(DecrementCount());
  }
  return (
    <SafeAreaView style={appStyles.appContainer}>
      <Text style={appStyles.countLabel}>{state.count}</Text>
      <Button onPress={incrementCount} title="Increment Count" />
      <Button onPress={decrementCount} title="Decrement Count" />
    </SafeAreaView>
  );
};

export default ContextApiScreen;

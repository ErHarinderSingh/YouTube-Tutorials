import React from 'react';
import {SafeAreaView, Button, Text} from 'react-native';
import appStyles from '../../styles';
import {useGlobalState} from '../providers/hookstateProvider';

const HookStateScreen = () => {
  const state = useGlobalState();

  function incrementCount() {
    state.increment();
  }
  function decrementCount() {
    state.decrement();
  }
  return (
    <SafeAreaView style={appStyles.appContainer}>
      <Text style={appStyles.countLabel}>{state.getCount()}</Text>
      <Button onPress={incrementCount} title="Increment Count" />
      <Button onPress={decrementCount} title="Decrement Count" />
    </SafeAreaView>
  );
};

export default HookStateScreen;

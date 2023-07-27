import {observer} from 'mobx-react';
import React from 'react';
import {SafeAreaView, Button, Text} from 'react-native';
import appStyles from '../../styles';
import counterStore from '../providers/mobXStore';

const MobXScreen = () => {
  function incrementCount() {
    counterStore.increment();
  }
  function decrementCount() {
    counterStore.decrement();
  }
  return (
    <SafeAreaView style={appStyles.appContainer}>
      <Text style={appStyles.countLabel}>{counterStore.count}</Text>
      <Button title="Increment Count" onPress={incrementCount} />
      <Button title="Decrement Count" onPress={decrementCount} />
    </SafeAreaView>
  );
};

export default observer(MobXScreen);

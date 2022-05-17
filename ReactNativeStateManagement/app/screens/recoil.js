import React from 'react';
import {SafeAreaView, Button, Text} from 'react-native';
import {useRecoilState} from 'recoil';
import appStyles from '../../styles';
import {Counter} from '../providers/recoilStore';
const RecoilJsScreen = () => {
  const [count, setCount] = useRecoilState(Counter);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <SafeAreaView style={appStyles.appContainer}>
      <Text style={appStyles.countLabel}>{count}</Text>
      <Button onPress={increment} title="Increment Count" />
      <Button onPress={decrement} title="Decrement Count" />
    </SafeAreaView>
  );
};

export default RecoilJsScreen;

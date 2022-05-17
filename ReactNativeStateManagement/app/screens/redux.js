import React from 'react';
import {SafeAreaView, Button, Text} from 'react-native';
import appStyles from '../../styles';
import {useDispatch, useSelector} from 'react-redux';
import {DecrementCount, IncrementCount} from '../providers/reduxProvider';
const ReduxScreen = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={appStyles.appContainer}>
      <Text style={appStyles.countLabel}>{counter.count}</Text>
      <Button
        onPress={() => dispatch(IncrementCount())}
        title="Increment Count"
      />
      <Button
        onPress={() => dispatch(DecrementCount())}
        title="Decrement Count"
      />
    </SafeAreaView>
  );
};

export default ReduxScreen;

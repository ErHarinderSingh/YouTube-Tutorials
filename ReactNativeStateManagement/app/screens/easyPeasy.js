import {useStoreActions, useStoreState} from 'easy-peasy';
import React from 'react';
import {SafeAreaView, Button, Text} from 'react-native';
import appStyles from '../../styles';

const EasyPeasyScreen = () => {
  const state = useStoreState(state => state);
  const counterActions = useStoreActions(actions => actions);

  return (
    <SafeAreaView style={appStyles.appContainer}>
      <Text style={appStyles.countLabel}>{state.count}</Text>
      <Button
        title="Increment Count"
        onPress={() => counterActions.increment()}
      />
      <Button
        title="Decrement Count"
        onPress={() => counterActions.decrement()}
      />
    </SafeAreaView>
  );
};

export default EasyPeasyScreen;

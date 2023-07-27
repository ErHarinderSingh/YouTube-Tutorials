import React, {Suspense, useReducer} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, StyleSheet, Button, Text, View} from 'react-native';
// Screens
import UseStateScreen from './screens/useState';
import ReduxScreen from './screens/redux';
import ContextApiScreen from './screens/contextAPI';
import HookStateScreen from './screens/hookstate';
import EasyPeasyScreen from './screens/easyPeasy';
import MobXScreen from './screens/mobX';
import RecoilJsScreen from './screens/recoil';

// State Providers
import Store from './providers/reduxProvider';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {
  CounterContext,
  initialState,
  counter,
} from './providers/contextApiProvider';
import {StoreProvider} from 'easy-peasy';
import easyPeasyStore from './providers/easyPeasyStore';
import {RecoilRoot} from 'recoil';

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
  function goTo(path) {
    navigation.navigate(path);
  }
  return (
    <SafeAreaView style={styles.appContainer}>
      <Button title="1) useState" onPress={() => goTo('UseState')} />
      <Button title="2) Redux" onPress={() => goTo('redux')} />
      <Button title="3) React Context API" onPress={() => goTo('contextAPI')} />
      <Button title="4) Hookstate" onPress={() => goTo('hookstate')} />
      <Button title="5) Easy-Peasy" onPress={() => goTo('easyPeasy')} />
      <Button title="6) MobX" onPress={() => goTo('mobX')} />
      <Button title="7) RecoilJS" onPress={() => goTo('recoilJS')} />
    </SafeAreaView>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="UseState" component={UseStateScreen} />
      <Stack.Screen name="redux" component={ReduxScreen} />
      <Stack.Screen name="contextAPI" component={ContextApiScreen} />
      <Stack.Screen name="hookstate" component={HookStateScreen} />
      <Stack.Screen name="easyPeasy" component={EasyPeasyScreen} />
      <Stack.Screen name="mobX" component={MobXScreen} />
      <Stack.Screen name="recoilJS" component={RecoilJsScreen} />
    </Stack.Navigator>
  );
};
const App = () => {
  const {reduxStore, persister} = Store();
  const [state, dispatch] = useReducer(counter, initialState);
  return (
    <RecoilRoot>
      {/* Easy Peasy Store Provider */}
      <StoreProvider store={easyPeasyStore}>
        {/* Context Api Provider */}
        <CounterContext.Provider value={[state, dispatch]}>
          {/* Persist Gate */}
          <PersistGate loading={null} persistor={persister}>
            {/* Redux Store Provider */}
            <Provider store={reduxStore}>
              <Suspense
                fallback={
                  <View>
                    <Text>Loading</Text>
                  </View>
                }>
                <NavigationContainer>
                  <AppStack />
                </NavigationContainer>
              </Suspense>
            </Provider>
          </PersistGate>
        </CounterContext.Provider>
      </StoreProvider>
    </RecoilRoot>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

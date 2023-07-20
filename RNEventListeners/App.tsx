/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/home';
import {EventRegister} from 'react-native-event-listeners';

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    const eventListener: any = EventRegister.addEventListener(
      'eventName',
      data => {
        console.log(data);
      },
    );
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

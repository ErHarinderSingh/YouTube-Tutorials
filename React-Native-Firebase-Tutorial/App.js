// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './screens/home';
import {AuthScreen} from './screens/auth';
import {RealtimeDBScreen} from './screens/realtimeDatabase';
import {CloudFirestoreScreen} from './screens/cloudFirestore';
import {CloudStorageScreen} from './screens/cloudStorage';
import {AdmobScreen} from './screens/admob';
import {FunctionsScreen} from './screens/functions';
import {AnalyticsScreen} from './screens/analytics';
import {analytics} from './Setup';
const Stack = createStackNavigator();

const App = () => {
  const routeNameRef = React.useRef();
  const navigationRef = React.useRef();
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
      }
      onStateChange={() => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          // The line below uses the expo-firebase-analytics tracker
          // https://docs.expo.io/versions/latest/sdk/firebase-analytics/
          // Change this line to use another Mobile analytics SDK

          analytics().setCurrentScreen(currentRouteName);
        }

        // Save the current route name for later comparision
        routeNameRef.current = currentRouteName;
      }}>
      <Stack.Navigator headerMode="none" initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="RealtimeDB" component={RealtimeDBScreen} />
        <Stack.Screen
          name="CloudFirestoreDB"
          component={CloudFirestoreScreen}
        />
        <Stack.Screen name="CloudStorage" component={CloudStorageScreen} />
        <Stack.Screen name="Admob" component={AdmobScreen} />
        <Stack.Screen name="Functions" component={FunctionsScreen} />
        <Stack.Screen name="Analytics" component={AnalyticsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

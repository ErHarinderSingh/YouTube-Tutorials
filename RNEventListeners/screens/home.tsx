/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {EventRegister} from 'react-native-event-listeners';
function HomeScreen() {
  const fireEvent = () => {
    const objectData = {name: 'Harinder Singh', education: 'computer science'};
    EventRegister.emit('eventName', objectData);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 20}}>Home Screen</Text>
      <Pressable onPress={fireEvent}>
        <Text>Click To Trigger Event</Text>
      </Pressable>
    </View>
  );
}

export default HomeScreen;

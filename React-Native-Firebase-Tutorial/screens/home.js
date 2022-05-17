import * as React from 'react';
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  ListItem,
  Text,
} from 'native-base';

export const HomeScreen = ({navigation}) => {
  return (
    <Container>
      <Header>
        <Body>
          <Title>React Native Firebase Tutorials</Title>
        </Body>
      </Header>
      <Content>
        <ListItem onPress={() => navigation.navigate('Auth')}>
          <Text>Authentication</Text>
        </ListItem>
        <ListItem onPress={() => navigation.navigate('RealtimeDB')}>
          <Text>Realtime Database</Text>
        </ListItem>
        <ListItem onPress={() => navigation.navigate('CloudFirestoreDB')}>
          <Text>Cloud Firestore</Text>
        </ListItem>
        <ListItem onPress={() => navigation.navigate('CloudStorage')}>
          <Text>Cloud Storage</Text>
        </ListItem>
        <ListItem onPress={() => navigation.navigate('Admob')}>
          <Text>Admob</Text>
        </ListItem>
        <ListItem>
          <Text>Push Notifications (OneSignal)</Text>
        </ListItem>
        <ListItem onPress={() => navigation.navigate('Functions')}>
          <Text>Cloud Functions</Text>
        </ListItem>
        <ListItem>
          <Text>Cloud Messaging</Text>
        </ListItem>
        <ListItem>
          <Text>Dynamic Links</Text>
        </ListItem>
        <ListItem>
          <Text>In-App Messaging</Text>
        </ListItem>
        <ListItem onPress={() => navigation.navigate('Analytics')}>
          <Text>Analytics</Text>
        </ListItem>
        <ListItem>
          <Text>Crashlytics</Text>
        </ListItem>
      </Content>
    </Container>
  );
};

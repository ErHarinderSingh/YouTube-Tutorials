import * as React from 'react';
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  Text,
  Left,
  Icon,
  Button,
  Right,
} from 'native-base';
import {firestore} from '../Setup';
export const CloudFirestoreScreen = ({navigation}) => {
  const usersCollectionRef = firestore().collection('Users');

  const adduser = () => {
    usersCollectionRef.add({
      Name: 'Harry',
      Location: new firestore.GeoPoint(53.483959, -2.244644),
      age: 28,
      dateAdded: firestore.FieldValue.serverTimestamp(),
    });
  };
  const deleteData = () => {
    usersCollectionRef
      .doc('12345')
      .delete()
      .then(() => {})
      .catch(() => {});
  };

  const fetchData = () => {
    usersCollectionRef.get().then((snapshot) => {
      snapshot.forEach((documentSnapshot) => {
        console.log(documentSnapshot.data());
      });
    });
  };
  React.useEffect(() => {
    usersCollectionRef.onSnapshot((documentSnapshot) => {
      console.log(documentSnapshot.size);
    });
  }, []);
  return (
    <Container>
      <Header>
        <Left style={{flex: 0.2}}>
          <Button transparent icon onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body style={{flex: 1, justifyContent: 'center'}}>
          <Title>Cloud Firestore Databse Tutorial</Title>
        </Body>
        <Right style={{flex: 0.2}} />
      </Header>
      <Content
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button rounded style={{marginBottom: 10}} onPress={adduser}>
          <Text>Save Data</Text>
        </Button>
        <Button rounded style={{marginBottom: 10}} onPress={deleteData}>
          <Text>Delete Data Based On Doc Id</Text>
        </Button>

        <Button rounded style={{marginBottom: 10}} onPress={fetchData}>
          <Text>Get/Fetch Data</Text>
        </Button>
      </Content>
    </Container>
  );
};

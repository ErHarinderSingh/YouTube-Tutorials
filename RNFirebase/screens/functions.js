import * as React from 'react';
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  Button,
  Icon,
  Right,
  Left,
} from 'native-base';
import {functions} from '../Setup';
export const FunctionsScreen = ({navigation}) => {
  React.useEffect(() => {
    functions()
      .httpsCallable('listProducts')()
      .then(response => {
        alert(JSON.stringify(response.data));
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
          <Title>Cloud Functions</Title>
        </Body>
        <Right style={{flex: 0.2}} />
      </Header>
      <Content />
    </Container>
  );
};

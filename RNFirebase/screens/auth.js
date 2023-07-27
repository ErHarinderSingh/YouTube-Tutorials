import * as React from 'react';
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  ListItem,
  Text,
  Left,
  Icon,
  Button,
  Right,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';
import {Auth} from '../Setup';
import {SignUpUser, SignInUser, SignOutUser} from '../apiService';
export const AuthScreen = ({navigation}) => {
  const [state, setState] = React.useState({
    emailAddress: '',
    password: '',
  });
  const [user, setUser] = React.useState();

  const signUp = () => {
    SignUpUser(state.emailAddress, state.password)
      .then((data) => {
        alert(data);
      })
      .catch((error) => {
        alert(error);
      });
  };
  const signIn = () => {
    SignInUser(state.emailAddress, state.password)
      .then((data) => {
        alert(data);
      })
      .catch((error) => {
        alert(error);
      });
  };
  const signOut = () => {
    SignOutUser()
      .then((data) => {
        alert(data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const onAuthStateChanged = (user) => {
    setUser(user);
  };
  React.useEffect(() => {
    const subscriber = Auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent icon onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Authentication</Title>
        </Body>
        <Right>
          {user && (
            <Button transparent icon onPress={signOut}>
              <Icon name="log-out" />
            </Button>
          )}
        </Right>
      </Header>
      <Content padder>
        {/* Sign Up Form */}
        <Form>
          <Item floatingLabel>
            <Label>Email Address</Label>
            <Input
              keyboardType="email-address"
              value={state.emailAddress}
              onChangeText={(text) => setState({...state, emailAddress: text})}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry
              value={state.password}
              onChangeText={(text) => setState({...state, password: text})}
            />
          </Item>
          <Button block onPress={signUp}>
            <Text>Sign Up</Text>
          </Button>
        </Form>

        {/* Sign In Form */}
        <Form>
          <Item floatingLabel>
            <Label>Email Address</Label>
            <Input
              keyboardType="email-address"
              value={state.emailAddress}
              onChangeText={(text) => setState({...state, emailAddress: text})}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry
              value={state.password}
              onChangeText={(text) => setState({...state, password: text})}
            />
          </Item>
          <Button block onPress={signIn}>
            <Text>Sign In</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

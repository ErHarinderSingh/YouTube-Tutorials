import * as React from 'react';
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  Icon,
  Left,
  Right,
  Button,
  Text,
} from 'native-base';
import {analytics} from '../Setup';
import crashlytics from '@react-native-firebase/crashlytics';
export const AnalyticsScreen = ({navigation}) => {
  const getUserDetails = () => {
    try {
      crashlytics().setUserId('userId');
      // If u have single value return from response
      crashlytics().setAttribute('userName', 'userName Value');

      // If u have multiple values returnfrom response
      crashlytics().setAttributes({
        role: 'admin',
        followers: '13',
        email: user.email,
        username: user.username,
      });
    } catch (err) {
      crashlytics().recordError(err);
    }
  };
  React.useEffect(() => {
    crashlytics().crash();
    crashlytics().log('Analytics Page Just Mounted');
    getUserDetails();
    return () => {
      crashlytics().log('Analytics Page Just Unmounted');
    };
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
          <Title>Firebase Analytics</Title>
        </Body>
        <Right style={{flex: 0.2}} />
      </Header>

      <Content padder>
        <Button
          onPress={() =>
            analytics().logEvent('cart', {
              id: 'shoes_372732173',
              item: 'Nivia Shoes - Sports',
              description: ['Sports', 'Cricket'],
              size: '9',
            })
          }>
          <Text>Add To Cart</Text>
        </Button>

        <Button
          style={{marginTop: 20}}
          onPress={() =>
            analytics().logJoinGroup({
              group_id: 'whatsapp_group_12121',
            })
          }>
          <Text>Join Group</Text>
        </Button>
      </Content>
    </Container>
  );
};

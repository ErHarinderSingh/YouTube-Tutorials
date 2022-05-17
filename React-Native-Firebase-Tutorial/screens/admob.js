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
  Footer,
} from 'native-base';
import {
  InterstitialAd,
  RewardedAd,
  BannerAd,
  TestIds,
  AdEventType,
  RewardedAdEventType,
  BannerAdSize,
} from '@react-native-firebase/admob';

export const AdmobScreen = ({navigation}) => {
  React.useEffect(() => {
    let rewardAd = RewardedAd.createForAdRequest(TestIds.REWARDED, {
      requestNonPersonalizedAdsOnly: true,
      keywords: ['fashion', 'clothing'],
    });
    let rewardAdListener = rewardAd.onAdEvent((type, error, reward) => {
      if (type === RewardedAdEventType.LOADED) {
        rewardAd.show();
      }
      if (type === RewardedAdEventType.EARNED_REWARD) {
        alert('Earned +', reward);
      }
    });
    rewardAd.load();

    return () => {
      rewardAdListener = null;
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
          <Title>Admob</Title>
        </Body>
        <Right style={{flex: 0.2}} />
      </Header>
      <Content />
      <Footer>
        <BannerAd size={BannerAdSize.SMART_BANNER} unitId={TestIds.BANNER} />
      </Footer>
    </Container>
  );
};

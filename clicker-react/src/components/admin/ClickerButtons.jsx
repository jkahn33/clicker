import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import {
  View,
  Container,
  Content,
  Button,
  Icon,
  Text,
  Grid,
  Col,
} from 'native-base';
import GlobalHeader from '../global/GlobalHeader';

export default function ClickerButtons(props) {
  const [fontLoading, setFontLoading] = useState(true);
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    async function loadFont() {
      await Expo.Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      });
      setFontLoading(false);
    }
    loadFont();
  }, []);

  function decreaseCount() {
    if (currentCount > 0) {
      setCurrentCount(currentCount - 1);
    }
  }

  function clear() {
    Alert.alert(
      'Confirm',
      'Are you sure you want to clear the current count?',
      [
        {
          text: 'Yes',
          onPress: () => setCurrentCount(0),
          style: 'cancel',
        },
        { text: 'No' },
      ],
      { cancelable: false }
    );
  }
  if (fontLoading) {
    return <View></View>;
  }
  console.log(props);
  return (
    <Container>
      <GlobalHeader />
      <Content contentContainerStyle={{ flex: 1 }} style={{ padding: 10 }}>
        <Grid style={{ alignItems: 'center' }}>
          <Col>
            <Button
              onPress={() => setCurrentCount(currentCount + 1)}
              transparent
              light
              style={{
                margin: 50,
                alignSelf: 'center',
              }}
            >
              <Icon
                style={{
                  fontSize: 100,
                }}
                name='arrow-up'
              />
            </Button>
            <Text
              style={{
                fontSize: 100,
                alignSelf: 'center',
              }}
            >
              {currentCount}
            </Text>
            <Button
              onPress={decreaseCount}
              transparent
              light
              style={{
                margin: 50,
                alignSelf: 'center',
              }}
            >
              <Icon
                style={{
                  fontSize: 100,
                }}
                name='arrow-down'
              />
            </Button>
          </Col>
        </Grid>
        <Button onPress={clear} danger rounded>
          <Text>Clear</Text>
        </Button>
      </Content>
    </Container>
  );
}

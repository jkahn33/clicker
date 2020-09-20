import React, { useState, useEffect } from 'react';
import { View, Header, Left, Right, Body, Title } from 'native-base';

export default function GlobalHeader() {
  const [fontLoading, setFontLoading] = useState(true);

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

  if (fontLoading) {
    return <View></View>;
  }

  return (
    <Header>
      <Left style={{ flex: 1 }} />
      <Body style={{ flex: 0.39 }}>
        <Title>Clicker</Title>
      </Body>
      <Right style={{ flex: 1 }} />
    </Header>
  );
}

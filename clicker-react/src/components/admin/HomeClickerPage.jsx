import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { View, Container, Text } from 'native-base';
import ClickerButtons from './ClickerButtons';
import { company } from '../../../mock-objects/company';

export default function HomeClickerPage(props) {
  const [fontLoading, setFontLoading] = useState(true);
  const [lineCurrentCount, setLineCurrentCount] = useState(0);
  const [storeCurrentCount, setStoreCurrentCount] = useState(0);

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

  function decreaseLineCount() {
    if (lineCurrentCount > 0) {
      setLineCurrentCount(lineCurrentCount - 1);
    }
  }

  function decreaseStoreCount() {
    if (storeCurrentCount > 0) {
      setStoreCurrentCount(storeCurrentCount - 1);
    }
  }

  function increaseStoreCurrentCount(newCount) {
    setStoreCurrentCount(newCount);
    if (lineCurrentCount > 0) {
      setLineCurrentCount(lineCurrentCount - 1);
    }
  }

  if (fontLoading) {
    return <View></View>;
  }

  return (
    <Container>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{company.name}</Text>
      </View>
      <View style={{ flex: 4, flexDirection: 'row' }}>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <ClickerButtons
            currentCount={lineCurrentCount}
            setCurrentCount={setLineCurrentCount}
            decreaseCount={decreaseLineCount}
            title={'Total People In Line'}
            company={props.company}
          />
        </View>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <ClickerButtons
            currentCount={storeCurrentCount}
            setCurrentCount={increaseStoreCurrentCount}
            decreaseCount={decreaseStoreCount}
            title={'Total People In Store'}
            company={props.company}
          />
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 50,
    marginBottom: 20,
  },
});

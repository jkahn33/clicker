import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { View, Container, Content, Button, Text } from 'native-base';

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
        { text: 'No' },
        {
          text: 'Yes',
          onPress: () => setCurrentCount(0),
          style: 'cancel',
        },
      ],
      { cancelable: true }
    );
  }
  if (fontLoading) {
    return <View></View>;
  }

  return (
    <Container>
      <View style={styles.title}>
        <Text style={{ fontSize: 25, textAlign: 'center' }}>{props.title}</Text>
      </View>
      <View style={{ flex: 7, alignSelf: 'center', flexDirection: 'column' }}>
        <Button
          onPress={() => setCurrentCount(currentCount + 1)}
          transparent
          light
          style={styles.arrowButton}
        >
          <Icon style={styles.buttonIcon} name='triangle-up' />
        </Button>
        <Text style={styles.numberIcon}>{currentCount}</Text>
        <Button
          onPress={decreaseCount}
          transparent
          light
          style={styles.arrowButton}
        >
          <Icon style={styles.buttonIcon} name='triangle-down' />
        </Button>
        {/* <Button onPress={clear} danger rounded>
          <Text>Clear</Text>
        </Button> */}
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    marginLeft: 15,
    marginBottom: 60,
    alignSelf: 'center',
  },
  arrowButton: {
    alignSelf: 'center',
  },
  buttonIcon: {
    flex: 1,
    fontSize: 200,
    alignSelf: 'center',
  },
  numberIcon: {
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 15,
    fontSize: 50,
    alignSelf: 'center',
  },
});

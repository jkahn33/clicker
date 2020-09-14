import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { View, Container, Content, Button, Text } from 'native-base';
import GlobalHeader from '../global/GlobalHeader';
import ClickerButtons from './ClickerButtons';

export default function HomeClickerPage(props) {
  const [lineCurrentCount, setLineCurrentCount] = useState(0);
  const [storeCurrentCount, setStoreCurrentCount] = useState(0);

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

  return (
    <Container>
      <GlobalHeader />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>Walmart Store #1204</Text>
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

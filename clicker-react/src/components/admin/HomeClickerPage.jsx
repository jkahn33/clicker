import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { View, Container, Content, Button, Text } from 'native-base';
import GlobalHeader from '../global/GlobalHeader';
import ClickerButtons from './ClickerButtons';

export default function HomeClickerPage(props) {
  return (
    <Container>
      <GlobalHeader />
      <View style={{ flex: 1 }}>
        <Text>Hello Test</Text>
      </View>
      <View style={{ flex: 4, flexDirection: 'row' }}>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <ClickerButtons
            title={'Total People In Line'}
            company={props.company}
          />
        </View>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <ClickerButtons
            title={'Total People In Store'}
            company={props.company}
          />
        </View>
      </View>
    </Container>
  );
}

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { company } from '../mock-objects/company';
import GlobalHeader from './components/global/GlobalHeader';
import BottomTabNav from './components/global/BottomTabNav';

export default function Clicker() {
  return (
    <NavigationContainer>
      <GlobalHeader />
      <BottomTabNav />
    </NavigationContainer>
  );
}

import React from 'react';
import { Header, Left, Right, Body, Title } from 'native-base';

export default function GlobalHeader() {
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

import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Body,
  Text,
  Grid,
  Col,
} from "native-base";

export default function ClickerButtons() {
  const [currentCount, setCurrentCount] = useState(0);

  function decreaseCount() {
    if (currentCount > 0) {
      setCurrentCount(currentCount - 1);
    }
  }

  return (
    <Container>
      <Header />
      <Content contentContainerStyle={{ flex: 1 }} style={{ padding: 10 }}>
        <Grid style={{ alignItems: "center" }}>
          <Col>
            <Button
              onPress={() => setCurrentCount(currentCount + 1)}
              transparent
              light
              style={{
                alignSelf: "center",
              }}
            >
              <Icon name='arrow-up' />
            </Button>
            <Text
              style={{
                alignSelf: "center",
              }}
            >
              {currentCount}
            </Text>
            <Button
              onPress={decreaseCount}
              transparent
              light
              style={{
                alignSelf: "center",
              }}
            >
              <Icon name='arrow-down' />
            </Button>
          </Col>
        </Grid>
      </Content>
    </Container>
  );
}

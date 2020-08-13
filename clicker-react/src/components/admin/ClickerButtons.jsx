import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  Content,
  Button,
  Icon,
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
                margin: 50,
                alignSelf: "center",
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
                margin: 50,
                alignSelf: "center",
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
      </Content>
    </Container>
  );
}

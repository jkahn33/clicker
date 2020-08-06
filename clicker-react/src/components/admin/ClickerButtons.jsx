import React from "react";
import { Container, Header, Content, Button, Icon, View } from "native-base";

export default function ClickerButtons() {
  return (
    <Container>
      <Header />
      <Content
        contentContainerStyle={{
          flexGrow: 0.25,
          flexDirection: "column",
          alignItems: "stretch",
          justifyContent: "space-around",
        }}
      >
        <Button
          transparent
          light
          style={{ width: 50, height: 50, backgroundColor: "powderblue" }}
        >
          <Icon name='arrow-up' />
        </Button>
        <Button
          transparent
          light
          style={{ width: 50, height: 50, backgroundColor: "skyblue" }}
        >
          <Icon name='arrow-down' />
        </Button>
      </Content>
    </Container>
  );
}

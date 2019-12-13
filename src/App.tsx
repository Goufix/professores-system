import React from "react";
import { Home } from "./components/Home";
import { NavigationBar } from "./components/NavigationBar";
import { Container } from "react-bootstrap";

export function App() {
  return (
    <>
      <Container>
        <NavigationBar />
        <Home />
      </Container>
    </>
  );
}

export default App;

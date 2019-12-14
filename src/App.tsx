import React from "react";
import { Home } from "./pages/Home";
import { NavigationBar } from "./components/NavigationBar";
import { Container } from "react-bootstrap";
import { Router } from "@reach/router";
import { GoalMaker } from "./pages/GoalMaker";

export function App() {
  return (
    <>
      <Container>
        <NavigationBar />
        <Router>
          <Home path="/" />
          <GoalMaker path="/goal-maker" />
        </Router>
      </Container>
    </>
  );
}

export default App;

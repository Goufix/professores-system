import React from "react";
import { Home } from "./pages/Home";
import { NavigationBar } from "./components/NavigationBar";
import { Container } from "react-bootstrap";
import { Router } from "@reach/router";
import { GoalMaker } from "./pages/GoalMaker";
import { SheetDataContextProvider } from "./context/SheetDataContext";

export function App() {
  return (
    <>
      <Container>
        <NavigationBar />
        <SheetDataContextProvider>
          <Router>
            <Home path="/" />
            <GoalMaker path="/goal-maker" />
          </Router>
        </SheetDataContextProvider>
      </Container>
    </>
  );
}

export default App;

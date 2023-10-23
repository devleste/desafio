import React from "react";
import styled from "styled-components";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Screen>
      <HomePage />
    </Screen>
  );
}

export default App;

const Screen = styled.div`
  font-family: "Roboto", "sans-serif";
  background-color: #069676;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

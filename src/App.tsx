import React from "react";
import "./App.css";
import { ProgectListScreen } from "screens/progect-list";
import { LoginScreen } from "screens/login";

function App() {
  return (
    <div className="App">
      <LoginScreen></LoginScreen>
      <ProgectListScreen></ProgectListScreen>
    </div>
  );
}

export default App;

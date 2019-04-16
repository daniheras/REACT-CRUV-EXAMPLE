import React, { Component } from "react";
import "./App.css";

// Presentational Components
import { Button } from "../views/Buttons";

class App extends Component {
  render() {
    return (
      <div style={{ padding: "1rem" }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="alert">Alert</Button>
      </div>
    );
  }
}

export default App;

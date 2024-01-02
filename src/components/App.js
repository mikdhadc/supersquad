import React, { Component } from "react";
import HeroList from "./heroList";
import CharacterList from "./characterList";
import "../styles/index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 style={{ color: "white" }}>SuperSquad</h2>
        <CharacterList />
        <HeroList />
      </div>
    );
  }
}

export default App;

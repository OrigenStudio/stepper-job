import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Stepper from "./components/Stepper";

const generateItems = itemsNumber => {
  const items = [];

  for (let i = 0; i < itemsNumber; i++){
    items.push({
      label: `Lorem ipsum ${i}`,
      onClick: () => {
        console.log("clicked");
      },
      completed: (i + 1) / itemsNumber > 0.5 ? true : false
    })
  }
  
  return items;
};

const generateStep = () => {
  return {
    title: "Lorem ipsum",
    items: generateItems(Math.floor((Math.random() * 5)+1))
  };
};

const generateSteps = stepsNumber => {
  const steps = [];
  for(let i = 0; i<stepsNumber; i++){
    steps.push(generateStep());
  }
  return steps;
};

const steps = generateSteps(5);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Stepper component</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Stepper steps={steps} />
      </div>
    );
  }
}

export default App;
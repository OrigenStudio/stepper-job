import React, { Component } from "react";
import logo from "./logo.svg";
import "./styles/styles.css";
import Stepper from "./components/Stepper";

const generateItems = (itemsNumber, completed) => {
  const items = [];
  let currentItemAssigned = false;
  for (let i = 0; i < itemsNumber; i++) {
    items.push({
      label: `Lorem ipsum ${i}`,
      onClick: () => {
        console.log("clicked");
      },
      completed: (i + 1) / itemsNumber < 0.5 || completed ? true : false,
      currentItem:
        (i + 1) / itemsNumber >= 0.5 && !completed && !currentItemAssigned
          ? true
          : false
    });
    if ((i + 1) / itemsNumber >= 0.5 && !completed) {
      currentItemAssigned = true;
    }
  }

  return items;
};

const generateStep = (completed, currentStep) => {
  return {
    title: "Lorem ipsum",
    items: generateItems(Math.floor(Math.random() * 5 + 1), completed),
    completed: completed,
    currentStep: currentStep
  };
};

const generateSteps = stepsNumber => {
  const steps = [];
  let currentStepAssigned = false;
  for (let i = 0; i < stepsNumber; i++) {
    steps.push(
      generateStep(
        (i + 1) / stepsNumber < 0.5 ? true : false,
        (i + 1) / stepsNumber > 0.5 && !currentStepAssigned
      )
    );
    if ((i + 1) / stepsNumber > 0.5) {
      currentStepAssigned = true;
    }
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
        <Stepper
          title={"Cycle 2"}
          description={"Designing your brand"}
          steps={steps}
        />
      </div>
    );
  }
}

export default App;

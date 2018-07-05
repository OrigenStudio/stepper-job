import React from "react";
import findIndex from "lodash/findIndex";

import Bubble from "./Bubble";
import CollapsibleBubble from "./CollapsibleBubble";

class Stepper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: props.defaultExpanded || false,
      openStep: findIndex(props.steps, "currentStep")
    };
  }

  handleStepClick = index => {
      // TODO do some validation
    this.setState({
      openStep: index
    });
  };

  render() {
    const { steps, title, description } = this.props;
    console.log(steps);
    return (
      <div className="stepperWrapper">
        <Bubble title="CYCLE 2" state="heading">
          <span className="description"> Designing you brand </span>
        </Bubble>
        {steps.map((step, index) => (
          <div key={step.title + index}>
            <CollapsibleBubble
              index={index}
              {...step}
              first={index===0}
              last={index + 1 === steps.length}
              expanded={index === this.state.openStep}
              onStepClick={this.handleStepClick}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Stepper;

import React from "react";
import findIndex from "lodash/findIndex";
import Dimensions from "react-dimensions";
import classNames from "classnames";

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
    const { steps, title, description, containerWidth } = this.props;
    // TODO remove comment
    console.log(steps);

    const verticalFormat = containerWidth <= 768;
    return (
      <div className="stepperWrapper">
        <div
          className={classNames("textSection", { textSectionVertical: verticalFormat })}
        >
          <span className="title">Current Training</span>
          <span className="subtitle">Cycle 2: Session 2: Sprint 3</span>
        </div>
        <div
          className={classNames({
            vertical: verticalFormat,
            horizontal: !verticalFormat
          })}
        >
          <Bubble title="CYCLE 2" state="heading">
            <span className="description"> Designing you brand </span>
          </Bubble>
          {steps.map((step, index) => (
            <CollapsibleBubble
              key={step.title + index}
              verticalFormat={verticalFormat}
              index={index}
              {...step}
              first={index === 0}
              last={index + 1 === steps.length}
              expanded={index === this.state.openStep}
              onStepClick={this.handleStepClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Dimensions()(Stepper);

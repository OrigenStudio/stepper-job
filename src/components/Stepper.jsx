import React from "react";
import findIndex from "lodash/findIndex";
import Dimensions from "react-dimensions";
import classNames from "classnames";

import Bubble from "./Bubble";
import BubbleContentList from "./BubbleContentList";
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

  toggleExpandClick = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  render() {
    const {
      steps,
      title,
      subtitle,
      heading,
      headingDescription,
      containerWidth
    } = this.props;
    // TODO remove comment
    console.log(steps);

    const currentStep = steps[findIndex(steps, "currentStep")];
    const verticalFormat = containerWidth <= 768;
    return (
      <div className="stepperWrapper">
        {this.state.expanded || !verticalFormat ? (
          <div>
            <div
              className={classNames("textSection", {
                textSectionVertical: verticalFormat
              })}
            >
              <span className="title">{title}</span>
              <span className="subtitle">{subtitle}</span>
            </div>
            <div
              className={classNames({
                vertical: verticalFormat,
                horizontal: !verticalFormat
              })}
            >
              <Bubble title={heading} state="heading">
                <span className="description"> {headingDescription} </span>
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
        ) : (
          <Bubble title={currentStep.title}>
            <BubbleContentList items={currentStep.items} />
          </Bubble>
        )}
        {verticalFormat ? (
          <div className="expandCollapseWrapper">
            <span onClick={this.toggleExpandClick}>
              {this.state.expanded ? "Collapse" : "Expand progress view"}
            </span>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Dimensions()(Stepper);

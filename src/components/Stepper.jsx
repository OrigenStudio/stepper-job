import React from "react";

import Bubble from "./Bubble";
import BubbleContentList from "./BubbleContentList";

class Stepper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: props.defaultExpanded || false
    };
  }
  render() {
    const { steps, title, description } = this.props;
    console.log(steps);
    return (
      <div className="stepperWrapper">
        <Bubble title="CYCLE 2" state="heading">
          <span className="description"> Designing you brand </span>
        </Bubble>
        {steps.map((step, index) => (
          <div key={step.title+index}>
            <Bubble
              title={`${index} - ${step.title}`}
              state={step.completed ? "completed" : "default"}
            >
              <BubbleContentList
                items={step.items}
                state={step.completed ? "completed" : "default"}
              />
            </Bubble>
          </div>
        ))}
      </div>
    );
  }
}

export default Stepper;

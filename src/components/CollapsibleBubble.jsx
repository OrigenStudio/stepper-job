import React from "react";
import classNames from "classnames";
import Bubble from "./Bubble";
import BubbleContentList from "./BubbleContentList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

class CollapsibleBubble extends React.Component {
  handleCircleClick = () => {
    if (this.props.completed || this.props.currentStep) {
      this.props.onStepClick(this.props.index);
    }
  };

  render() {
    const {
      expanded = false,
      index,
      title,
      items,
      completed,
      currentStep,
      last,
      first
    } = this.props;

    // Some complex classes are composed before render for better code reading

    const circleClass = classNames("circle", {
      ["circle-completed"]: completed,
      ["circle-current"]: currentStep,
      ["circle-disabled"]: !currentStep && !completed
    });

    const leftLineClass = classNames("line", {
      ["lineNoOpacity"]: !completed && !currentStep
    });
    const rightLineClass = classNames("line", {
      ["lineNoOpacity"]: !completed,
      ["noLine"]: last
    });

    return (
      <div
        className={classNames("collapsibleBubbleWrapper", {
          firstBubbleExpanded: first && expanded
        })}
      >
        <div
          className={classNames("lineWrapper", {
            firstBubbleExpandedLine: first && expanded
          })}
        >
          <div className={leftLineClass} />
          <div className={rightLineClass} />
        </div>
        {expanded ? (
          <div className={classNames({currentStepExpanded: currentStep && expanded})}>
            {currentStep ? <div className={circleClass}>{index}</div> : null}
            <Bubble
              title={currentStep ? title :`${index} - ${title}`}
              state={completed ? "completed" : "default"}
            >
              <BubbleContentList
                items={items}
                state={completed ? "completed" : "default"}
              />
            </Bubble>
          </div>
        ) : (
          <div
            className={classNames("circleWrapper", {
              currentStepNotExpandedCircle: currentStep
            })}
          >
            {currentStep ? (
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                size="lg"
                className="positionIcon"
              />
            ) : null}
            <div className={circleClass} onClick={this.handleCircleClick}>
              {index}
            </div>
            <div
              className={classNames("textWrapper", {
                currentStep: currentStep
              })}
            >
              {completed ? (
                <FontAwesomeIcon icon={faCheck} size="xs" className="icon" />
              ) : null}
              {title}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CollapsibleBubble;

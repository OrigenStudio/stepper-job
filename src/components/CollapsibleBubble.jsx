import React from "react";
import classNames from "classnames";
import Bubble from "./Bubble";
import BubbleContentList from "./BubbleContentList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faMapMarkerAlt,
  faRulerVertical
} from "@fortawesome/free-solid-svg-icons";

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
      first,
      verticalFormat
    } = this.props;

    // Some complex classes are composed before render for better code reading

    const circleClass = classNames("circle", {
      ["circle-completed"]: completed,
      ["circle-current"]: currentStep,
      ["circle-disabled"]: !currentStep && !completed
    });

    const leftLineClass = classNames("lineOpacity", {
      horizontalLine: !verticalFormat,
      verticalLine: verticalFormat,
      ["lineNoOpacity"]: !completed && !currentStep
    });
    const rightLineClass = classNames("lineOpacity", {
      horizontalLine: !verticalFormat,
      verticalLine: verticalFormat,
      ["lineNoOpacity"]: !completed,
      ["noLine"]: last
    });

    return (
      <div
        className={classNames("collapsibleBubbleWrapper", {
          collapsibleBubbleWrapperHorizontal: !verticalFormat && !expanded,
          collapsibleBubbleWrapperHorizontalExpanded: !verticalFormat && expanded && !first,
          firstBubbleExpanded: first && expanded && !verticalFormat,
          collapsibleBubbleWrapperVertical: verticalFormat,
          firstBubbleExpandedVertical: first && expanded && verticalFormat
        })}
      >
        <div
          className={classNames("lineWrapper", {
            horizontalLineWrapper: !verticalFormat,
            verticalLineWrapper: verticalFormat,
            firstBubbleExpandedLine: first && expanded
          })}
        >
          <div className={leftLineClass} />
          <div className={rightLineClass} />
        </div>
        {expanded ? (
          <div
            className={classNames({
              currentStepExpandedHorizontal: currentStep && expanded && !verticalFormat,
              currentStepExpandedVertical: currentStep && expanded && verticalFormat
            })}
          >
            {currentStep ? (
              <div className="circleWrapper" >
                <div className={classNames(circleClass, "circle")}>{index}</div>
              </div>
            ) : null}
            <Bubble
              title={currentStep ? title : `${index} - ${title}`}
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
              horizontalCircleWrapper: !verticalFormat,
              verticalCircleWrapper: verticalFormat,
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
            {completed && verticalFormat ? (
              <div className="iconWrapper">
                <FontAwesomeIcon icon={faCheck} size="xs" />
              </div>
            ) : null}
            <div className={circleClass} onClick={this.handleCircleClick}>
              {index}
            </div>
            <div
              className={classNames("textWrapper", {
                currentStep: currentStep,
                vertical: verticalFormat
              })}
            >
              <div>
                {completed && !verticalFormat ? (
                  <FontAwesomeIcon icon={faCheck} size="xs" className="icon" />
                ) : null}
                {title}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CollapsibleBubble;

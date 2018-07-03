import React from "react";
import classNames from "classnames";

class Bubble extends React.Component {
  render() {
    const { children, title, state = "default" } = this.props;

    const wrapperClass = classNames("bubbleWrapper", {
      defaultBubble: state === "default",
      headingBubble: state === "heading",
      completedBubble: state === "completed",
    });
    return (
      <div className={wrapperClass}>
        <div className="title">
          <span>{title}</span>
        </div>
        <div className="content">{children}</div>
      </div>
    );
  }
}

export default Bubble;

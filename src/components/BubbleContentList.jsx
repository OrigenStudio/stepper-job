import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faChevronRight,
  faCircle
} from "@fortawesome/free-solid-svg-icons";

const getItemClass = (state, item) => {
  return classNames({
    completedItem: state !== "completed" && item.completed,
    currentItem: state !== "completed" && item.currentItem,
    disabledItem: state !== "completed" && !item.currentItem && !item.completed
  });
};

const isItemDisabled = (state, item) => {
  return state !== "completed" && !item.currentItem && !item.completed;
};

class BubbleContentList extends React.Component {
  render() {
    const { items = [], state = "default" } = this.props;

    const wrapperClass = classNames("bubbleContentListWrapper", {
      defaultBubbleContentList: state === "default",
      completedBubbleContentList: state === "completed"
    });

    return (
      <div className={wrapperClass}>
        <ul>
          {items.map((item, index) => (
            <li
              className={getItemClass(state, item)}
              key={item.label + index}
              onClick={item.onClick}
            >
              <div className="icon">
                {isItemDisabled(state, item) ? null : (
                  <FontAwesomeIcon
                    icon={item.completed ? faCheck : faCircle}
                    size="xs"
                  />
                )}
              </div>
              <span>{item.label}</span>
              {isItemDisabled(state, item) ? null : (
                <div className="icon">
                  <FontAwesomeIcon icon={faChevronRight} size="xs" />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BubbleContentList;

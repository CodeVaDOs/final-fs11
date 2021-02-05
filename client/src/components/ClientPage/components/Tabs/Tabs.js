import React from "react";
import './tabs.css';

let hashKeys = {};
const Tabs = (props) => {
  const { activeKey, onSelect, children } = props;
  hashKeys[activeKey] = true;

  return (
    <div>
      <div className="tabs-container">
        {React.Children.map(children, (child) => (
          <div
            key={child.props.eventkey}
            className={`tab-element ${
              activeKey === child.props.eventKey && "active"
            }`}
            onClick={() => {
              onSelect(child.props.eventKey);
            }}
          >
            {child.props.title}
          </div>
        ))}
      </div>

      {React.Children.map(children, (child) => (
        <div
          key={child.props.eventKey}
          className={`tab-panel ${
            child.props.eventKey !== activeKey && "hidden"
          }`}
        >
          {Object.prototype.hasOwnProperty.call(
            hashKeys,
            child.props["eventKey"]
          ) && child}
        </div>
      ))}
    </div>
  );
};

export default Tabs;

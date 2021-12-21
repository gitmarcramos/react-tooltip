import React, { useState, useRef, useEffect } from "react";
import "./Tooltip.css";

export default function Tooltip(props) {
  //Make tooltip appear on hover OR focus
  const [status, setStatus] = useState(true);

  const handleEvents = () => {
    setStatus(!status);
  };

  // Set position of the tooltip
  const [position, setPosition] = useState(props.position);
  switch (position) {
    case "top":
      setPosition({ bottom: "calc(100% + 15px)" });
      break;
    case "bottom":
      setPosition({ top: "calc(100% + 15px)" });
      break;
    case "right":
      setPosition({ left: "50%", transform: "translateX(100%)" });
      break;
    case "left":
      setPosition({ right: "50%", transform: "translateX(-50%)" });
  }

  return (
    <div className="tooltip">
      {/* Render the element to use tooltip with */}
      {props.type === "input" ? (
        <div className="element" onFocus={handleEvents} onBlur={handleEvents}>
          {props.children}
        </div>
      ) : (
        <div
          className="element"
          onMouseEnter={handleEvents}
          onMouseLeave={handleEvents}
        >
          {props.children}
        </div>
      )}
      {/* Tooltip */}
      <div
        className={status ? "tooltip-main tooltip-hidden" : "tooltip-main"}
        style={position}
      >
        {props.content}
      </div>
    </div>
  );
}

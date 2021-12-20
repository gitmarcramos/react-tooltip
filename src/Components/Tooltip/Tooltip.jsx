import React, { useState } from "react";
import "./Tooltip.css";

export default function Tooltip(props) {
  // Tooltip state
  const [tooltip, setTooltip] = useState(props);

  // Set position of the tooltip
  const [position, setPosition] = useState(props.position);
  switch (position) {
    case "top":
      setPosition({ top: "-100%" });
      break;
    case "bottom":
      setPosition({ bottom: "-100%" });
      break;
    case "right":
      setPosition({ left: "50%", transform: "translateX(50%)" });
      break;
    case "left":
      setPosition({ right: "50%", transform: "translateX(-50%)" });
  }

  //Make tooltip appear on hover

  return (
    <div className="tooltip">
      {/* Render the element to use tooltip with */}
      <div className="element">{props.children}</div>

      {/* Tooltip */}
      <div className="tooltip-main" style={position}>
        {props.content}{" "}
      </div>
    </div>
  );
}

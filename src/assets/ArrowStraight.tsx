import React from "react";

const ArrowStraight = ({
  fillColor = "#ffffff",
  style,
}: {
  fillColor?: string;
  style?: React.CSSProperties; // Ensure that style is of type React.CSSProperties
}) => {
  return (
    <svg
      version="1.0"
      width="266.44986"
      height="554.03888"
      viewBox="0 0 266.44986 554.03888"
      id="svg2"
      style={style}
    >
      <defs id="defs4" />
      <g transform="translate(-337.2615,-28.44366)" id="layer1">
        <path
          d="M 520.183 592 L 413 592 C 413 592 411.5734 252.0806 411.5734 252.0806 L 337.2615 252.0806 L 466.3784 28.4437 L 595.4952 252.0806 L 520.183 252.0806 z "
          style={{
            opacity: 1,
            color: fillColor,
            fill: fillColor,
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            marker: "none",
            markerStart: "none",
            markerMid: "none",
            markerEnd: "none",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 1,
            visibility: "visible",
            display: "inline",
            overflow: "visible",
          }}
          id="path1937"
        />
      </g>
    </svg>
  );
};

export default ArrowStraight;

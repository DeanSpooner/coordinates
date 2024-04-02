import React from "react";

const ArrowTurn = ({
  fillColor = "#ffffff",
  style,
}: {
  fillColor?: string;
  style?: React.CSSProperties; // Ensure that style is of type React.CSSProperties
}) => {
  return (
    <svg
      version="1.0"
      width="466.44986"
      height="554.03888"
      viewBox="0 0 466.44986 554.03888"
      id="svg2"
      style={style}
    >
      <defs id="defs4" />
      <g transform="translate(-337.2615,-28.44366)" id="layer1">
        <path
          d="M 803.71138,582.48256 L 531.61564,582.48256 C 531.61564,582.48256 411.5734,576.76626 411.5734,468.15661 C 411.5734,359.54697 411.5734,252.08058 411.5734,252.08058 L 337.26153,252.08058 L 466.37837,28.443661 L 595.49521,252.08058 L 520.18304,252.08058 L 520.18304,443.0049 C 520.18304,443.0049 519.03978,471.58639 554.48082,471.58639 C 589.92187,471.58639 802.56812,471.58639 802.56812,471.58639 L 803.71138,582.48256 z "
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

export default ArrowTurn;

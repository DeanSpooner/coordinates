import React from "react";

const MusicSymbol = ({
  fillColor = "#ffffff",
  style,
}: {
  fillColor?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <svg viewBox="0 0 600 600" id="svg4110" version="1.1" style={style}>
      <defs id="defs4112" />
      <g id="layer1" transform="translate(0,-452.36218)">
        <g
          transform="matrix(1.0871732,0,0,1.0871732,-155.7732,195.33037)"
          style={{ display: "inline" }}
          id="g4087"
        >
          <path
            id="rect4002"
            d="m 301.42856,312.42213 372.68414,-76 0,103.92858 -372.68414,76 z"
            style={{
              fill: fillColor,
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          />
          <rect
            y="312.34177"
            x="301.42856"
            height="388.5"
            width="60"
            id="rect3964"
            style={{
              fill: fillColor,
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          />
          <path
            transform="matrix(0.77274066,-0.20705524,0.24886447,0.92877483,273.33148,240.33751)"
            d="m -40,470.36218 c 0,43.07821 -55.964406,78 -125,78 -69.03559,0 -125,-34.92179 -125,-78 0,-43.07821 55.96441,-78 125,-78 69.035594,0 125,34.92179 125,78 z"
            id="path4005"
            style={{
              fill: fillColor,
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
          />
          <rect
            y="248.87701"
            x="614.11267"
            height="388.5"
            width="60"
            id="rect3964-3"
            style={{
              fill: fillColor,
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              display: "inline",
            }}
          />
          <path
            transform="matrix(0.77274066,-0.20705524,0.24886447,0.92877483,586.01559,176.87275)"
            d="m -40,470.36218 c 0,43.07821 -55.964406,78 -125,78 -69.03559,0 -125,-34.92179 -125,-78 0,-43.07821 55.96441,-78 125,-78 69.035594,0 125,34.92179 125,78 z"
            id="path4005-7"
            style={{
              fill: fillColor,
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              display: "inline",
            }}
          />
        </g>
      </g>
    </svg>
  );
};

export default MusicSymbol;

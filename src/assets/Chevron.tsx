import React from "react";

const Chevron = ({
  fillColor = "#fccd40",
  style,
}: {
  fillColor?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <svg
      style={style}
      fill={fillColor}
      height="800px"
      width="800px"
      version="1.1"
      id="Capa_1"
      viewBox="0 0 490 490"
    >
      <g>
        <g>
          <polygon points="332.668,490 82.631,244.996 332.668,0 407.369,76.493 235.402,244.996 407.369,413.507 		" />
        </g>
      </g>
    </svg>
  );
};

export default Chevron;

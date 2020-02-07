import React from "react";
import { Line, Circle } from "react-konva";

type Props = {
  centerX: number;
  centerY: number;
  radius: number;
  angle: number;
  stroke: React.ComponentProps<typeof Circle>["stroke"];
};

const DrawingCircle: React.FC<Props> = props => {
  const circumferencePointX =
    props.centerX + props.radius * Math.cos(props.angle);
  const circumferencePointY =
    props.centerY + props.radius * Math.sin(props.angle);

  return (
    <>
      <Circle
        radius={props.radius}
        x={props.centerX}
        y={props.centerY}
        stroke={props.stroke}
      />
      <Line
        points={[
          props.centerX,
          props.centerY,
          circumferencePointX,
          circumferencePointY
        ]}
        stroke={props.stroke}
      />
    </>
  );
};

export default DrawingCircle;

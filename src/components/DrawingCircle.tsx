import React from "react";
import { Line, Circle, Text } from "react-konva";

type Props = {
  centerX: number;
  centerY: number;
  radius: number;
  angle: number;
  radiusLabel: string;
  color: React.ComponentProps<typeof Circle>["stroke"];
};

const DrawingCircle: React.FC<Props> = props => {
  const circumferencePointX =
    props.centerX + props.radius * Math.cos(props.angle);
  const circumferencePointY =
    props.centerY + props.radius * Math.sin(props.angle);

  const labelX = Math.floor((circumferencePointX + props.centerX) / 2);
  const labelY = Math.floor((circumferencePointY + props.centerY) / 2);

  return (
    <>
      <Circle
        radius={props.radius}
        x={props.centerX}
        y={props.centerY}
        stroke={props.color}
      />
      <Line
        points={[
          props.centerX,
          props.centerY,
          circumferencePointX,
          circumferencePointY
        ]}
        stroke={props.color}
      />
      <Text
        align="center"
        x={labelX}
        y={labelY + 10}
        text={props.radiusLabel}
        fill={props.color}
        fontStyle="bold"
      />
    </>
  );
};

export default DrawingCircle;

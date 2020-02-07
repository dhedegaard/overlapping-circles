import React from "react";
import { Line, Circle, Text } from "react-konva";

type Props = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
  label: string;
};

const DrawingDistance: React.FC<Props> = props => (
  <>
    <Circle x={props.x1} y={props.y1} fill={props.color} radius={3} />
    <Circle x={props.x2} y={props.y2} fill={props.color} radius={3} />
    <Line
      points={[props.x1, props.y1, props.x2, props.y2]}
      stroke={props.color}
    />
    <Text
      align="center"
      x={Math.floor((props.x1 + props.x2) / 2)}
      y={Math.floor((props.y1 + props.y2) / 2) + 10}
      text={props.label}
      fill={props.color}
      fontStyle="bold"
    />
  </>
);

export default DrawingDistance;

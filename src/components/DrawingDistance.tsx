import React from "react";
import { Line, Circle } from "react-konva";

type Props = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
};

const DrawingDistance: React.FC<Props> = props => (
  <>
    <Circle x={props.x1} y={props.y1} fill={props.color} radius={2} />
    <Circle x={props.x2} y={props.y2} fill={props.color} radius={2} />
    <Line
      points={[props.x1, props.y1, props.x2, props.y2]}
      stroke={props.color}
    />
  </>
);

export default DrawingDistance;

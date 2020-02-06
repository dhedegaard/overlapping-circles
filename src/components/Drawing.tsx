import React from "react";
import { Circle, Layer, Stage } from "react-konva";

const width = 600;
const height = 300;

type Props = {
  r1: number;
  r2: number;
  distance: number;
};

const Drawing: React.FC<Props> = props => {
  const minWidth = props.r1 + props.distance + props.r2;
  console.log("minWidth", minWidth);
  const minHeight = Math.max(props.r1 * 2, props.r2 * 2);
  console.log("minHeight", minHeight);
  const scaleWidth = width / (minWidth * 1.2);
  console.log("scaleWidth:", scaleWidth);
  const scaleHeight = height / (minHeight * 1.2);
  console.log("scaleHeight:", scaleHeight);
  const scale = Math.min(scaleWidth, scaleHeight);
  console.log("scale:", scale);

  const scaledDist = props.distance * scale;
  const r1x = width * 0.2 + props.r1 * scale; // TODO: calculate
  const r2x = width * 0.8 - props.r2 * scale; // TODO: calculate
  console.log("r1:", r1x, "r2:", r2x);

  return (
    <Stage width={width} height={height}>
      <Layer clearBeforeDraw>
        <Circle radius={props.r1 * scale} x={r1x} y={height / 2} fill="green" />
        <Circle radius={props.r2 * scale} x={r2x} y={height / 2} fill="red" />
      </Layer>
    </Stage>
  );
};

export default Drawing;

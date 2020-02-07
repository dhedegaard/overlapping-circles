import React from "react";
import { Circle, Layer, Stage, Line } from "react-konva";

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
  const r1x = width / 2 - scaledDist / 2;
  const r2x = width / 2 + scaledDist / 2;
  console.log("r1:", r1x, "r2:", r2x);

  return (
    <Stage width={width} height={height}>
      <Layer clearBeforeDraw>
        <Circle
          radius={props.r1 * scale}
          x={r1x}
          y={height / 2}
          stroke="green"
        />
        <Circle radius={props.r2 * scale} x={r2x} y={height / 2} stroke="red" />
      </Layer>
    </Stage>
  );
};

export default Drawing;

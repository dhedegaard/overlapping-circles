import React from "react";
import { Circle, Layer, Stage, Line } from "react-konva";
import DrawingCircle from "./DrawingCircle";

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

  return (
    <Stage width={width} height={height}>
      <Layer>
        <DrawingCircle
          centerX={r1x}
          centerY={height / 2}
          radius={props.r1 * scale}
          angle={60}
          stroke="green"
        />
        <DrawingCircle
          centerX={r2x}
          centerY={height / 2}
          radius={props.r2 * scale}
          angle={150}
          stroke="green"
        />
      </Layer>
    </Stage>
  );
};

export default Drawing;

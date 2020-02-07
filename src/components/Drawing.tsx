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

  const scaledR1 = props.r1 * scale;
  const scaledR1x = scaledR1 * Math.cos(60);
  const scaledR1y = scaledR1 * Math.sin(60);

  const scaledR2 = props.r2 * scale;
  const scaledR2x = scaledR2 * Math.cos(150);
  const scaledR2y = scaledR2 * Math.sin(150);
  console.log("SR1:", scaledR1);

  return (
    <Stage width={width} height={height}>
      <Layer clearBeforeDraw>
        <Line
          points={[r1x, height / 2, r1x + scaledR1x, height / 2 + scaledR1y]}
          stroke="green"
        />
        <Circle
          radius={props.r1 * scale}
          x={r1x}
          y={height / 2}
          stroke="green"
        />
        <Line
          points={[r2x, height / 2, r2x + scaledR2x, height / 2 + scaledR2y]}
          stroke="red"
        />
        <Circle radius={props.r2 * scale} x={r2x} y={height / 2} stroke="red" />
      </Layer>
    </Stage>
  );
};

export default Drawing;

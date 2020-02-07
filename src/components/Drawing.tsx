import React from "react";
import { Layer, Stage } from "react-konva";
import DrawingCircle from "./DrawingCircle";
import { colors } from "@material-ui/core";

const width = 600;
const height = 300;

type Props = {
  r1: number;
  r2: number;
  distance: number;
};

const Drawing: React.FC<Props> = props => {
  const minWidth = props.r1 + props.distance + props.r2;
  const minHeight = Math.max(props.r1 * 2, props.r2 * 2);
  const scaleWidth = width / (minWidth * 1.2);
  const scaleHeight = height / (minHeight * 1.2);
  const scale = Math.min(scaleWidth, scaleHeight);

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
          radiusLabel={`r1: ${props.r1.toLocaleString()}`}
          angle={60}
          color={colors.indigo[500]}
        />
        <DrawingCircle
          centerX={r2x}
          centerY={height / 2}
          radius={props.r2 * scale}
          radiusLabel={`r2: ${props.r2.toLocaleString()}`}
          angle={150}
          color={colors.teal[500]}
        />
      </Layer>
    </Stage>
  );
};

export default Drawing;

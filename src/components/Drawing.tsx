import React from "react";
import { Layer, Stage } from "react-konva";
import DrawingCircle from "./DrawingCircle";
import { colors, Typography } from "@material-ui/core";
import DrawingDistance from "./DrawingDistance";
import styled from "styled-components";

const width = 830;
const height = 500;

const Container = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  position: relative;
  height: ${height}px;
`;

const ScaleDisplay = styled(Typography)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  color: ${colors.grey[500]};
  font-size: 0.8em;
`;

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
  // The multiplier to apply to everything, to keep it in view.
  const scale = Math.min(scaleWidth, scaleHeight);

  // The distance between the centers, scaled.
  const scaledDist = props.distance * scale;

  // The delta X value to add to the centers, to make sure they're in view.
  const deltaX = ((props.r1 - props.r2) * scale) / 2;
  const r1x = width / 2 - scaledDist / 2 + deltaX;
  const r2x = width / 2 + scaledDist / 2 + deltaX;

  return (
    <Container>
      <ScaleDisplay>
        Scale: 1:{(Math.round(scale * 1000) / 1000).toLocaleString()}
      </ScaleDisplay>
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
          {scaledDist >= 1 && (
            <DrawingDistance
              x1={r1x}
              y1={height / 2}
              x2={r2x}
              y2={height / 2}
              color={colors.red[500]}
              label={`d: ${props.distance.toLocaleString()}`}
            />
          )}
        </Layer>
      </Stage>
    </Container>
  );
};

export default Drawing;

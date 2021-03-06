import React from "react";
import NumberInput from "../components/NumberInput";
import Layout from "../layouts";
import {
  Typography,
  Card,
  Container,
  CardContent,
  Divider,
  colors,
} from "@material-ui/core";
import Drawing from "../components/Drawing";
import styled from "styled-components";
import OverlappingResult from "../components/OverlappingResult";
import calcIntersectionArea from "../helpers/calc-intersection-area";

const StyledContainer = styled(Container)`
  margin-bottom: 24px;
`;

const ColorizedTypography = styled(({ overrideColor, ...rest }) => (
  <Typography {...rest} />
))<{ overrideColor: string }>`
  color: ${(p) => p.overrideColor};
`;

const max = Math.floor(Number.MAX_SAFE_INTEGER / 10);

const Index: React.FC = () => {
  const [r1, setR1] = React.useState(1);
  const [r2, setR2] = React.useState(2);
  const [distance, setDistance] = React.useState(2);

  const intersectionArea = React.useMemo(
    () => calcIntersectionArea(r1, r2, distance),
    [r1, r2, distance]
  );

  return (
    <Layout>
      <Typography gutterBottom variant="h3" align="center">
        Overlapping circles
      </Typography>
      <StyledContainer maxWidth="sm">
        <Card>
          <CardContent>
            <NumberInput
              id="r1"
              label={
                <>
                  Circle 1 radius (
                  <ColorizedTypography
                    display="inline"
                    overrideColor={colors.indigo[500]}
                  >
                    r<sub>1</sub>
                  </ColorizedTypography>
                  ):
                </>
              }
              value={r1}
              onChange={setR1}
              min={0.5}
              max={max}
            />
            <NumberInput
              id="r2"
              label={
                <>
                  Circle 2 radius (
                  <ColorizedTypography
                    display="inline"
                    overrideColor={colors.teal[500]}
                  >
                    r<sub>2</sub>
                  </ColorizedTypography>
                  ):
                </>
              }
              value={r2}
              onChange={setR2}
              min={0.5}
              max={max}
            />
            <NumberInput
              id="distance"
              label={
                <>
                  Distancen between the centers (
                  <ColorizedTypography
                    display="inline"
                    overrideColor={colors.red[500]}
                  >
                    d
                  </ColorizedTypography>
                  ):
                </>
              }
              value={distance}
              onChange={setDistance}
              min={0}
              max={max}
            />
          </CardContent>
          <Divider />
          <CardContent>
            <OverlappingResult>
              {Math.round(100 * intersectionArea) / 100}
            </OverlappingResult>
          </CardContent>
        </Card>
      </StyledContainer>
      <StyledContainer>
        <Card>
          <CardContent>
            <Drawing r1={r1} r2={r2} distance={distance} />
          </CardContent>
        </Card>
      </StyledContainer>
    </Layout>
  );
};

export default Index;

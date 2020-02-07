import React from "react";
import NumberInput from "../components/NumberInput";
import Layout from "../layouts";
import { Typography, Card, Container, CardContent } from "@material-ui/core";
import Drawing from "../components/Drawing";

const Index: React.FC = () => {
  const [r1, setR1] = React.useState(1);
  const [r2, setR2] = React.useState(2);
  const [distance, setDistance] = React.useState(2);

  const intersectionArea = React.useMemo(() => {
    if (distance >= r1 + r2) {
      return 0;
    }
    const a = r1 * r1;
    const b = r2 * r2;

    const x = (a - b + distance * distance) / (2 * distance);
    const z = x * x;
    const y = Math.sqrt(a - z);

    if (distance <= Math.abs(r2 - r1)) {
      return Math.PI * Math.min(a, b);
    }
    return (
      a * Math.asin(y / r1) +
      b * Math.asin(y / r2) -
      y * (x + Math.sqrt(z + b - a))
    );
  }, [r1, r2, distance]);

  return (
    <Layout>
      <Typography gutterBottom variant="h3" align="center">
        Overlapping circles
      </Typography>
      <Container maxWidth="sm">
        <Card>
          <CardContent>
            <NumberInput
              id="r1"
              label="Circle 1 radius (r1):"
              value={r1}
              onChange={setR1}
              min={0.5}
            />
            <NumberInput
              id="r2"
              label="Circle 2 radius (r2):"
              value={r2}
              onChange={setR2}
              min={0.5}
            />
            <NumberInput
              id="distance"
              label="Distancen between the centers (d):"
              value={distance}
              onChange={setDistance}
              min={0}
            />
            <hr />
            Overlapping area: <b>{Math.round(100 * intersectionArea) / 100}</b>
          </CardContent>
        </Card>
      </Container>
      <Container>
        <Card>
          <CardContent>
            <Drawing r1={r1} r2={r2} distance={distance} />
          </CardContent>
        </Card>
      </Container>
    </Layout>
  );
};

export default Index;

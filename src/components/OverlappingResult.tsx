import React from "react";
import styled from "styled-components";
import { Typography, colors } from "@material-ui/core";

const Container = styled.div`
  display: flex;

  & > * {
    &:first-child {
      text-align: right;
      padding-right: 2px;
    }
    flex-basis: 50%;
  }
`;

const OverlappingResult: React.FC = props => (
  <Container>
    <Typography color="textSecondary">Overlapping area:</Typography>
    <Typography>{props.children}</Typography>
  </Container>
);

export default OverlappingResult;

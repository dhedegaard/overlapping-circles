import { FormLabel, TextField } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;

  & > * {
    flex-basis: 50%;
  }
`;

const StyledFormLabel = styled(FormLabel)`
  text-align: right;
  padding-right: 5px;
`;

type Props = {
  id: string;
  label: string;
  value: number;
  min: number;
  onChange: (value: number) => void;
};

const NumberInput: React.FC<Props> = props => {
  const { onChange: realOnChange, min } = props;
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseFloat(event.currentTarget.value);
      if (isNaN(value)) {
        return;
      }
      realOnChange(Math.max(value, min));
    },
    [realOnChange, min]
  );

  return (
    <Container>
      <StyledFormLabel htmlFor={props.id}>{props.label}</StyledFormLabel>
      <TextField
        id={props.id}
        type="number"
        value={props.value}
        onChange={onChange}
        inputProps={{
          min,
          step: 0.5
        }}
      />
    </Container>
  );
};

export default NumberInput;

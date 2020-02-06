import React from "react";
import styled from "styled-components";
import {
  TextField,
  Typography,
  FormControlLabel,
  FormLabel
} from "@material-ui/core";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

type Props = {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
};

const NumberInput: React.FC<Props> = props => {
  const { onChange: realOnChange } = props;
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseFloat(event.currentTarget.value);
      if (isNaN(value)) {
        return;
      }
      realOnChange(value);
    },
    [realOnChange]
  );

  return (
    <Container>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <TextField
        id={props.id}
        type="number"
        value={props.value}
        onChange={onChange}
        inputProps={{
          min: 0,
          step: 0.5
        }}
      />
    </Container>
  );
};

export default NumberInput;

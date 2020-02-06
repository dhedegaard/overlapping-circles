import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

type Props = {
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
      <label>{props.label}</label>
      <input
        type="number"
        min={0}
        value={props.value}
        onChange={onChange}
        step={0.5}
      />
    </Container>
  );
};

export default NumberInput;

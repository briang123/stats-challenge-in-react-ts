import React from 'react';
import { useNumberInput } from '../../hooks';
import styled from 'styled-components';

// interface IProps {
//   testid: string;
//   tabIndex: number;
//   placeholder: string;
//   value: number;
//   autoFocus: boolean;
//   setValue: (value: string) => void;
//   onSubmit: (e: React.FormEvent<HTMLButtonElement | HTMLInputElement>) => void;
// }

export const NumberInput = (
  { testid, tabIndex = -1, placeholder = '', value, autoFocus = false, setValue, onSubmit },
  ref
) => {
  const [onKeyUp, onKeyPress, onChange] = useNumberInput({
    setValue,
    onSubmit,
  });

  if (!setValue || !onSubmit) {
    console.error('setValue and onSubmit functions are required');
    return;
  }

  if (!ref) {
    console.error('This NumberInput component expects a ref, which is missing');
    return;
  }

  return (
    <StyledInput
      ref={ref}
      data-testid={testid}
      tabIndex={tabIndex}
      type="number"
      placeholder={placeholder}
      onKeyUp={onKeyUp}
      onKeyPress={onKeyPress}
      onChange={onChange}
      value={value}
      autoFocus={autoFocus}
    />
  );
};

// export default NumberInput;
export default React.forwardRef(NumberInput);
// export default React.forwardRef<HTMLInputElement, IProps>(NumberInput);

const StyledInput = styled.input`
  height: 75px;
  width: 70%;
  border-radius: 20px 0px 0px 20px;
  border: none;
  font-size: calc(20px + 2vmin);
  text-align: center;
  :focus {
    outline: none;
  }
  ::-webkit-input-placeholder {
    color: var(--disabledbtn);
  }
  ::-moz-placeholder {
    color: var(--disabledbtn);
  }
  :-ms-input-placeholder {
    color: var(--disabledbtn);
  }
  :-moz-placeholder {
    color: var(--disabledbtn);
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`;

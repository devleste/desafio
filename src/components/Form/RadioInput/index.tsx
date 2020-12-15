import React, { useEffect, useRef, InputHTMLAttributes } from "react";
import { useField } from "@unform/core";

import { Container } from './styles';

interface Option {
  id: string,
  label: string
}

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
  options: Option[],
}

const RadioInput: React.FC<RadioProps> = ({ options, name }) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const { registerField, fieldName, error, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue(refs) {
        const checked = refs.find((ref: HTMLInputElement) => ref.checked);
        return checked ? checked.value : null;
      },
      setValue(refs, value) {
        const item = refs.find((ref: HTMLInputElement) => ref.value === value)
        if (item) item.checked = true;
      }
    });
  }, [registerField, fieldName]);
  
  return (
    <Container>
      {options.map((option: Option, index) => (
        <div key={option.id}>
          <input ref={(elRef: HTMLInputElement) => (inputRefs.current[index] = elRef)} type="radio" name={fieldName} value={option.id} id={option.id} defaultChecked={defaultValue === option.id} />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
      <div />
      <span>{error}</span>
    </Container>
  );
}

export default RadioInput;
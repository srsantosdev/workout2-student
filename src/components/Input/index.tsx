import { useField } from '@unform/core';
import React, {
  CSSProperties,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { IconBaseProps } from 'react-icons';
import { FiInfo } from 'react-icons/fi';

import { Container, Field } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  icon?: React.ComponentType<IconBaseProps>;
  containerStyle?: CSSProperties;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  icon: Icon,
  containerStyle,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container
      isFocused={isFocused}
      isFilled={isFilled}
      hasError={!!error}
      style={containerStyle}
    >
      <header>
        <label>{label}</label>

        {error && (
          <div>
            <FiInfo size={14} />
            <p>{error}</p>
          </div>
        )}
      </header>

      <Field isFocused={isFocused} isFilled={isFilled} hasError={!!error}>
        {Icon && <Icon size={20} />}
        <input
          ref={inputRef}
          defaultValue={defaultValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          type="text"
          name={name}
          {...rest}
        />
      </Field>
    </Container>
  );
};

export default Input;

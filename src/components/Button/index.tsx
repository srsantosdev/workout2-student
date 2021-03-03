import React, { ButtonHTMLAttributes } from 'react';
import { ImpulseSpinner } from 'react-spinners-kit';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary';
  loading?: boolean;
  size?: 'small' | 'normal';
}

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  loading,
  size = 'normal',
  ...rest
}) => {
  return (
    <Container color={color} size={size} {...rest}>
      {loading ? (
        <ImpulseSpinner frontColor="#f0f0ef" backColor="#ffffff" size={20} />
      ) : (
        children
      )}
    </Container>
  );
};

export default Button;

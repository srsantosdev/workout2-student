import { shade } from 'polished';
import styled, { css } from 'styled-components';

interface ButtonProps {
  color?: 'primary' | 'secondary';
  size?: 'small' | 'normal';
}

export const Container = styled.button<ButtonProps>`
  width: 100%;
  height: 5rem;

  border: 0;
  border-radius: 0.5rem;
  background: #FCA311;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#FCA311')};
  }

  font-weight: 600;
  font-size: 1.6rem;
  color: #ffff;

  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.size === 'small' &&
    css`
      width: max-content;

      font-size: 1.4rem;
      height: 4rem;
      font-weight: normal;
      padding: 0 1.6rem;
    `}

  ${props =>
    props.color === 'primary' &&
    css`
      background: #FCA311;

      &:hover {
        background: ${shade(0.2, '#FCA311')};
      }
    `}

  ${props =>
    props.color === 'secondary' &&
    css`
      background: #1E2022;

      &:hover {
        background: ${shade(0.2, '#1E2022')};
      }
    `}
`;

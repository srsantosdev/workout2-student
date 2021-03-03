import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused?: boolean;
  isFilled?: boolean;
  hasError?: boolean;
}

interface FieldProps {
  isFocused?: boolean;
  isFilled?: boolean;
  hasError?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${props =>
      props.hasError &&
      css`
        color: #FF5C47;
      `}

    > label {
      display: block;
      margin-bottom: 0.8rem;
      font-size: 1.6rem;

      ${props =>
        props.isFocused &&
        css`
          color: #FCA311;
          font-weight: 500;
        `}
    }

    > div {
      display: flex;
      align-items: center;

      > svg {
        margin-right: 0.4rem;
      }

      > p {
        font-size: 1rem;
        font-weight: 500;
      }
    }
  }

  & + div {
    margin-top: 1.6rem;
  }
`;

export const Field = styled.div<FieldProps>`
  background: none;
  border-radius: 0.5rem;
  background-color: #1E2022;
  border: 1px solid #1E2022;

  display: flex;
  padding: 1.6rem 1rem;

  transition: 0.2s;

  > svg {
    color: #424953;
    margin-right: 0.8rem;
  }

  > input {
    background: none;
    border: 0;
    flex: 1;

    &::placeholder {
      color: #424953;
    }
  }

  ${props =>
    props.hasError &&
    css`
      border-color: #FF5C47;
      color: #FF5C47;

      > svg {
        color: #FF5C47;
      }
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #FCA311;

      > svg {
        color: #FCA311;
      }

      > input {
        color: #FCA311;

        &::placeholder {
          font-weight: 400;
        }
      }
    `}
`;

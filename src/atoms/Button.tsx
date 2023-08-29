import { ButtonHTMLAttributes, DetailedHTMLProps, FunctionComponent } from 'react';

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button: FunctionComponent<ButtonProps> = (props) => {
  const { children, ...buttonProps } = props;

  return (
    <button { ...buttonProps }>{ children }</button>
  );
}
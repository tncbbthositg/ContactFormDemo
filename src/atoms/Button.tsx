import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes, DetailedHTMLProps, FunctionComponent } from 'react';
import { cn } from '../utilities';

const buttonStyleFactory = cva(
  "border px-8 py-2 rounded text-lg text-white flex items-center gap-x-2",
  {
    variants: {
      variant: {
        primary: 'border-primary bg-primary',
        secondary: 'border-secondary bg-secondary'
      },
      outline: {
        true: 'bg-transparent',
      },
      disabled: {
        true: 'opacity-50',
      }
    },
    compoundVariants: [
      { variant: 'primary', outline: true, className: 'text-primary' },
      { variant: 'secondary', outline: true, className: 'text-secondary' },
    ],
    defaultVariants: {
      variant: 'primary',
    }
  }
);

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &
  VariantProps<typeof buttonStyleFactory>;

export const Button: FunctionComponent<ButtonProps> = (props) => {
  const { children, className, outline, ...buttonProps } = props;

  const classNames = cn(
    buttonStyleFactory({ outline, ...buttonProps }),
    className,
  );

  return (
    <button { ...buttonProps } className={classNames}>{ children }</button>
  );
}
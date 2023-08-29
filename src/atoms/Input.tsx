import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { Control, FieldValues, Path } from 'react-hook-form';

type InputProps<T extends FieldValues> = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  control: Control<T>;
  name: Path<T>;
};

export function Input<T extends FieldValues = FieldValues>(props: InputProps<T>) {
  const { name, control, ...inputProps } = props;
  const { register } = control;

  return (
    <input className="outline-none w-full border-b border-primary text-xl py-2" {...inputProps} {...register(name)} />
  );
}
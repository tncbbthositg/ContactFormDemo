import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { Control, FieldError, FieldValues, Path, useFormState } from 'react-hook-form';
import { Warning } from '../atoms';

type InputProps<T extends FieldValues> = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  control: Control<T>;
  name: Path<T>;
};

export function Input<T extends FieldValues = FieldValues>(props: InputProps<T>) {
  const { name, control, ...inputProps } = props;
  const { register } = control;

  const { errors } = useFormState({ control, name });
  const error = errors[name] as FieldError | undefined;

  return (
    <div>
      <input className="outline-none w-full border-b border-primary text-xl py-2" {...inputProps} {...register(name)} />
      <Warning>{ error?.message }</Warning>
    </div>
  );
}
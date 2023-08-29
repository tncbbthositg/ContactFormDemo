import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { Control, FieldError, FieldValues, Path, useFormState } from 'react-hook-form';
import { Warning } from '../atoms';
import { cn } from '../utilities';

type InputProps<T extends FieldValues> = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  control: Control<T>;
  name: Path<T>;
};

export function Input<T extends FieldValues = FieldValues>(props: InputProps<T>) {
  const { name, control, className, ...inputProps } = props;
  const { register } = control;

  const { errors } = useFormState({ control, name });
  const error = errors[name] as FieldError | undefined;

  const classNames = cn(
    "outline-none w-full border-b border-primary text-xl py-2",
    { "border-2 rounded-md px-2 border-rose-600": !!error },
    className,
  );

  return (
    <div>
      <input className={classNames} {...inputProps} {...register(name)} />
      <Warning>{ error?.message }</Warning>
    </div>
  );
}
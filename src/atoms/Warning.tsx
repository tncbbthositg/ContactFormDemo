import { FunctionComponent, PropsWithChildren } from 'react';
import { IconWarning } from '.';

export const Warning: FunctionComponent<PropsWithChildren> = (props) => {
  const { children } = props;

  if (!children) { return; }

  return (
    <div className='text-rose-600 py-1 flex gap-x-2 items-center'>
      <IconWarning />
      { children }
    </div>
  );
}
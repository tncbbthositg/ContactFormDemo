import { FunctionComponent, PropsWithChildren } from 'react';

export const Warning: FunctionComponent<PropsWithChildren> = (props) => {
  const { children } = props;

  if (!children) { return; }

  return (
    <div className='text-rose-600 py-1'>{ children }</div>
  );
}
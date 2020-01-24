import * as React from 'react';

type Props = {
  active: boolean;
  children: React.ReactNode;
  onClick: React.MouseEventHandler;
};

const Link = ({ active, children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={active}
      style={{
        marginLeft: '4px',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};

export default Link;


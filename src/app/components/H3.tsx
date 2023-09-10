import React from 'react';

export default function H3({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <h2
      style={style}
      className={'text-3xl font-bold  leading-[4rem] ' + className}
    >
      {children}
    </h2>
  );
}

import React from 'react';

export default function H3({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={'text-3xl font-bold pb-8 pr-5 leading-[4rem] ' + className}>
      {children}
    </h2>
  );
}

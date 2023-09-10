import React from 'react';

export default function PrimaryButton({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <button className={'bg-[#EEECFB] rounded ' + className}>{children}</button>
  );
}

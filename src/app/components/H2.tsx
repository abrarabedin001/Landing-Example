import React from 'react';

export default function H2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="w-[653px] text-center text-black text-[39px] font-bold leading-[46.80px]">
      {children}
    </div>
  );
}

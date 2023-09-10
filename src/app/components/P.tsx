import React from 'react';

export default function P({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[613px] text-black text-lg font-bold leading-7">
      {children}
    </div>
  );
}

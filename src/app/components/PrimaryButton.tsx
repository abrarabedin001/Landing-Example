import React from 'react';

export default function PrimaryButton({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <button className=" h-12 px-4 bg-indigo-400 rounded justify-center items-center inline-flex">
      <div className="text-white text-lg font-bold leading-7">{children}</div>
    </button>
    // <button className={'bg-[#EEECFB] rounded ' + className}>{children}</button>
  );
}

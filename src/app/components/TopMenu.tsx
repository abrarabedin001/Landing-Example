import React from 'react';
import PrimaryButton from './PrimaryButton';
import Link from 'next/link';

export default function TopMenu() {
  return (
    <div className=" w-full flex justify-between px-5 mt-5">
      <img
        src="/CleverCore_MainLogo.png"
        alt="clever-core"
        className="max-w-[300px] max-h-[100px]"
      />
      <div className="space-x-5 bg-[#EEECFB] p-4 px-8 rounded mr-56">
        <Link href={'/'}>Features</Link>
        <Link href={'/'}>Solution</Link>
        <Link href={'/'}>Resourses</Link>
        <Link href={'/'}>Pricing</Link>
        <Link href={'/'}>Contacts</Link>
      </div>
      <PrimaryButton className="p-5">Login</PrimaryButton>
    </div>
  );
}

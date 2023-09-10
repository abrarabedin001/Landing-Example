import React from 'react';
import PrimaryButton from './PrimaryButton';
import Link from 'next/link';
import Image from 'next/image';

export default function TopMenu() {
  return (
    // <div className=" w-full flex justify-between px-5 mt-5">
    <div className=" w-full grid grid-cols-3 px-5 mt-5">
      <div>
        <Image
          src="/CleverCore_MainLogo.png"
          alt="clever-core"
          width={300}
          height={100}
          className="max-w-[300px] max-h-[100px]"
        />
      </div>

      <div className="w-[501px] h-12 px-6 bg-violet-100 rounded-[5px] justify-start items-center gap-6 inline-flex mr-16">
        <div className="w-[70px] justify-start items-center gap-2.5 flex">
          <Link
            href={'/'}
            className="text-black text-base font-medium leading-normal"
          >
            Features
          </Link>
        </div>
        <div className="w-[74px] justify-start items-center gap-2.5 flex">
          <Link
            href={'/'}
            className="text-black text-base font-medium leading-normal"
          >
            Solutions
          </Link>
        </div>
        <div className="w-[84px] justify-start items-center gap-2.5 flex">
          <Link
            href={'/'}
            className="text-black text-base font-medium leading-normal"
          >
            Resources
          </Link>
        </div>
        <div className="w-[55px] justify-start items-center gap-2.5 flex">
          <Link
            href={'/'}
            className="text-black text-base font-medium leading-normal"
          >
            Pricing
          </Link>
        </div>
        <div className="w-[74px] justify-start items-center gap-2.5 flex">
          <Link
            href={'/'}
            className="text-black text-base font-medium leading-normal"
          >
            Contacts
          </Link>
        </div>
      </div>
      <div className="flex justify-end">
        <PrimaryButton className="p-5 w-[100px]">Login</PrimaryButton>
      </div>
    </div>
  );
}

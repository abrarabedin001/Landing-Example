import React from 'react';
import PrimaryButton from './PrimaryButton';
import Link from 'next/link';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

export default function Foot() {
  return (
    <div className="w-full mt-36">
      <div className="flex flex-row p-10 justify-between w-full">
        <div className=" text-zinc-800 text-base font-medium leading-normal py-5">
          © 2020 Wirefigma
        </div>
        <div className="flex flex-col justify-center">
          <div className=" px-5 py-[13px]  rounded-[5px] justify-center items-start gap-5 inline-flex ">
            <Link
              href={'/'}
              className="text-black text-base font-medium leading-normal"
            >
              Privacy
            </Link>
            <Link
              href={'/'}
              className="text-black text-base font-medium leading-normal"
            >
              Terms of Service
            </Link>
            <Link
              href={'/'}
              className="text-black text-base font-medium leading-normal"
            >
              Faq
            </Link>
          </div>
          <div className=" pb-7 justify-start items-center gap-2.5 inline-flex py-5">
            <input
              type="email"
              placeholder=" Type your email"
              className=" text-zinc-800 text-lg font-medium leading-7 rounded border border-indigo-400 p-3"
            />

            <PrimaryButton className="text-white text-lg font-bold leading-7 p-3 bg-indigo-400">
              Sign Up
            </PrimaryButton>
          </div>
        </div>

        <div className=" h-7 justify-start items-center gap-5 inline-flex">
          <div className="flex-col justify-start items-center gap-2.5 inline-flex">
            <div className="text-indigo-400 text-2xl font-normal">
              <AiFillLinkedin />
            </div>
          </div>

          <div className="flex-col justify-start items-center gap-2.5 inline-flex">
            <div className="text-indigo-400 text-2xl font-normal">
              <BsFacebook />{' '}
            </div>
          </div>
          <div className="flex-col justify-start items-center gap-2.5 inline-flex">
            <div className="text-indigo-400 text-2xl font-normal">
              <AiFillInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

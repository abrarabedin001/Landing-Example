import React from 'react';
import H2 from './H2';
import H3 from './H3';
import Image from 'next/image';

export default function GettingStartedWithCleverCore() {
  return (
    <div className="mt-36">
      <H2 className="text-center max-w-[800px] ">
        Getting Started with CleverCore AI is Easy!
      </H2>

      <div className="w-full flex-col mt-36">
        <div className=" w-full flex flex-row">
          {' '}
          <div className="w-[50%] p-8 border-r-sky-700 ">
            <Image
              src={'/CTA/Object/Secure_login.png'}
              width={224}
              height={338}
              className="max-w-[224px] max-h-[338px] float-right"
              alt="Secure Login"
            ></Image>
          </div>
          <div className="w-[50%] text-left p-8 grid items-center  ">
            <div>
              <p className="font-bold">Step One</p>
              <H3 className="p-0 ">Sign Up</H3>
              <p>Create Your Account In Minutes</p>
            </div>
          </div>
        </div>
        <div className=" w-full flex flex-row">
          <div className="w-[50%] text-right p-8 grid items-center justify-center  ">
            <div>
              <p className="font-bold">Step Two</p>
              <H3 className="p-0 ">Import Data</H3>
              <p>Sync your existing CRM or start fresh</p>
            </div>
          </div>
          <div className="w-[50%] p-8">
            <Image
              src={'/CTA/Object/Other 09.png'}
              width={224}
              height={338}
              className="max-w-[224px] max-h-[338px] float-left"
              alt="Import Data"
            ></Image>
          </div>
        </div>
        <div className=" w-full flex flex-row">
          {' '}
          <div className="w-[50%] p-8">
            <Image
              src={'/CTA/Object/Make_call.png'}
              width={224}
              height={338}
              className="max-w-[224px] max-h-[338px] float-right"
              alt="Make Calls"
            ></Image>
          </div>
          <div className="w-[50%] text-left p-8 grid items-center  ">
            <div>
              <p className="font-bold">Step Three</p>
              <H3 className="p-0 ">Make Calls</H3>
              <p>Use CleverCore AI&apos; interface to manage your calls</p>
            </div>
          </div>
        </div>
        <div className=" w-full flex flex-row">
          <div className="w-[50%] text-right p-8 grid items-center justify-center  ">
            <div>
              <p className="font-bold">Step Four</p>
              <H3 className="p-0 ">Analyze & Act</H3>
              <p>Leverage AI insights to improve your sales</p>
            </div>
          </div>
          <div className="w-[50%] p-8">
            <Image
              src={'/CTA/Object/Other 11.png'}
              width={224}
              height={338}
              className="max-w-[224px] max-h-[338px] float-left"
              alt="Analyze & Act"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

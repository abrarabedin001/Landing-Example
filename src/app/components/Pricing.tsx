import React from 'react';
import H2 from './H2';

export default function Pricing() {
  return (
    <div className="mt-[50px] mt-36">
      <H2>Affordable Packages for Every Size of Team</H2>
      <div className="flex flex-row justify-center space-x-10  mt-36">
        <div className="w-80 h-[472px] relative bg-gradient-to-b from-red-400 to-red-100 rounded-[10px] shadow">
          <div className="h-[145px] left-[59.61px] top-[40px] absolute flex-col justify-start items-start gap-[30px] inline-flex">
            <div className="self-stretch h-[145px] flex-col justify-start items-start gap-[60px] flex">
              <div className="self-stretch text-black text-sm font-bold leading-[21px]">
                Individual Plan
              </div>
              <div className="self-stretch text-black text-[53px] font-bold leading-[63.60px]">
                $60
              </div>
            </div>
          </div>
          <div className="w-[200px] h-[50px] px-4 left-[60px] top-[362px] absolute bg-indigo-400 rounded justify-center items-center inline-flex">
            <div className="text-white text-lg font-bold leading-7">
              Buy Now
            </div>
          </div>
          <div className="left-[60px] top-[210px] absolute flex-col justify-start items-start gap-1.5 inline-flex">
            <div className="h-6 justify-start items-center gap-2.5 inline-flex">
              <div className="text-black text-base font-medium leading-normal">
                Personal plan
              </div>
            </div>
            <div className="h-6 justify-start items-center gap-2.5 inline-flex">
              <div className="text-black text-base font-medium leading-normal">
                Esse labore id
              </div>
            </div>
            <div className="h-6 justify-start items-center gap-2.5 inline-flex">
              <div className="text-black text-base font-medium leading-normal">
                Veniam ut
              </div>
            </div>
          </div>
        </div>
        <div className="w-80 h-[472px] relative bg-gradient-to-b from-indigo-500 to-indigo-200 rounded-[10px] shadow">
          <div className="h-[145px] left-[59.61px] top-[40px] absolute flex-col justify-start items-start gap-[30px] inline-flex">
            <div className="self-stretch h-[145px] flex-col justify-start items-start gap-[60px] flex">
              <div className="self-stretch text-black text-sm font-bold leading-[21px]">
                Team Plan
              </div>
              <div className="self-stretch text-black text-[53px] font-bold leading-[63.60px]">
                $60
              </div>
            </div>
          </div>
          <div className="w-[200px] h-[50px] px-4 left-[60px] top-[362px] absolute bg-indigo-400 rounded justify-center items-center inline-flex">
            <div className="text-white text-lg font-bold leading-7">
              Buy Now
            </div>
          </div>
          <div className="left-[60px] top-[210px] absolute flex-col justify-start items-start gap-1.5 inline-flex">
            <div className="h-6 justify-start items-center gap-2.5 inline-flex">
              <div className="text-black text-base font-medium leading-normal">
                Personal plan
              </div>
            </div>
            <div className="h-6 justify-start items-center gap-2.5 inline-flex">
              <div className="text-black text-base font-medium leading-normal">
                Esse labore id
              </div>
            </div>
            <div className="h-6 justify-start items-center gap-2.5 inline-flex">
              <div className="text-black text-base font-medium leading-normal">
                Veniam ut
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

import React from 'react';
import PrimaryButton from './PrimaryButton';
import H1 from './H1';

export default function HeroSection() {
  return (
    <div className="flex my-5 pt-9">
      <div className="w-[60%] ">
        <div className="space-y-5 p-[5rem]">
          <H1>
            Automate, Analyze, and Amplify your Communication Process with
            CleverCore AI
          </H1>
          <h3 className="text-2xl font-bold pb-8 pr-5 ">
            Clever Core extracts essential notes from calls , identifies key
            discussion points, and suggests actionable steps derived from the
            call&apos;s content.
          </h3>
          <div className="space-x-5">
            <PrimaryButton className="p-5">Sign In</PrimaryButton>
            <PrimaryButton className="p-5">Register</PrimaryButton>
          </div>
        </div>
      </div>
      <div className="w-[40%] bg-slate-300"></div>
    </div>
  );
}

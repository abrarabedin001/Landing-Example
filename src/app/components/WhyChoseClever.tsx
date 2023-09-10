import React from 'react';
import H1 from './H1';
import H3 from './H3';
import Image from 'next/image';

export default function WhyChoseClever() {
  return (
    <div className="p-8 text-center">
      <H1>Why Choose CleverCore AI?</H1>
      <div className="w-full grid grid-cols-2">
        <div>
          <div className=" h-[300px] w-[500px] grid gird-cols-1 place-items-start p-5 bg-gradient-to-br from-[#FFFFFF]/40 to-[#7AB2AD]/40">
            <Image
              src="/Features/Object/call-management.png"
              alt="call-management"
              width={80}
              height={80}
              className="w-[80px] h-[80px] mt-5"
            />
            <div className="text-left">
              <H3 className="leading-[1rem]">Call Management</H3>
              <p>Make and Receive Calls Directly From the App</p>
            </div>
          </div>
          <div className=" h-[300px] w-[500px] grid gird-cols-1 place-items-start p-5  bg-gradient-to-tr from-[#FFFFFF]/40 to-[#252364]/40">
            <Image
              src="/Features/Object/voice-to-text.png"
              alt="Voice-to-Text Transcription"
              width={80}
              height={80}
              className="w-[80px] h-[80px] mt-5"
            />
            <div className="text-left">
              <H3 className="leading-[1rem]">Voice-to-Text Transcription</H3>
              <p>Never Miss a Detail</p>
            </div>
          </div>
        </div>
        <div className="pt-9">
          <div className=" h-[300px] w-[500px] grid gird-cols-1 place-items-start p-5  bg-gradient-to-bl from-[#FFFFFF]/40 to-[#E498A3]/40">
            <Image
              src="/Features/Object/crm-integration.png"
              alt="CRM Integration"
              width={80}
              height={80}
              className="w-[80px] h-[80px] mt-5"
            />
            <div className="text-left">
              <H3 className="leading-[1rem]">CRM Integration</H3>
              <p>AI-Powered Data for Every Customer Interaction</p>
            </div>
          </div>

          <div className=" h-[300px] w-[500px] grid gird-cols-1 place-items-start p-5  bg-gradient-to-tl from-[#FFFFFF]/40 to-[#A5A3DD]/40">
            <Image
              src="/Features/Object/actionable.png"
              alt="Actionable Insights and Summaries"
              width={80}
              height={80}
              className="w-[80px] h-[80px] mt-5"
            />
            <div className="text-left">
              <H3 className="leading-[1.8rem]">
                Actionable Insights and Summaries
              </H3>
              <p>AI-Powered Data for Every Customer Interaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

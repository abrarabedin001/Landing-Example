import React from 'react';
import H1 from './H1';
import H3 from './H3';
import Image from 'next/image';
import P from './P';

export default function WhyChoseClever() {
  return (
    <div className="p-8 text-center mt-36">
      <H1>Why Choose CleverCore AI?</H1>
      <div className="w-full grid grid-cols-2 auto-cols-auto mt-20">
        <div>
          <div className=" max-h-[300px] max-w-[500px] grid gird-cols-1  place-items-start p-5  bg-gradient-to-br from-[#FFFFFF]/40 to-[#7AB2AD]/40">
            <Image
              src="/Features/Object/call-management.png"
              alt="call-management"
              width={80}
              height={80}
              className="w-[80px] h-[80px] my-5"
            />
            <div className="text-left pb-5 ">
              <H3 className="leading-[1rem] pb-8 pr-5">Call Management</H3>
              <P>Make and Receive Calls Directly From the App</P>
            </div>
          </div>
          <div className=" max-h-[300px] max-w-[500px] grid gird-cols-1 place-items-start p-5   bg-gradient-to-tr from-[#FFFFFF]/40 to-[#252364]/40">
            <Image
              src="/Features/Object/voice-to-text.png"
              alt="Voice-to-Text Transcription"
              width={80}
              height={80}
              className="w-[80px] h-[80px] my-5"
            />
            <div className="text-left pb-5 w-[300px]">
              <H3 style={{ lineHeight: '2rem' }} className=" pb-8 pr-5">
                Voice-to-Text Transcription
              </H3>
              <P>Never Miss a Detail</P>
            </div>
          </div>
        </div>
        <div className="pt-9">
          <div className=" max-h-[300px] max-w-[500px] grid gird-cols-1 place-items-start p-5   bg-gradient-to-bl from-[#FFFFFF]/40 to-[#E498A3]/40">
            <Image
              src="/Features/Object/crm-integration.png"
              alt="CRM Integration"
              width={80}
              height={80}
              className="w-[80px] h-[80px] my-5"
            />
            <div className="text-left pb-5 w-[400px]">
              <H3 style={{ lineHeight: '2rem' }} className=" pb-8 pr-5">
                Actionable Insights and Summaries
              </H3>
              <P>AI-Powered Data for Every Customer Interaction</P>
            </div>
          </div>

          <div className=" max-h-[300px] max-w-[500px] grid gird-cols-1 place-items-start p-5   bg-gradient-to-tl from-[#FFFFFF]/40 to-[#A5A3DD]/40">
            <Image
              src="/Features/Object/actionable.png"
              alt="Actionable Insights and Summaries"
              width={80}
              height={80}
              className="w-[80px] h-[80px] my-5"
            />
            <div className="text-left pb-5">
              <H3 className="leading-[1.8rem] pb-5 pr-5">CRM Integration</H3>
              <P>Seamless Data Synchronization</P>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

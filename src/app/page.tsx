import TopMenu from './components/TopMenu';
import HeroSection from './components/HeroSection';
import H1 from './components/H1';
import Image from 'next/image';
import H3 from './components/H3';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  m-auto max-w-[1450px]">
      <TopMenu />
      <HeroSection />
      <div className="pt-8 text-center">
        <H1>Why Choose CleverCore AI?</H1>
        <div className="w-full grid grid-cols-2">
          <div>
            <div className="bg-slate-300 h-[300px] w-[500px] grid gird-cols-1 place-items-start p-5">
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
            <div className="bg-slate-300 h-[300px] w-[500px] grid gird-cols-1 place-items-start p-5">
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
            <div className="bg-slate-300 h-[300px] w-[500px] grid gird-cols-1 place-items-start p-5">
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

            <div className="bg-slate-300 h-[300px] w-[500px] grid gird-cols-1 place-items-start p-5">
              <Image
                src="/Features/Object/actionable.png"
                alt="Actionable Insights and Summaries"
                width={80}
                height={80}
                className="w-[80px] h-[80px] mt-5"
              />
              <div className="text-left">
                <H3 className="leading-[2rem]">
                  Actionable Insights and Summaries
                </H3>
                <p>AI-Powered Data for Every Customer Interaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

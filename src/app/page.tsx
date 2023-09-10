import TopMenu from './components/TopMenu';
import HeroSection from './components/HeroSection';
import H1 from './components/H1';
import Image from 'next/image';
import H3 from './components/H3';
import WhyChoseClever from './components/WhyChoseClever';
import H2 from './components/H2';
import GettingStartedWithCleverCore from './components/GettingStartedWithCleverCore';
import Pricing from './components/Pricing';
import Testimonial from './components/Testimonial';
import PrimaryButton from './components/PrimaryButton';
import { Input } from 'postcss';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  m-auto max-w-[1450px]">
      <TopMenu />
      <HeroSection />
      <WhyChoseClever />
      <GettingStartedWithCleverCore />
      <Pricing />
      <Testimonial />
      <div className="w-full">
        <div className="flex flex-row p-10 justify-between w-full">
          <div className="w-[149px] h-[15.53px] text-zinc-800 text-base font-medium leading-normal">
            © 2020 Wirefigma
          </div>
          <div className="flex flex-col justify-center">
            <div className=" px-5 py-[13px] bg-white rounded-[5px] justify-center items-start gap-5 inline-flex">
              <div className="text-black text-base font-medium leading-normal">
                Privacy
              </div>
              <div className="text-black text-base font-medium leading-normal">
                Terms of Service
              </div>
              <div className="text-black text-base font-medium leading-normal">
                Faq
              </div>
            </div>
            <div className=" pb-7 justify-start items-center gap-2.5 inline-flex">
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
              <div className="text-indigo-400 text-2xl font-normal"></div>
            </div>
            <div className="flex-col justify-start items-center gap-2.5 inline-flex">
              <div className="text-indigo-400 text-2xl font-normal">
                twitter
              </div>
            </div>
            <div className="flex-col justify-start items-center gap-2.5 inline-flex">
              <div className="text-indigo-400 text-2xl font-normal">
                facebook
              </div>
            </div>
            <div className="flex-col justify-start items-center gap-2.5 inline-flex">
              <div className="text-indigo-400 text-2xl font-normal"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

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
import Foot from './components/Foot';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  m-auto max-w-[1450px]">
      <TopMenu />
      <HeroSection />
      <WhyChoseClever />
      <GettingStartedWithCleverCore />
      <Pricing />
      <Testimonial />
      <Foot />
    </main>
  );
}

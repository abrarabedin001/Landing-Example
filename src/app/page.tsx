import TopMenu from './components/TopMenu';
import HeroSection from './components/HeroSection';
import H1 from './components/H1';
import Image from 'next/image';
import H3 from './components/H3';
import WhyChoseClever from './components/WhyChoseClever';
import H2 from './components/H2';
import GettingStartedWithCleverCore from './components/GettingStartedWithCleverCore';
import Pricing from './components/Pricing';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  m-auto max-w-[1450px]">
      <TopMenu />
      <HeroSection />
      <WhyChoseClever />
      <GettingStartedWithCleverCore />
      <Pricing />
      <div className="text-center flex flex-col justify-center mt-36">
        <H2 className=" w-full text-center mt-36">
          What Our Customers Are Saying
        </H2>
        <div className="text-left grid-cols-3 gap-5 mt-36 space-x-10">
          <div className="w-[410px] h-[566px] px-[72px] py-[74px] bg-gradient-to-b from-violet-200 to-violet-200/40 rounded-[10px] shadow flex-col justify-start items-center gap-[29px] inline-flex">
            <div className="w-[114px] h-[114px] bg-violet-100 bg-opacity-30 rounded-full">
              <Image
                src={'/Testimonials/Ellipse 1.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “Reprehenderit esse labore id veniam ut veniam non ex
                adipisicing amet ullamco dolor proident. Exercitation velit ea
                incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
                qui.”
              </div>
              <div className=" flex-col justify-start items-start flex w-full">
                <div className=" text-black text-[25px] font-bold float-left">
                  John Doe
                </div>
                <div className=" text-black text-lg font-medium leading-7">
                  UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="w-[410px] h-[566px] px-[72px] py-[74px] bg-gradient-to-b from-violet-200 to-violet-200/40 rounded-[10px] shadow flex-col justify-start items-center gap-[29px] inline-flex">
            <div className="w-[114px] h-[114px] bg-violet-100 bg-opacity-30 rounded-full">
              <Image
                src={'/Testimonials/Ellipse 2.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “Reprehenderit esse labore id veniam ut veniam non ex
                adipisicing amet ullamco dolor proident. Exercitation velit ea
                incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
                qui.”
              </div>
              <div className=" flex-col justify-start items-start flex w-full">
                <div className=" text-black text-[25px] font-bold float-left">
                  John Doe
                </div>
                <div className=" text-black text-lg font-medium leading-7">
                  UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="w-[410px] h-[566px] px-[72px] py-[74px] bg-gradient-to-b from-violet-200 to-violet-200/40 rounded-[10px] shadow flex-col justify-start items-center gap-[29px] inline-flex">
            <div className="w-[114px] h-[114px] bg-violet-100 bg-opacity-30 rounded-full">
              <Image
                src={'/Testimonials/Ellipse 3.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “Reprehenderit esse labore id veniam ut veniam non ex
                adipisicing amet ullamco dolor proident. Exercitation velit ea
                incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
                qui.”
              </div>
              <div className=" flex-col justify-start items-start flex w-full">
                <div className=" text-black text-[25px] font-bold float-left">
                  John Doe
                </div>
                <div className=" text-black text-lg font-medium leading-7">
                  UX Designer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

import Image from "next/image";
import localFont from "next/font/local";
import { X } from "lucide-react";
import WorkSmartSection from "@/components/work-smart-section";
import Partner from "@/components/partner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ResponsiveCarousel from "@/components/responsive-carousel";
import { Metadata } from "next";

const kanopiBrazil = localFont({
  src: "../public/fonts/KanopiBrazil-Regular.otf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PlanB - Game Development & Animation Studio | Home",
  description:
    "Welcome to PlanB Studio - Your premier destination for game development, 2D animations, and innovative marketing solutions. Discover our portfolio and services.",
};

export default function Home() {
  return (
    <>
      <section className="my-20">
        <div className="relative flex flex-col">
          <Image
            priority
            src="/stockout-logo.png"
            alt="PlanB Studio Logo"
            width={765}
            height={331}
            className="transition-all duration-1000 xl:hover:scale-105"
          />
          <img
            src="/stockout-banner.png"
            alt="PlanB Studio Banner - Game Development and Animation Services"
            className="-right-30 top-20 flex-1 transition-all duration-1000 lg:absolute lg:h-[360px] lg:w-[600px] xl:top-10 xl:h-[478px] xl:w-[800px] xl:hover:scale-105 2xl:top-0 2xl:h-[635px] 2xl:w-[1061px]"
          />
          <div
            className={`${kanopiBrazil.className} flex flex-col max-w-[600px] mt-10`}
          >
            <h1 className="mb-2 text-3xl font-bold text-[#FF3E2C]">
              CAN YOU SURVIVE JUST BY SHOPPING?
            </h1>
            <p className="text-lg font-bold leading-8 text-[#434343]">
              Compete with other players in special and fun grocery stores for
              4-8 players, steal their goods or knock over their carts to race
              to victory! Create your own maps to play with your friends or grow
              your collection by acquiring new content...
            </p>
            <div className="mt-10 flex items-center gap-6">
              <Image
                className="transition-all duration-300 hover:scale-110"
                src="/wishlist.png"
                alt="Add to Wishlist"
                width={152}
                height={49}
              />
              <Image
                className="transition-all duration-300 hover:scale-110"
                src="/steam.png"
                width={129}
                height={44}
                alt="Available on Steam"
              />
            </div>
          </div>
        </div>
        <section className="mt-50 gap-15 flex flex-col items-center lg:flex-row">
          <Image
            src="/game-studio.png"
            alt="PlanB Game Studio Services"
            width={475}
            height={462}
            className="cursor-pointer transition-all duration-1000 xl:hover:scale-105"
          />
          <Image
            src="/animation-desc.png"
            alt="PlanB Animation Services"
            width={475}
            height={462}
            className="mb-30 cursor-pointer transition-all duration-1000 xl:hover:scale-105"
          />
          <Image
            src="/marketing-desc.png"
            alt="PlanB Marketing Solutions"
            width={475}
            height={462}
            className="cursor-pointer transition-all duration-1000 xl:hover:scale-105"
          />
        </section>

        <section className="mt-50 flex flex-col gap-20">
          <div className="flex flex-1 flex-col items-center justify-between gap-10 lg:flex-row lg:items-end lg:gap-0">
            <h2
              className={`${kanopiBrazil.className} text-[64px] flex-1 text-justify leading-18 mb-2 font-bold text-black`}
            >
              Advertising, marketing <br /> and commercials
            </h2>
            <div className="flex gap-5">
              <Image
                src="/left-icon.png"
                alt="Previous Slide"
                width={54}
                height={54}
                className="object-contain"
              />
              <Image
                src="/right-icon.png"
                alt="Next Slide"
                width={54}
                height={54}
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-20 lg:flex-row">
            <Image
              src="/cat.png"
              alt="BKIW Web Animation Project"
              width={782}
              height={440}
              className="flex-2 rounded-3xl object-contain shadow-lg"
            />
            <div className="flex flex-1 flex-col justify-between">
              <div className="flex w-full flex-col xl:w-[460px]">
                <h3 className="text-[28px]">
                  Web animation implemention for
                  <b> BKIW</b>
                </h3>
                <p className="mt-7">
                  Special animation production work for the content of the web
                  marketing. In the animation and production stages, we exceeded
                  the standards set by our customer and received support from
                  both artificial intelligence and Adobe programs.
                </p>
                <Link href="/" className="mt-2">
                  <Button className="bg-white p-0 text-[#FF3E2C]">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="mt-10 flex w-full gap-5 lg:mt-0 xl:w-[460px]">
                <div className="rounded-3xl border border-[#575757] px-4 py-1 text-[12px]">
                  Web marketing
                </div>
                <div className="rounded-3xl border border-[#575757] px-4 py-1 text-[12px]">
                  2D Animation
                </div>
                <div className="rounded-3xl border border-[#575757] px-4 py-1 text-[12px]">
                  AI
                </div>
              </div>
            </div>
          </div>
        </section>
        <WorkSmartSection />
        <Partner />
        <section className="mt-50 mb-20 flex items-center gap-20">
          <h2
            className={`${kanopiBrazil.className} text-[64px] flex-1 text-justify leading-18 mb-2 font-bold text-[#FF3E2C]`}
          >
            Game Portfolio
          </h2>
          <div className="ml-0 flex flex-1 flex-col lg:ml-8">
            <p className="font-medium text-[#232323]">
              We push the laws of physics provided by game engines to the limit!
              We love to create much more entertaining content in the products
              we produce in this...
            </p>
          </div>
        </section>
        <ResponsiveCarousel />
      </section>
    </>
  );
}

import { X } from "lucide-react";
import localFont from "next/font/local";
import Image from "next/image";
import React from "react";

const kanopiBrazil = localFont({
  src: "../public/fonts/KanopiBrazil-Regular.otf",
  display: "swap",
});

export default function OurAnimationTect() {
  return (
    <div>
      <div className="mt-50 flex flex-col items-center gap-10 lg:flex-row">
        <div
          className={`${kanopiBrazil.className} text-[64px] flex-1 text-justify leading-18 mb-2 font-bold text-[#FF3E2C]`}
        >
          OUR ANIMATION <br /> TECHNOLOGIES
        </div>
        <div className="ml-0 flex flex-1 flex-col lg:ml-8">
          <span className="font-medium text-[#232323]">
            We push the laws of physics provided by game engines to the limit!
            We love to create much more entertaining content in the products we
            produce in this...
          </span>
          <span className="mt-2 cursor-pointer self-end font-bold text-[#FF3E2C]">
            see more...
          </span>
        </div>
      </div>
      <div className="mt-10 flex flex-col lg:flex-row">
        <div className="flex flex-1 flex-col justify-between gap-10 pb-20 pt-10 lg:pt-20">
          <div className="flex gap-2">
            <X className="mt-1 h-4 w-4" />
            <div className="flex-1 gap-2">
              We animate both 2D and 3D animations with multiple different
              techniques during the production phase
            </div>
          </div>
          <div className="flex gap-2">
            <X className="mt-1 h-4 w-4" />
            <div className="flex-1 gap-2 text-justify">
              Total Animation Experinece
              <div className="text-[40px] font-medium">200+ Hours</div>
            </div>
          </div>
          <div className="flex gap-2">
            <X className="mt-1 h-4 w-4" />
            <div className="flex-1 gap-2 text-justify">
              Motion Capture Sensivity
              <div className="text-[40px] font-medium">90%</div>
            </div>
          </div>
        </div>
        <div className="flex-3">
          <Image
            src="/animation-banner.png"
            alt="animation-banner"
            width={1144}
            height={613}
          />
        </div>
      </div>
    </div>
  );
}

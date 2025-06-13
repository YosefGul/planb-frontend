import localFont from "next/font/local";
import Image from "next/image";

const kanopiBrazil = localFont({
  src: "../public/fonts/KanopiBrazil-Regular.otf",
  display: "swap",
});

export default function Partner() {
  return (
    <div className="py-16 px-8 mt-20">
      <div className=" mx-auto">
        {/* Main heading section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
          <div className="mb-8 lg:mb-0">
            <h1
              className={`${kanopiBrazil.className} text-[#222222] lg:text-[64px] text-[48px]  font-black leading-tight tracking-tight`}
            >
              DIGITAL
              <br />
              REVOLUTIONIZING
            </h1>
          </div>
          <div className="lg:text-right">
            <h2
              className={`${kanopiBrazil.className} text-[#ff314a] text-[32px] font-black leading-tight tracking-tight`}
            >
              PARTNERS
            </h2>
          </div>
        </div>

        {/* Partner logos section */}
        <div className="flex">
          {/* Logo placeholder 1 */}
          <div className="flex flex-1 flex-wrap gap-20 items-center justify-between">
            <Image
              src="/nvdia.png"
              alt="nvdia"
              width={100}
              height={100}
              className="object-contain h-[90px]"
            />
            <Image
              src="/steam-banner.png"
              alt="steam"
              width={100}
              height={100}
              className="object-contain h-[90px]"
            />
            <Image
              src="/unity.png"
              alt="unity"
              width={100}
              height={100}
              className="object-contain h-[90px]"
            />
            <Image
              src="/microsoft.png"
              alt="microsoft"
              width={100}
              height={100}
              className="object-contain h-[90px]"
            />
            <Image
              src="/unity.png"
              alt="unity"
              width={100}
              height={100}
              className="object-contain h-[90px]"
            />
            <Image
              src="/nvdia.png"
              alt="nvdia"
              width={100}
              height={100}
              className="object-contain h-[90px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

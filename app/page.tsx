import Image from "next/image";
import localFont from 'next/font/local'

const kanopiBrazil = localFont({
  src: '../public/fonts/KanopiBrazil-Regular.otf',
  display: 'swap',
})  

export default function Home() {
  return (
    <>
    <div className=" my-20">
      <div className="flex flex-col relative">
        <Image priority src="/stockout-logo.png" alt="stockout-logo" width={765} height={331} className="2xl:hover:scale-105 transition-all duration-1000" />
        <img src="/stockout-banner.png" alt="stockout-banner" className="2xl:hover:scale-105 transition-all duration-1000 flex-1 2xl:w-[1061px] 2xl:h-[635px] xl:w-[800px] xl:h-[478px] lg:w-[600px] lg:h-[360px]  lg:absolute 2xl:top-0 xl:top-10 top-20  -right-30" />
        <div className={`${kanopiBrazil.className} flex flex-col max-w-[600px] mt-10`}>
          <div className="text-3xl mb-2 font-bold text-[#FF3E2C]">CAN YOU SURVIVE JUST BY SHOPPING?</div>
          <div className="text-lg font-bold text-[#434343] leading-8">Compete with other players in special and fun grocery stores for 4-8 players,
            steal their goods or knock over their carts to race to victory!
            Create your own maps to play with your friends or grow your collection by
            acquiring new content...
          </div>
          <div className="flex  items-center mt-10 gap-6">
            <Image className="hover:scale-110 transition-all duration-300" src="/wishlist.png" alt="wishlist" width={152} height={49} />
            <Image className="hover:scale-110 transition-all duration-300" src="/steam.png" width={129} height={44} alt="steam" />
          </div>
        </div>
      </div>
      <div className="mt-50 flex flex-col lg:flex-row items-center gap-15">
        <Image src="/game-studio.png" alt="game-studio" width={475} height={462} className="cursor-pointer 2xl:hover:scale-105 transition-all duration-1000" />
        <Image src="/animation-desc.png" alt="animation-desc" width={475} height={462} className="cursor-pointer 2xl:hover:scale-105 mb-30 transition-all duration-1000" />
        <Image src="/marketing-desc.png" alt="marketing-desc" width={475} height={462} className="cursor-pointer 2xl:hover:scale-105 transition-all duration-1000" />
      </div>
      <div className="mt-50 flex items-center ">

      </div>
    </div>

    </>
  );
}

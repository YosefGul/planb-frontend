import Image from "next/image";
import localFont from "next/font/local";
import WorkSmart from "@/components/work-smart-section/work-smart";
import Partner from "@/components/partner-section/partner";
import { Metadata } from "next";
import ServiceCards from "@/components/services-section/service-cards";

import Slider from "@/components/slider-section/slider";
import Portfolio from "@/components/portfolio-section/portfolio";

const kanopiBrazil = localFont({
	src: "../public/fonts/KanopiBrazil-Regular.otf",
	display: "swap",
});

export const metadata: Metadata = {
	title: "PlanB - Game Development & Animation Studio | Home",
	description:
		"Welcome to PlanB Studio - Your premier destination for game development, 2D animations, and innovative marketing solutions. Discover our portfolio and services.",
};

export default async function Home() {
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
						className="transition-all ease-in-out duration-1000 xl:hover:scale-105 dark:hidden"
					/>
					<Image
						priority
						src="/stockout-logo-dark.png"
						alt="PlanB Studio Logo"
						width={765}
						height={331}
						className="transition-all ease-in-out duration-1000 xl:hover:scale-105 hidden dark:block"
					/>
					<Image
						priority
						src="/stockout-banner.png"
						alt="PlanB Studio Banner - Game Development and Animation Services"
						width={1061}
						height={635}
						className="-right-30 top-20 flex-1 transition-all duration-1000 lg:absolute lg:h-[360px] lg:w-[600px] xl:top-10 xl:h-[478px] xl:w-[800px] xl:hover:scale-105 2xl:top-0 2xl:h-[635px] 2xl:w-[1061px]"
					/>
					<div
						className={`${kanopiBrazil.className} flex flex-col max-w-[600px] mt-10`}
					>
						<h1 className="mb-2 text-3xl font-bold text-[#FF3E2C]">
							CAN YOU SURVIVE JUST BY SHOPPING?
						</h1>
						<p className="text-lg font-bold leading-8 text-[#434343] dark:text-white">
							Compete with other players in special and fun grocery stores for
							4-8 players, steal their goods or knock over their carts to race
							to victory! Create your own maps to play with your friends or grow
							your collection by acquiring new content...
						</p>
						<div className="mt-10 flex items-center gap-6">
							<Image
								className="transition-all duration-300 hover:scale-110 dark:invert"
								src="/wishlist.png"
								alt="Add to Wishlist"
								width={152}
								height={49}
							/>
							<Image
								className="transition-all duration-300 hover:scale-110 dark:invert"
								src="/steam.png"
								width={129}
								height={44}
								alt="Available on Steam"
							/>
						</div>
					</div>
				</div>
				<section className="mt-10 sm:mt-20 md:mt-30 lg:mt-40 xl:mt-50 2xl:mt-60 gap-15 flex flex-col items-center lg:flex-row">
					<ServiceCards />
				</section>

				<section className="mt-10 sm:mt-20 md:mt-30 lg:mt-40 xl:mt-50 2xl:mt-60 flex flex-col gap-20">
					<Slider />
				</section>

				<section className="mt-10 sm:mt-20 md:mt-30 lg:mt-40 xl:mt-50 2xl:mt-60 flex flex-col gap-20">
					<WorkSmart />
				</section>

				<section className="mt-10 sm:mt-20 md:mt-30 lg:mt-40 xl:mt-50 2xl:mt-60 flex flex-col gap-20">
					<Partner />
				</section>

				<section className="sm:mt-20 md:mt-30 lg:mt-40 xl:mt-50 2xl:mt-60 flex flex-col gap-20">
					<Portfolio />
				</section>
			</section>
		</>
	);
}

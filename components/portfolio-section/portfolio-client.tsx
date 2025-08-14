"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import localFont from "next/font/local";
import { formatPublishDate } from "@/utils/date-utils";
import {
	useStaggeredAnimation,
	animationClasses,
	getAnimationDelay,
} from "@/components/ui/animate";
import type { Portfolio } from "@/types/portfolio.types";

const kanopiBrazil = localFont({
	src: "../../public/fonts/KanopiBrazil-Regular.otf",
	display: "swap",
});

interface PortfolioClientProps {
	portfolios: Portfolio[];
}

export default function PortfolioClient({ portfolios }: PortfolioClientProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const [cardWidth, setCardWidth] = useState(0);
	const [cardsPerView, setCardsPerView] = useState(4);
	const [containerWidth, setContainerWidth] = useState(0);
	const [touchStart, setTouchStart] = useState<number | null>(null);
	const [touchEnd, setTouchEnd] = useState<number | null>(null);
	const { isVisible, animatedItems, sectionRef } = useStaggeredAnimation(
		portfolios.length,
		100
	);

	// Update sizes based on screen width
	useEffect(() => {
		const updateSizes = () => {
			if (window.innerWidth < 640) {
				setCardsPerView(2); // Mobile: 2x2 grid
			} else if (window.innerWidth < 768) {
				setCardsPerView(2);
			} else if (window.innerWidth < 1024) {
				setCardsPerView(3);
			} else {
				setCardsPerView(4);
			}

			if (scrollContainerRef.current) {
				const newContainerWidth = scrollContainerRef.current.clientWidth;
				setContainerWidth(newContainerWidth);
				setCardWidth(
					(newContainerWidth - (cardsPerView - 1) * 16) / cardsPerView
				);
			}
		};

		updateSizes();
		window.addEventListener("resize", updateSizes);
		return () => window.removeEventListener("resize", updateSizes);
	}, [cardsPerView]);

	const maxIndex = Math.max(0, portfolios.length - cardsPerView);

	const nextSlide = () => {
		setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
	};

	const prevSlide = () => {
		setCurrentIndex((prev) => Math.max(prev - 1, 0));
	};

	// Calculate the exact pixel amount to translate
	const translateX = cardWidth > 0 ? currentIndex * (cardWidth + 16) : 0;

	// Touch handlers for mobile swipe
	const onTouchStart = (e: React.TouchEvent) => {
		setTouchEnd(null);
		setTouchStart(e.targetTouches[0].clientX);
	};

	const onTouchMove = (e: React.TouchEvent) => {
		setTouchEnd(e.targetTouches[0].clientX);
	};

	const onTouchEnd = () => {
		if (!touchStart || !touchEnd) return;

		const distance = touchStart - touchEnd;
		const isLeftSwipe = distance > 50;
		const isRightSwipe = distance < -50;

		if (isLeftSwipe) {
			nextSlide();
		}
		if (isRightSwipe) {
			prevSlide();
		}
	};

	// Get cover image from assets
	const getCoverImage = (portfolio: Portfolio) => {
		if (portfolio.assets && portfolio.assets.length > 0) {
			const coverAsset = portfolio.assets.find((asset) => asset.isCovered);
			return coverAsset?.asset || portfolio.assets[0].asset;
		}
		return null;
	};

	return (
		<section ref={sectionRef} className="py-16 px-4 lg:px-8 bg-background">
			<div className="max-w-7xl mx-auto">
				{/* Header Section */}
				<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
					<div className="mb-8 lg:mb-0">
						<h1
							className={`${
								kanopiBrazil.className
							} text-[#FF314A] text-4xl lg:text-5xl font-black leading-tight tracking-tight ${animationClasses.fadeInUp(
								isVisible
							)}`}
						>
							GAME PORTFOLIO
						</h1>
					</div>

					{/* Navigation Controls */}
					<div className="flex gap-2">
						<Button
							onClick={prevSlide}
							disabled={currentIndex === 0}
							variant="outline"
							size="icon"
							className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-500 ease-out hover:scale-110 ${animationClasses.fadeInUpDelay(
								isVisible,
								200
							)}`}
							aria-label="Previous slide"
						>
							<ChevronLeft className="size-4 sm:size-5 md:size-6 text-black dark:text-white" />
						</Button>
						<Button
							onClick={nextSlide}
							disabled={currentIndex >= maxIndex}
							variant="outline"
							size="icon"
							className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#FF314A] dark:bg-[#FF314A] hover:bg-red-600 dark:hover:bg-red-600 transition-all duration-500 ease-out hover:scale-110 border-[#FF314A] ${animationClasses.fadeInUpDelay(
								isVisible,
								200
							)}`}
							aria-label="Next slide"
						>
							<ChevronRight className="size-4 sm:size-5 md:size-6 text-white" />
						</Button>
					</div>
				</div>

				{/* Portfolio Cards - Desktop */}
				<div className="relative w-full hidden lg:block">
					<div
						className="overflow-hidden"
						ref={scrollContainerRef}
						onTouchStart={onTouchStart}
						onTouchMove={onTouchMove}
						onTouchEnd={onTouchEnd}
					>
						<div
							className="flex gap-4 transition-transform duration-300 ease-in-out"
							style={{ transform: `translateX(-${translateX}px)` }}
						>
							{portfolios.map((portfolio, index) => {
								const isAnimated = animatedItems.includes(index);
								return (
									<div
										key={portfolio.id}
										className={`flex-shrink-0 ${animationClasses.staggeredItem(
											isAnimated
										)}`}
										style={{
											width:
												cardWidth > 0
													? `${cardWidth}px`
													: `calc(${100 / cardsPerView}% - ${
															(16 * (cardsPerView - 1)) / cardsPerView
													  }px)`,
											...getAnimationDelay(index, 100),
										}}
									>
										<div className="flex h-full flex-col">
											{/* Cover Image */}
											<div className="relative mb-4 aspect-[1/1.2] overflow-hidden rounded-lg">
												{getCoverImage(portfolio) ? (
													<Image
														src={getCoverImage(portfolio)!}
														alt={portfolio.name}
														fill
														className="object-cover"
													/>
												) : (
													<div
														className="w-full h-full"
														style={{
															background:
																"linear-gradient(to bottom, #222222 0%, #999999 100%)",
														}}
													/>
												)}

												{/* Overlay with title and date */}
												<div className="absolute bottom-0 left-0 p-4 text-white bg-black/30 backdrop-blur-sm rounded-tr-xl">
													<h3 className="text-xl font-bold">
														{portfolio.name}
													</h3>
													<p className="text-sm opacity-90">
														{formatPublishDate(portfolio.publishDate)}
													</p>
												</div>
											</div>

											{/* Content */}
											<div className="space-y-2">
												{/* Excerpt */}
												{portfolio.excerpt && (
													<p className="text-sm font-medium text-gray-800 dark:text-gray-200">
														{portfolio.excerpt}
													</p>
												)}

												{/* Description */}
												<p className="text-sm text-gray-700 dark:text-gray-300">
													{portfolio.description}
												</p>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>

				{/* Portfolio Cards - Mobile */}
				<div className="lg:hidden mt-8">
					<div
						className="grid grid-cols-2 gap-4"
						onTouchStart={onTouchStart}
						onTouchMove={onTouchMove}
						onTouchEnd={onTouchEnd}
					>
						{portfolios.slice(0, 4).map((portfolio, index) => {
							const isAnimated = animatedItems.includes(index);
							return (
								<div
									key={`mobile-${portfolio.id}`}
									className={`flex flex-col ${animationClasses.staggeredItem(
										isAnimated
									)}`}
									style={getAnimationDelay(index, 150)}
								>
									{/* Cover Image */}
									<div className="relative mb-3 aspect-[1/1.2] overflow-hidden rounded-lg">
										{getCoverImage(portfolio) ? (
											<Image
												src={getCoverImage(portfolio)!}
												alt={portfolio.name}
												fill
												className="object-cover"
											/>
										) : (
											<div
												className="w-full h-full"
												style={{
													background:
														"linear-gradient(to bottom, #222222 0%, #999999 100%)",
												}}
											/>
										)}

										{/* Overlay with title and date */}
										<div className="absolute bottom-0 left-0 p-3 text-white bg-black/30 backdrop-blur-sm rounded-tr-xl">
											<h3 className="text-lg font-bold">{portfolio.name}</h3>
											<p className="text-xs opacity-90">
												{formatPublishDate(portfolio.publishDate)}
											</p>
										</div>
									</div>

									{/* Content */}
									<div className="space-y-1">
										{/* Excerpt */}
										{portfolio.excerpt && (
											<p className="text-xs font-medium text-gray-800 dark:text-gray-200 line-clamp-1">
												{portfolio.excerpt}
											</p>
										)}

										{/* Description */}
										<p className="text-xs text-gray-700 dark:text-gray-300 line-clamp-2">
											{portfolio.description}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				{/* Explore Button */}
				<div className="mt-15 flex items-center justify-center lg:block">
					<Button className="transition-all duration-200 cursor-pointer relative h-12 rounded-2xl sm:px-12 lg:px-8 text-[18px] font-medium text-black shadow-md hover:shadow-lg active:scale-95 border-2 border-zinc-300 bg-gradient-to-bl from-white to-zinc-200 dark:text-white dark:border-zinc-700 dark:from-zinc-800 dark:to-zinc-900">
						<span
							className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/0 dark:ring-white/0"
							aria-hidden
						/>
						Explore SkillNest Platform
					</Button>
				</div>
			</div>
		</section>
	);
}

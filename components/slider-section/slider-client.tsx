"use client";

import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	useStaggeredAnimation,
	animationClasses,
	getAnimationDelay,
} from "@/components/ui/animate";
import type { Slider } from "@/types/slider.types";

const kanopiBrazil = localFont({
	src: "../../public/fonts/KanopiBrazil-Regular.otf",
	display: "swap",
});

interface SliderClientProps {
	sliders: Slider[];
}

export default function SliderClient({ sliders }: SliderClientProps) {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);
	const [isUserInteracting, setIsUserInteracting] = useState(false);
	const [touchStart, setTouchStart] = useState<number | null>(null);
	const [touchEnd, setTouchEnd] = useState<number | null>(null);
	const { isVisible, sectionRef } = useStaggeredAnimation(sliders.length, 100);
	const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

	// Auto slide with user interaction pause
	useEffect(() => {
		if (isUserInteracting) {
			// Clear auto-slide when user is interacting
			if (autoSlideRef.current) {
				clearInterval(autoSlideRef.current);
				autoSlideRef.current = null;
			}
		} else {
			// Resume auto-slide when user stops interacting
			autoSlideRef.current = setInterval(() => {
				setCurrentSlide((prev) => (prev + 1) % sliders.length);
			}, 5000);
		}

		return () => {
			if (autoSlideRef.current) {
				clearInterval(autoSlideRef.current);
			}
		};
	}, [isUserInteracting, sliders.length]);

	// Reset user interaction after 3 seconds
	useEffect(() => {
		if (isUserInteracting) {
			const timer = setTimeout(() => {
				setIsUserInteracting(false);
			}, 3000);

			return () => clearTimeout(timer);
		}
	}, [isUserInteracting]);

	const nextSlide = () => {
		if (isAnimating) return;
		setIsUserInteracting(true);
		setIsAnimating(true);

		setTimeout(() => {
			setCurrentSlide((prev) => (prev + 1) % sliders.length);
			setTimeout(() => {
				setIsAnimating(false);
			}, 500);
		}, 250);
	};

	const prevSlide = () => {
		if (isAnimating) return;
		setIsUserInteracting(true);
		setIsAnimating(true);

		setTimeout(() => {
			setCurrentSlide((prev) => (prev - 1 + sliders.length) % sliders.length);
			setTimeout(() => {
				setIsAnimating(false);
			}, 500);
		}, 250);
	};

	const goToSlide = (index: number) => {
		if (isAnimating || index === currentSlide) return;
		setIsUserInteracting(true);
		setIsAnimating(true);

		setTimeout(() => {
			setCurrentSlide(index);
			setTimeout(() => {
				setIsAnimating(false);
			}, 500);
		}, 250);
	};

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

	const currentSlider = sliders[currentSlide];

	return (
		<section
			ref={sectionRef}
			className="mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16"
		>
			{/* Header */}
			<div className="flex flex-1 flex-col items-center justify-between gap-6 sm:gap-8 md:gap-10 lg:flex-row lg:items-end lg:gap-0 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
				<h2
					className={`${
						kanopiBrazil.className
					} text-3xl sm:text-4xl lg:text-5xl xl:text-[64px] flex-1 text-center lg:text-justify leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed xl:leading-18 mb-2 font-bold text-black dark:text-white ${animationClasses.fadeInUp(
						isVisible
					)}`}
				>
					ADVERTISING, MARKETING <br className="hidden sm:block" /> AND
					COMMERCIALS
				</h2>
				<div
					className={`flex gap-3 sm:gap-4 md:gap-5 ${animationClasses.fadeInUpDelay(
						isVisible,
						200
					)}`}
				>
					<Button
						onClick={prevSlide}
						variant="outline"
						size="icon"
						className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-500 ease-out hover:scale-110"
						aria-label="Previous slide"
					>
						<ChevronLeft className="size-4 sm:size-5 md:size-6 text-black dark:text-white" />
					</Button>
					<Button
						onClick={nextSlide}
						variant="outline"
						size="icon"
						className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#FF314A] dark:bg-[#FF314A] hover:bg-red-600 dark:hover:bg-red-600 transition-all duration-500 ease-out hover:scale-110 border-[#FF314A]"
						aria-label="Next slide"
					>
						<ChevronRight className="size-4 sm:size-5 md:size-6 text-white" />
					</Button>
				</div>
			</div>

			{/* Main Content - Fixed Height Container */}
			<div
				className={`flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 items-center min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] xl:min-h-[600px] ${animationClasses.fadeInUpDelay(
					isVisible,
					400
				)}`}
				onTouchStart={onTouchStart}
				onTouchMove={onTouchMove}
				onTouchEnd={onTouchEnd}
			>
				{/* Image Section - Fixed Size */}
				<div
					className={`flex-1 w-full hidden md:block md:h-[300px] lg:h-[350px] xl:h-[400px] transition-all duration-700 ease-in-out z-10 ${
						isAnimating ? "animate-image-scale" : ""
					}`}
				>
					<div className="relative overflow-hidden rounded-2xl sm:rounded-3xl w-full h-full">
						<Image
							src={currentSlider.image}
							alt={currentSlider.name}
							fill
							className="object-cover transition-all duration-700 ease-in-out hover:scale-105"
							priority={currentSlide === 0}
						/>
					</div>
				</div>

				{/* Content Section - Fixed Height */}
				<div className="flex-1 flex flex-col justify-center space-y-4 sm:space-y-5 md:space-y-6 h-[150px] sm:h-[200px] md:h-[300px] lg:h-[350px] xl:h-[400px] z-5 w-full lg:px-8 ">
					<div
						key={`content-${currentSlide}`}
						className="flex flex-col justify-between h-full"
					>
						<div className="space-y-1">
							<h3
								className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black dark:text-white leading-tight animate-slide-in-right`}
							>
								{currentSlider.name}
							</h3>

							<h5
								className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-light text-gray-600 dark:text-gray-300 leading-tight animate-slide-in-right`}
							>
								{currentSlider.excerpt}
							</h5>
						</div>
						<div>
							<p
								className={`text-sm mt-4 sm:mt-6 lg:mt-4 xl:mt-2 sm:text-base md:text-lg lg:text-xl text-gray-800 dark:text-gray-300 leading-relaxed animate-slide-in-right animation-delay-200`}
							>
								{currentSlider.description}
							</p>

							{/* Tags */}
							<div className="flex flex-wrap gap-2 sm:gap-3 animate-slide-in-up animation-delay-400 mt-10 sm:mt-20 md:mt-25">
								{currentSlider.tags && currentSlider.tags.length > 0 ? (
									currentSlider.tags.map((tag, index) => (
										<span
											key={`${currentSlide}-${tag.id}`}
											className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-full border border-gray-500 dark:border-white select-none text-black dark:text-white text-xs sm:text-sm font-medium transition-all duration-500 ease-out hover:bg-gray-500 hover:text-white dark:hover:bg-white dark:hover:text-black"
											style={{ animationDelay: `${index * 100}ms` }}
										>
											{tag.name}
										</span>
									))
								) : (
									<span className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full border border-gray-500 dark:border-white text-black dark:text-white text-xs sm:text-sm font-medium">
										No tags available
									</span>
								)}
							</div>
						</div>

						<Link
							href="/"
							className={`text-[#FF314A] mt-7 hover:text-red-600 font-semibold text-sm sm:text-base md:text-lg lg:text-xl inline-flex items-center group animate-slide-in-right animation-delay-300`}
						>
							Learn More
							<ArrowRight className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
						</Link>
					</div>
				</div>
			</div>

			{/* Slide Indicators */}
			<div
				className={`flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3 ${animationClasses.fadeInUpDelay(
					isVisible,
					600
				)}`}
			>
				{sliders.map((_, index) => (
					<button
						key={index}
						onClick={() => goToSlide(index)}
						className={`h-1.5 w-6 sm:h-2 sm:w-8 rounded-full transition-all duration-500 ease-out ${
							index === currentSlide
								? "bg-[#FF314A] scale-110"
								: "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
						}`}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</section>
	);
}

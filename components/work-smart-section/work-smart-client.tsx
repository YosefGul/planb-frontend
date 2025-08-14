"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import localFont from "next/font/local";
import {
	useStaggeredAnimation,
	animationClasses,
	getAnimationDelay,
} from "@/components/ui/animate";
import type { TeamMember } from "@/types/team-member-types";

const kanopiBrazil = localFont({
	src: "../../public/fonts/KanopiBrazil-Regular.otf",
	display: "swap",
});

interface WorkSmartClientProps {
	teamMembers: TeamMember[];
}

export default function WorkSmartClient({ teamMembers }: WorkSmartClientProps) {
	const { isVisible, animatedItems, sectionRef } = useStaggeredAnimation(
		teamMembers.length,
		200
	);
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	// Scroll position check for mobile horizontal scroll
	const checkScrollPosition = () => {
		if (!scrollContainerRef.current) return;
		const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
		// You can add scroll indicators here if needed
	};

	return (
		<section
			ref={sectionRef}
			className="mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16"
		>
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
					{/* Left Column - Content */}
					<div className="space-y-6 sm:space-y-8">
						<div>
							<h1
								className={`${
									kanopiBrazil.className
								} text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight mb-6 sm:mb-8 text-black dark:text-white ${animationClasses.fadeInUp(
									isVisible
								)}`}
							>
								WORK SMART
								<br />
								WORK EVERYWHERE
							</h1>

							<div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
								<p
									className={`${animationClasses.fadeInUpDelay(
										isVisible,
										200
									)}`}
								>
									We realize completely remote production with the
									multi-structure applications we use. Experts from different
									working principles take part in a common working culture,
									creating a timeless and independent culture.
								</p>

								<p
									className={`${animationClasses.fadeInUpDelay(
										isVisible,
										400
									)}`}
								>
									We care not only about our customers but also about our team.
									One of the biggest reasons for this is that we experience that
									original and creative production is always created in a safe
									zone.
								</p>

								<p
									className={`${animationClasses.fadeInUpDelay(
										isVisible,
										600
									)}`}
								>
									We focus on time and people.
								</p>
							</div>
						</div>

						<Button
							variant="outline"
							className="cursor-pointer hidden lg:flex rounded-2xl px-5 py-5 text-[15px] font-medium text-black transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 border-2 border-zinc-300 bg-gradient-to-bl from-white to-zinc-200 dark:text-white dark:border-zinc-700 dark:from-zinc-800 dark:to-zinc-900"
						>
							Our Team
						</Button>
					</div>

					{/* Right Column - Team Member Cards */}
					{/* Desktop Layout */}
					<div className="hidden lg:flex space-y-4 sm:space-y-7 h-full flex-col justify-center">
						{teamMembers.map((member, index) => (
							<Card
								key={member.id}
								className={`bg-gradient-to-b dark:shadow-white/5 px-10 py-14 from-gray-100 flex flex-row justify-between items-center to-white dark:from-gray-800 dark:to-gray-900 border-0 rounded-2xl relative overflow-hidden transition-all duration-700 ease-out hover:shadow-xl ${animationClasses.staggeredItem(
									animatedItems.includes(index)
								)}`}
								style={getAnimationDelay(index, 200)}
							>
								<CardContent className="p-0">
									<p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed sm:mb-6">
										"{member.quote}"
									</p>
									<div className="flex items-center gap-3">
										<div className="text-black dark:text-white flex items-center gap-2">
											<span className="font-semibold text-sm sm:text-base">
												{member.name}
											</span>
											<div className="w-px h-4 bg-gray-400 dark:bg-gray-500"></div>
											<span className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
												{member.title}
											</span>
										</div>

										{member.linkedinUrl && (
											<Button
												variant="ghost"
												size="icon"
												className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FF314A] hover:bg-red-600 text-white transition-all duration-300 ease-out hover:scale-110"
												onClick={() =>
													window.open(member.linkedinUrl, "_blank")
												}
												aria-label={`${member.name}'s LinkedIn profile`}
											>
												<Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
											</Button>
										)}
									</div>
								</CardContent>
								<div className="size-23 bg-[#FF314A] rounded-full flex items-center justify-center">
									{member.profilePhoto ? (
										<Image
											src={member.profilePhoto}
											alt={member.name}
											width={48}
											height={48}
											className="size-full object-cover"
										/>
									) : (
										<span className="text-white font-bold sm:text-4xl">
											{member.name.charAt(0).toUpperCase()}
										</span>
									)}
								</div>
							</Card>
						))}
					</div>

					{/* Mobile Horizontal Scroll Layout */}
					<div className="lg:hidden">
						<div className="relative">
							<div
								ref={scrollContainerRef}
								className="flex gap-4 overflow-x-auto scrollbar-hide pb-1"
								onScroll={checkScrollPosition}
								style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
							>
								{teamMembers.map((member) => (
									<Card
										key={`mobile-${member.id}`}
										className="flex-shrink-0 bg-gradient-to-b dark:shadow-white/5 w-9/10 px-7 py-10 from-gray-100 flex flex-row justify-between items-center to-white dark:from-gray-800 dark:to-gray-900 border-0 rounded-2xl overflow-hidden transition-all duration-700 ease-out hover:shadow-xl"
									>
										<CardContent className="p-0">
											<p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed sm:mb-6">
												"{member.quote}"
											</p>
											<div className="flex items-center gap-3">
												<div className="text-black dark:text-white flex items-center gap-2">
													<span className="font-semibold text-sm sm:text-base">
														{member.name}
													</span>
													<div className="w-px h-4 bg-gray-400 dark:bg-gray-500"></div>
													<span className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
														{member.title}
													</span>
												</div>

												{member.linkedinUrl && (
													<Button
														variant="ghost"
														size="icon"
														className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FF314A] hover:bg-red-600 text-white transition-all duration-300 ease-out hover:scale-110"
														onClick={() =>
															window.open(member.linkedinUrl, "_blank")
														}
														aria-label={`${member.name}'s LinkedIn profile`}
													>
														<Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
													</Button>
												)}
											</div>
										</CardContent>
										<div className="size-16 bg-[#FF314A] rounded-full flex items-center justify-center">
											{member.profilePhoto ? (
												<Image
													src={member.profilePhoto}
													alt={member.name}
													width={48}
													height={48}
													className="size-full object-cover"
												/>
											) : (
												<span className="text-white font-bold text-sm sm:text-base">
													{member.name.charAt(0).toUpperCase()}
												</span>
											)}
										</div>
									</Card>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-center lg:hidden">
					<Button
						variant="outline"
						className="cursor-pointer relative my-10 rounded-2xl px-7 py-6 text-[18px] font-medium text-black transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 border-2 border-zinc-300 bg-gradient-to-bl from-white to-zinc-200 dark:text-white dark:border-zinc-700 dark:from-zinc-800 dark:to-zinc-900"
					>
						Our Team
					</Button>
				</div>
			</div>
		</section>
	);
}

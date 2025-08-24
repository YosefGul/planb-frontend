"use client";

import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import {
	useStaggeredAnimation,
	animationClasses,
	getAnimationDelay,
} from "@/components/ui/animate";
import type { Service } from "@/types/service.types";

type Props = {
	services: Service[];
};

// Icon değerinin geçerli bir URL olup olmadığını kontrol eden fonksiyon
const isValidImageUrl = (url: string): boolean => {
	// SVG dosyaları için kontrol
	if (
		url.startsWith("/") &&
		(url.endsWith(".svg") || url.endsWith(".png") || url.endsWith(".jpg"))
	) {
		return true;
	}

	try {
		new URL(url);
		return url.startsWith("http://") || url.startsWith("https://");
	} catch {
		return false;
	}
};

export default function ServiceCardsClient({ services }: Props) {
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const { animatedItems, sectionRef } = useStaggeredAnimation(
		services?.length || 0,
		100
	);

	const checkScrollPosition = () => {
		if (!scrollContainerRef.current) return;
	};

	useEffect(() => {
		checkScrollPosition();
		window.addEventListener("resize", checkScrollPosition);
		return () => window.removeEventListener("resize", checkScrollPosition);
	}, [services?.length]);

	const items = services && services.length > 0 ? services : [];

	// Icon render fonksiyonu
	const renderIcon = (icon: string, serviceName: string) => {
		if (isValidImageUrl(icon)) {
			return (
				<div className="w-16 h-16 bg-[#FF314a] dark:bg-white rounded-full flex items-center justify-center">
					<Image
						src={icon}
						alt={serviceName}
						width={32}
						height={32}
						className="w-8 h-8 object-contain dark:invert"
					/>
				</div>
			);
		} else {
			// Geçerli URL değilse, service name'in ilk harfini göster
			return (
				<div className="w-16 h-16 bg-[#FF314a] dark:bg-white rounded-full flex items-center justify-center">
					<span className="text-white text-2xl font-bold">
						{serviceName.charAt(0)}
					</span>
				</div>
			);
		}
	};

	return (
		<div ref={sectionRef} className="w-full">
			<div className="container mx-auto ">
				{/* Desktop Grid */}
				<div className="hidden md:grid md:grid-cols-3 gap-6">
					{items.map((service, index) => {
						const isAnimated = animatedItems.includes(index);
						return (
							<Card
								key={service.id}
								className={`text-center hover:shadow-lg ${animationClasses.staggeredItem(
									isAnimated
								)}`}
								style={getAnimationDelay(index, 100)}
							>
								<CardHeader className="pb-4">
									<div className="flex items-center justify-center mx-auto mb-4">
										{renderIcon(service.icon, service.name)}
									</div>
									<CardTitle className="text-red-500 font-bold text-lg uppercase">
										{service.name}
									</CardTitle>
								</CardHeader>
								<CardContent className="pt-0">
									<p className="text-muted-foreground text-sm leading-relaxed">
										{service.description}
									</p>
								</CardContent>
							</Card>
						);
					})}
				</div>

				{/* Mobile Horizontal Scroll */}
				<div className="md:hidden">
					<div className="relative">
						<div
							ref={scrollContainerRef}
							className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
							onScroll={checkScrollPosition}
							style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
						>
							{items.map((service, index) => {
								const isAnimated = animatedItems.includes(index);
								return (
									<Card
										key={service.id}
										className={`flex-shrink-0 w-80 text-center hover:shadow-lg ${animationClasses.staggeredItem(
											isAnimated
										)}`}
										style={getAnimationDelay(index, 150)}
									>
										<CardHeader className="pb-4">
											<div className="flex items-center justify-center mx-auto mb-4">
												{renderIcon(service.icon, service.name)}
											</div>
											<CardTitle className="text-red-500 font-bold text-lg uppercase">
												{service.name}
											</CardTitle>
										</CardHeader>
										<CardContent className="pt-0">
											<p className="text-muted-foreground text-sm leading-relaxed">
												{service.description}
											</p>
										</CardContent>
									</Card>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

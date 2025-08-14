"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
	children: React.ReactNode;
	className?: string;
	threshold?: number;
	rootMargin?: string;
	animationDelay?: number;
	onVisible?: () => void;
}

export default function AnimatedSection({
	children,
	className = "",
	threshold = 0.2,
	rootMargin = "0px 0px -50px 0px",
	animationDelay = 0,
	onVisible,
}: AnimatedSectionProps) {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						setIsVisible(true);
						onVisible?.();
					}, animationDelay);
				}
			},
			{
				threshold,
				rootMargin,
			}
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, [threshold, rootMargin, animationDelay, onVisible]);

	return (
		<div
			ref={sectionRef}
			className={`transition-all duration-1000 ${
				isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
			} ${className}`}
		>
			{children}
		</div>
	);
}

// Staggered animation hook for multiple items
export function useStaggeredAnimation(
	itemCount: number,
	delay: number = 100,
	animationDelay: number = 0
) {
	const [animatedItems, setAnimatedItems] = useState<number[]>([]);
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						setIsVisible(true);
						// Staggered animation for items
						Array.from({ length: itemCount }, (_, index) => {
							setTimeout(() => {
								setAnimatedItems((prev) => [...prev, index]);
							}, animationDelay + index * delay);
						});
					}, animationDelay);
				}
			},
			{
				threshold: 0.2,
				rootMargin: "0px 0px -50px 0px",
			}
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, [itemCount, delay, animationDelay]);

	return {
		isVisible,
		animatedItems,
		sectionRef,
	};
}

// Animation classes for different elements
export const animationClasses = {
	// Basic fade in + slide up
	fadeInUp: (isVisible: boolean) =>
		`transition-all duration-1000 ${
			isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
		}`,

	// Fade in + slide up with delay
	fadeInUpDelay: (isVisible: boolean, delay: number = 200) =>
		`transition-all duration-1000 delay-${delay} ${
			isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
		}`,

	// Staggered item animation
	staggeredItem: (isAnimated: boolean, delay: number = 100) =>
		`transition-all duration-700 ${
			isAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
		}`,

	// Card animation
	card: (isAnimated: boolean, index: number, delay: number = 100) =>
		`transition-all duration-700 ${
			isAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
		}`,
};

// Animation delay utility
export const getAnimationDelay = (index: number, baseDelay: number = 100) => ({
	transitionDelay: `${index * baseDelay}ms`,
});

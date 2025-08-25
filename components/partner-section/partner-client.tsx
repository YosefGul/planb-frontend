"use client";

import localFont from "next/font/local";
import Image from "next/image";
import {
  useStaggeredAnimation,
  animationClasses,
  getAnimationDelay,
} from "@/components/ui/animate";
import type { Partner } from "@/types/partner.types";

const kanopiBrazil = localFont({
  src: "../../public/fonts/KanopiBrazil-Regular.otf",
  display: "swap",
});

// Dinamik grid hesaplama fonksiyonu
function getGridConfig(partnerCount: number) {
  // Desktop için grid hesaplama
  const getDesktopGrid = (count: number) => {
    if (count <= 4) return `grid-cols-${count}`;
    if (count <= 6) return "grid-cols-6";
    if (count <= 8) return "grid-cols-8";
    return "grid-cols-10";
  };

  // Tablet için grid hesaplama
  const getTabletGrid = (count: number) => {
    if (count <= 2) return `grid-cols-${count}`;
    if (count <= 4) return "grid-cols-4";
    if (count <= 6) return "grid-cols-6";
    return "grid-cols-8";
  };

  // Mobile için grid hesaplama
  const getMobileGrid = (count: number) => {
    if (count <= 2) return `grid-cols-${count}`;
    if (count <= 4) return "grid-cols-4";
    return "grid-cols-5";
  };

  return {
    desktop: getDesktopGrid(partnerCount),
    tablet: getTabletGrid(partnerCount),
    mobile: getMobileGrid(partnerCount),
  };
}

// Logo boyut hesaplama fonksiyonu
function getLogoSize(
  partnerCount: number,
  screen: "desktop" | "tablet" | "mobile"
) {
  const baseSizes = {
    desktop: { height: 90, width: 120 },
    tablet: { height: 70, width: 100 },
    mobile: { height: 50, width: 80 },
  };

  const size = baseSizes[screen];

  // Partner sayısına göre boyut ayarlama
  if (partnerCount > 8) {
    return { height: size.height * 0.8, width: size.width * 0.8 };
  }
  if (partnerCount > 6) {
    return { height: size.height * 0.9, width: size.width * 0.9 };
  }

  return size;
}

interface PartnerClientProps {
  partners: Partner[];
}

export default function PartnerClient({ partners }: PartnerClientProps) {
  const { isVisible, animatedItems, sectionRef } = useStaggeredAnimation(
    partners.length,
    100
  );
  const gridConfig = getGridConfig(partners.length);

  return (
    <section ref={sectionRef} className="py-16 px-4 lg:px-8  bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Heading section - Desktop */}
        <div className="hidden lg:flex lg:flex-row justify-between items-center mb-16">
          <div className="mb-8 lg:mb-0">
            <h1
              className={`${
                kanopiBrazil.className
              } text-foreground lg:text-[64px] text-[48px] font-black leading-tight tracking-tight ${animationClasses.fadeInUp(
                isVisible
              )}`}
            >
              DIGITAL
              <br />
              REVOLUTIONIZING
            </h1>
          </div>
          <div className="lg:text-right ">
            <h2
              className={`${
                kanopiBrazil.className
              } text-[#FF314A] lg:text-[40px] text-[28px] font-black leading-tight tracking-tight ${animationClasses.fadeInUpDelay(
                isVisible,
                200
              )}`}
            >
              PARTNERS
            </h2>
          </div>
        </div>

        {/* Heading section - Mobile */}
        <div className="block lg:hidden mb-16">
          <div className="flex flex-col items-center relative z-10">
            <h2
              className={`${
                kanopiBrazil.className
              } text-[#FF314A] text-[48px] sm:text-[64px] font-black leading-tight text-center tracking-tight transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              PARTNERS
            </h2>
            <div className="mt-6 sm:mt-10 hidden md:block">
              <h1
                className={`${
                  kanopiBrazil.className
                } text-foreground/8 pointer-events-none text-[80px] sm:text-[100px] w-full flex justify-center text-center absolute -top-16 sm:-top-22 z-5 left-1/2 -translate-x-1/2 font-black leading-tight tracking-tight transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                DIGITAL
                <br />
                REVOLUTIONIZING
              </h1>
            </div>
          </div>
        </div>

        {/* Partner logos section - Desktop */}
        <div className="hidden lg:block overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of partners */}
            <div
              className={`flex ${gridConfig.desktop} gap-8 lg:gap-12 items-center justify-items-center min-w-full`}
            >
              {partners.map((partner, index) => {
                const size = getLogoSize(partners.length, "desktop");
                const isAnimated = animatedItems.includes(index);

                return (
                  <div
                    key={partner.id}
                    className={`group relative ${animationClasses.staggeredItem(
                      isAnimated
                    )}`}
                    style={getAnimationDelay(index, 100)}
                  >
                    <Image
                      src={partner.icon}
                      alt={partner.name}
                      width={size.width}
                      height={size.height}
                      className="object-contain w-auto h-auto filter grayscale hover:grayscale-0 transition-all duration-300 group-hover:brightness-110 dark:invert hover:scale-110"
                      style={{ height: `${size.height}px` }}
                    />
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  </div>
                );
              })}
            </div>
            {/* Duplicate set for infinite scroll */}
            <div
              className={`flex ${gridConfig.desktop} gap-8 lg:gap-12 items-center justify-items-center min-w-full`}
            >
              {partners.map((partner, index) => {
                const size = getLogoSize(partners.length, "desktop");

                return (
                  <div
                    key={`duplicate-${partner.id}`}
                    className="group relative"
                  >
                    <Image
                      src={partner.icon}
                      alt={partner.name}
                      width={size.width}
                      height={size.height}
                      className="object-contain w-auto h-auto filter grayscale hover:grayscale-0 transition-all duration-300 group-hover:brightness-110 dark:invert hover:scale-110"
                      style={{ height: `${size.height}px` }}
                    />
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Partner logos section - Tablet */}
        <div className="hidden md:block lg:hidden overflow-hidden z-10">
          <div className="flex animate-scroll">
            {/* First set of partners */}
            <div
              className={`flex ${gridConfig.tablet} gap-6 items-center justify-items-center min-w-full`}
            >
              {partners.map((partner, index) => {
                const size = getLogoSize(partners.length, "tablet");
                const isAnimated = animatedItems.includes(index);

                return (
                  <div
                    key={`tablet-${partner.id}`}
                    className={`group relative transition-all duration-700 ${
                      isAnimated
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <Image
                      src={partner.icon}
                      alt={partner.name}
                      width={size.width}
                      height={size.height}
                      className="object-contain w-auto h-auto filter grayscale hover:grayscale-0 transition-all duration-300 group-hover:brightness-110 dark:invert hover:scale-105"
                      style={{ height: `${size.height}px` }}
                    />
                  </div>
                );
              })}
            </div>
            {/* Duplicate set for infinite scroll */}
            <div
              className={`flex ${gridConfig.tablet} gap-6 items-center justify-items-center min-w-full`}
            >
              {partners.map((partner, index) => {
                const size = getLogoSize(partners.length, "tablet");

                return (
                  <div
                    key={`tablet-duplicate-${partner.id}`}
                    className="group relative"
                  >
                    <Image
                      src={partner.icon}
                      alt={partner.name}
                      width={size.width}
                      height={size.height}
                      className="object-contain w-auto h-auto filter grayscale hover:grayscale-0 transition-all duration-300 group-hover:brightness-110 dark:invert hover:scale-105"
                      style={{ height: `${size.height}px` }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Partner logos section - Mobile */}
        <div className="block md:hidden overflow-hidden z-10">
          <div className="flex animate-scroll">
            {/* First set of partners */}
            <div
              className={`flex ${gridConfig.mobile} gap-4 items-center justify-items-center min-w-full`}
            >
              {partners.map((partner, index) => {
                const size = getLogoSize(partners.length, "mobile");
                const isAnimated = animatedItems.includes(index);

                return (
                  <div
                    key={`mobile-${partner.id}`}
                    className={`group relative transition-all duration-700 ${
                      isAnimated
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <Image
                      src={partner.icon}
                      alt={partner.name}
                      width={size.width}
                      height={size.height}
                      className="object-contain w-auto h-auto filter grayscale hover:grayscale-0 transition-all duration-300 group-hover:brightness-110 dark:invert hover:scale-105"
                      style={{ height: `${size.height}px` }}
                    />
                  </div>
                );
              })}
            </div>
            {/* Duplicate set for infinite scroll */}
            <div
              className={`flex ${gridConfig.mobile} gap-4 items-center justify-items-center min-w-full`}
            >
              {partners.map((partner, index) => {
                const size = getLogoSize(partners.length, "mobile");

                return (
                  <div
                    key={`mobile-duplicate-${partner.id}`}
                    className="group relative"
                  >
                    <Image
                      src={partner.icon}
                      alt={partner.name}
                      width={size.width}
                      height={size.height}
                      className="object-contain w-auto h-auto filter grayscale hover:grayscale-0 transition-all duration-300 group-hover:brightness-110 dark:invert hover:scale-105"
                      style={{ height: `${size.height}px` }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

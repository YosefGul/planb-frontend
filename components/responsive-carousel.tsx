"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type GameCard = {
  id: number;
  title: string;
  publishDate: string;
  description: string;
};

const gameData: GameCard[] = [
  {
    id: 1,
    title: "Game Name",
    publishDate: "Publish Date",
    description:
      "This area will receive information about the game, details and a summary of some content updates.",
  },
  {
    id: 2,
    title: "Game Name",
    publishDate: "Publish Date",
    description:
      "This area will receive information about the game, details and a summary of some content updates.",
  },
  {
    id: 3,
    title: "Game Name",
    publishDate: "Publish Date",
    description:
      "This area will receive information about the game, details and a summary of some content updates.",
  },
  {
    id: 4,
    title: "Game Name",
    publishDate: "Publish Date",
    description:
      "This area will receive information about the game, details and a summary of some content updates.",
  },
];

export default function ResponsiveCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 768) {
        setVisibleCards(2);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(3);
      } else {
        setVisibleCards(4);
      }

      if (carouselRef.current) {
        const containerWidth = carouselRef.current.clientWidth;
        setCardWidth(containerWidth / visibleCards);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [visibleCards]);

  const maxIndex = Math.max(0, gameData.length - visibleCards);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={carouselRef}>
        <div
          className="flex transition-transform duration-300 ease-in-out gap-4"
          style={{
            transform: `translateX(-${currentIndex * (cardWidth + 16)}px)`,
          }}
        >
          {gameData.map((game) => (
            <div
              key={game.id}
              className="flex-shrink-0"
              style={{ width: cardWidth > 0 ? cardWidth : "auto" }}
            >
              <div className="flex flex-col h-full">
                <div
                  className="rounded-lg overflow-hidden aspect-[1/1.2] mb-4 relative"
                  style={{
                    background:
                      "linear-gradient(to bottom, #222222 0%, #999999 100%)",
                  }}
                >
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-xl font-bold">{game.title}</h3>
                    <p className="text-sm opacity-90">{game.publishDate}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">{game.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end mt-4 gap-2">
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={cn(
            "p-2 rounded-full border border-gray-300",
            currentIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-100"
          )}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentIndex >= maxIndex}
          className={cn(
            "p-2 rounded-full border border-gray-300",
            currentIndex >= maxIndex
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-100"
          )}
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

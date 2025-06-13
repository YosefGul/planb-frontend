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
  {
    id: 5,
    title: "Game Name",
    publishDate: "Publish Date",
    description:
      "This area will receive information about the game, details and a summary of some content updates.",
  },
];

export default function GamePortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);
  const [containerWidth, setContainerWidth] = useState(0);

  // Update sizes based on screen width
  useEffect(() => {
    const updateSizes = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
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

  const maxIndex = Math.max(0, gameData.length - cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  // Calculate the exact pixel amount to translate
  const translateX = cardWidth > 0 ? currentIndex * (cardWidth + 16) : 0;

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={scrollContainerRef}>
        <div
          className="flex gap-4 transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${translateX}px)` }}
        >
          {gameData.map((game) => (
            <div
              key={game.id}
              className="flex-shrink-0"
              style={{
                width:
                  cardWidth > 0
                    ? `${cardWidth}px`
                    : `calc(${100 / cardsPerView}% - ${
                        (16 * (cardsPerView - 1)) / cardsPerView
                      }px)`,
              }}
            >
              <div className="flex h-full flex-col">
                <div
                  className="relative mb-4 aspect-[1/1.2] overflow-hidden rounded-lg"
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

      {/* Navigation buttons */}
      <div className="mt-4 flex justify-end gap-2">
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

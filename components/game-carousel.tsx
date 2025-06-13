"use client";

import { useState, useEffect, useCallback } from "react";
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

export default function GameCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);

  const updateVisibleItems = useCallback(() => {
    if (window.innerWidth < 640) {
      setVisibleItems(1);
    } else if (window.innerWidth < 768) {
      setVisibleItems(2);
    } else if (window.innerWidth < 1024) {
      setVisibleItems(3);
    } else {
      setVisibleItems(4);
    }
  }, []);

  useEffect(() => {
    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, [updateVisibleItems]);

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev + visibleItems >= gameData.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? Math.max(0, gameData.length - visibleItems) : prev - 1
    );
  };

  const visibleCards = gameData.slice(activeIndex, activeIndex + visibleItems);

  // If we don't have enough cards to fill the view, add from the beginning
  if (visibleCards.length < visibleItems) {
    visibleCards.push(...gameData.slice(0, visibleItems - visibleCards.length));
  }

  return (
    <div className="relative w-full">
      <div className="flex gap-4 overflow-hidden">
        {visibleCards.map((game) => (
          <div
            key={game.id}
            className={cn(
              "flex-none transition-all duration-300",
              visibleItems === 1
                ? "w-full"
                : visibleItems === 2
                ? "w-[calc(50%-8px)]"
                : visibleItems === 3
                ? "w-[calc(33.333%-11px)]"
                : "w-[calc(25%-12px)]"
            )}
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

      <div className="flex justify-end mt-4 gap-2">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

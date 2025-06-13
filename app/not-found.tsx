"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Home, Gamepad2 } from "lucide-react";

export default function NotFound() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);

    const interval = setInterval(() => {
      setIsAnimated((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-20 flex min-h-screen flex-col items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="relative">
        {/* Animated game elements */}
        <div className="animate-float absolute left-[-80px] top-[-50px] opacity-70">
          <div className="h-16 w-16 rotate-12 animate-pulse rounded-lg bg-red-500" />
        </div>
        <div className="animate-float-delayed absolute right-[-60px] top-[30px] opacity-70">
          <div className="h-12 w-12 animate-pulse rounded-full bg-blue-500" />
        </div>
        <div className="animate-float-slow absolute bottom-[-40px] left-[20px] opacity-70">
          <div className="h-10 w-10 rotate-45 animate-pulse bg-green-500" />
        </div>

        {/* Main 404 text */}
        <h1 className="select-none bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-[120px] font-bold leading-none text-transparent md:text-[180px]">
          <span
            className={`inline-block ${
              isAnimated ? "animate-bounce-404-4" : ""
            }`}
          >
            4
          </span>
          <span
            className={`inline-block ${
              isAnimated ? "animate-bounce-404-0" : ""
            }`}
          >
            0
          </span>
          <span
            className={`inline-block ${
              isAnimated ? "animate-bounce-404-4-2" : ""
            }`}
          >
            4
          </span>
        </h1>

        {/* Game controller icon */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform opacity-10">
          <Gamepad2 className="h-[300px] w-[300px] text-white" />
        </div>
      </div>

      {/* Message */}
      <div className="relative z-10 mt-8 text-center">
        <h2 className="glitch-text mb-4 text-2xl font-bold text-white md:text-3xl">
          Game Over! Page Not Found
        </h2>
        <p className="mb-8 max-w-md text-gray-300">
          Looks like you've ventured into uncharted territory. This level
          doesn't exist in our game world.
        </p>

        {/* Return home button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:from-purple-700 hover:to-blue-700 hover:shadow-purple-500/25"
        >
          <Home className="h-5 w-5" />
          Return to Main Menu
        </Link>
      </div>

      {/* Pixelated decorations */}
      <div className="pixel pixel-1"></div>
      <div className="pixel pixel-2"></div>
      <div className="pixel pixel-3"></div>
      <div className="pixel pixel-4"></div>
      <div className="pixel pixel-5"></div>
    </div>
  );
}

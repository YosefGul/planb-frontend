"use client";

import { useEffect, useState } from "react";
import { Gamepad2 } from "lucide-react";

export default function SimpleComingSoonPage() {
  const [dotCount, setDotCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev >= 3 ? 1 : prev + 1));
    }, 600);

    return () => clearInterval(interval);
  }, []);

  const dots = ".".repeat(dotCount);

  return (
    <div className="my-20 flex min-h-screen flex-col items-center justify-center rounded-3xl bg-gray-900 p-4">
      <div className="text-center">
        {/* Logo/Icon with pulse animation */}
        <div className="relative mb-8 inline-block">
          <div className="absolute inset-0 animate-ping rounded-full bg-purple-500 opacity-25"></div>
          <div className="relative rounded-full bg-gray-800 p-6">
            <Gamepad2 className="h-16 w-16 text-purple-400" />
          </div>
        </div>

        {/* Coming Soon Text */}
        <h1 className="mb-4 text-5xl font-bold text-white md:text-7xl">
          Coming Soon
        </h1>

        {/* Animated dots */}
        <p className="font-mono text-2xl text-purple-400">
          We're working on something awesome{dots}
        </p>

        {/* Simple animated line */}
        <div className="mx-auto mt-12 w-64">
          <div className="h-1 w-full overflow-hidden rounded-full bg-gray-700">
            <div className="animate-progress h-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="cube cube-1"></div>
        <div className="cube cube-2"></div>
        <div className="cube cube-3"></div>
        <div className="cube cube-4"></div>
        <div className="cube cube-5"></div>
      </div>
    </div>
  );
}

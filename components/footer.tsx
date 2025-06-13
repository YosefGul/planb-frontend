import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dribbble, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-8 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Newsletter Section */}
          <div className="lg:col-span-1">
            <div className="flex gap-3">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition-colors hover:bg-gray-100"
              >
                <Dribbble className="h-4 w-4 text-gray-600" />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition-colors hover:bg-gray-100"
              >
                <div className="flex h-4 w-4 items-center justify-center rounded-sm bg-gray-600">
                  <span className="text-xs font-bold text-white">Be</span>
                </div>
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition-colors hover:bg-gray-100"
              >
                <Instagram className="h-4 w-4 text-gray-600" />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition-colors hover:bg-gray-100"
              >
                <Twitter className="h-4 w-4 text-gray-600" />
              </Link>
            </div>
          </div>

          {/* Explore Section */}
          <div className="lg:col-span-1">
            <h3 className="mb-6 text-lg font-semibold text-gray-900">
              Explore
            </h3>
            <nav className="space-y-4">
              <Link
                href="#"
                className="block text-gray-600 transition-colors hover:text-gray-900"
              >
                Who are we?
              </Link>
              <Link
                href="#"
                className="block text-gray-600 transition-colors hover:text-gray-900"
              >
                Company
              </Link>
              <Link
                href="#"
                className="block text-gray-600 transition-colors hover:text-gray-900"
              >
                Sections
              </Link>
              <Link
                href="#"
                className="block text-gray-600 transition-colors hover:text-gray-900"
              >
                Games
              </Link>
              <Link
                href="#"
                className="block text-gray-600 transition-colors hover:text-gray-900"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Resources Section */}
          <div className="lg:col-span-1">
            <h3 className="mb-6 text-lg font-semibold text-gray-900">
              Resources
            </h3>
            <nav className="space-y-4">
              <Link
                href="#"
                className="block text-gray-600 transition-colors hover:text-gray-900"
              >
                Community
              </Link>
              <Link
                href="#"
                className="block text-gray-600 transition-colors hover:text-gray-900"
              >
                Source Documentation
              </Link>
              <Link
                href="#"
                className="block text-gray-600 transition-colors hover:text-gray-900"
              >
                Protocols
              </Link>
              <Link
                href="#"
                className="block text-gray-600 transition-colors hover:text-gray-900"
              >
                PressKit
              </Link>
            </nav>
          </div>

          {/* Plan B Section */}
          <div className="lg:col-span-1">
            <p className="leading-relaxed text-gray-600">
              We had a plan B and we implemented it.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            {/* Bottom Links */}
            <div className="flex gap-8">
              <Link
                href="#"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                LinkedIn
              </Link>
              <Link
                href="#"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                Dribbble
              </Link>
              <Link
                href="#"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                Pintrest
              </Link>
            </div>

            {/* Studio Text */}
            <p className="text-gray-600">
              {" "}
              Plan B Games and Animation Studio 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

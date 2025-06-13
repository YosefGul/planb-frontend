"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      {/* Desktop Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/">
            <Image
              className="mr-8 transition-all duration-500 lg:mr-2 xl:hover:scale-110"
              priority
              src="/planb-logo.png"
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden items-center gap-12 lg:flex">
            {/*<
             <div>
              DropdownMenu>
                <DropdownMenuTrigger className="header-menu-trigger flex items-center gap-1 font-medium text-[#20202081] hover:text-black active:text-black data-[state=open]:text-black">
                  Games
                  <ChevronDown className="mt-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="bottom"
                  align="start"
                  className="bg-white"
                >
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger className="header-menu-trigger flex items-center gap-1 font-medium text-[#20202081] hover:text-black active:text-black data-[state=open]:text-black">
                  Agency
                  <ChevronDown className="mt-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="bottom"
                  align="start"
                  className="bg-white"
                >
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            */}
            <div>
              <Link href="/about-us" className="header-menu-trigger">
                About Us
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-12 lg:flex">
          {/* <button className="header-menu-trigger">PressKits</button> */}
          <Link href="/contact" className="header-menu-trigger">
            Contact
          </Link>
          <div className="relative">
            <Input
              className="search-input rounded-3xl border border-gray-400 py-2 pl-6 pr-10 placeholder:!text-[#20202081]"
              type="text"
              placeholder="I'am looking for..."
            />
            <Search className="absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="p-2 text-[#20202081] transition-colors hover:text-black lg:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden z-40 absolute top-15 left-0 right-0 bg-white border-t border-gray-200 shadow-lg transform transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <div className="space-y-6 p-6">
          {/* Mobile Search */}
          <div className="relative">
            <Input
              className="search-input w-full rounded-3xl border border-gray-400 py-2 pl-6 pr-10 placeholder:!text-[#20202081]"
              type="text"
              placeholder="I'am looking for..."
            />
            <Search className="absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          </div>

          {/* Mobile Navigation */}
          <div className="space-y-4">
            {/* <div>
              <DropdownMenu>
                <DropdownMenuTrigger className="header-menu-trigger flex w-full items-center justify-start gap-1 font-medium text-[#20202081] hover:text-black active:text-black data-[state=open]:text-black">
                  Games
                  <ChevronDown className="mt-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="bottom"
                  align="start"
                  className="bg-white"
                >
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div>
              <DropdownMenu>
                <DropdownMenuTrigger className="header-menu-trigger flex w-full items-center justify-start gap-1 font-medium text-[#20202081] hover:text-black active:text-black data-[state=open]:text-black">
                  Agency
                  <ChevronDown className="mt-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="bottom"
                  align="start"
                  className="bg-white"
                >
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <button className="header-menu-trigger w-full text-left">
              Company
            </button>
            <button className="header-menu-trigger w-full text-left">
              PressKits
            </button> */}
            <Link href="/about-us" className="header-menu-trigger">
              About Us
            </Link>
            <Link
              href="/contact"
              className="header-menu-trigger block w-full text-left"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

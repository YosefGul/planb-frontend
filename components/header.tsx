"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import ToggleThemeButton from "@/components/toggle-theme-button";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
							className="mr-8 transition-all duration-500 lg:mr-2 xl:hover:scale-110 dark:hidden h-auto w-auto"
							priority
							src="/planb-logo.png"
							alt="logo"
							width={100}
							height={100}
						/>
						<Image
							className="mr-8 transition-all duration-500 lg:mr-2 xl:hover:scale-110 hidden dark:block h-auto w-auto"
							priority
							src="/planb-logo-dark.png"
							alt="logo"
							width={100}
							height={100}
						/>
					</Link>
					{/* Desktop Navigation */}
					<div className="hidden items-center gap-12 lg:flex">
						{/* <div>
							<DropdownMenu>
								<DropdownMenuTrigger className="header-menu-trigger dark:text-white flex items-center gap-1 font-medium text-[#20202081] hover:text-black active:text-black data-[state=open]:text-black">
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
						</div> */}
						{/* <div>
							<DropdownMenu>
								<DropdownMenuTrigger className="header-menu-trigger dark:text-white flex items-center gap-1 font-medium text-[#20202081] hover:text-black active:text-black data-[state=open]:text-black">
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
						</div> */}

						<div>
							<Link href="/about-us" className="header-menu-trigger">
								About Us
							</Link>
						</div>
					</div>
				</div>

				{/* Desktop Right Side */}
				<div className="hidden items-center gap-12 lg:flex">
					{/* <Link href="/press-kits" className="header-menu-trigger">
						PressKits
					</Link> */}
					<Link href="/contact" className="header-menu-trigger">
						Contact
					</Link>
					<div className="relative">
						<Input
							className="search-input rounded-3xl border italic border-gray-400 py-2 pl-6 pr-12 placeholder:!text-[#20202081] dark:placeholder:!text-[#ffffff81]"
							type="text"
							placeholder="I'am looking for..."
						/>
						<Search className="absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
					</div>
					<ToggleThemeButton />
				</div>

				{/* Mobile Hamburger Button */}
				<div className="flex items-center gap-2 lg:hidden">
					<div>
						<ToggleThemeButton />
					</div>
					<Button
						className="p-2 text-[#20202081] bg-transparent hover:bg-transparent dark:text-[#ffffff81] transition-colors hover:text-black dark:hover:text-white lg:hidden"
						onClick={toggleMenu}
					>
						{isMenuOpen ? (
							<X className="size-7" />
						) : (
							<Menu className="size-7" />
						)}
					</Button>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={`lg:hidden z-40 absolute top-15 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg transform transition-all duration-300 ease-in-out ${
					isMenuOpen
						? "opacity-100 translate-y-0 visible"
						: "opacity-0 -translate-y-4 invisible"
				}`}
			>
				<div className="space-y-6 p-6">
					{/* Mobile Search */}
					<div className="relative">
						<Input
							className="search-input w-full rounded-3xl border border-gray-400 dark:border-gray-600 py-2 pl-6 pr-10 placeholder:!text-[#20202081] dark:placeholder:!text-[#ffffff81] bg-white dark:bg-gray-800 text-black dark:text-white"
							type="text"
							placeholder="I'am looking for..."
						/>
						<Search className="absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
					</div>

					{/* Mobile Navigation */}
					<div className="space-y-4">
						{/* <div>
							<DropdownMenu>
								<DropdownMenuTrigger className="header-menu-trigger py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors dark:text-white flex w-full items-center justify-start gap-1 font-medium text-[#20202081] hover:text-black active:text-black data-[state=open]:text-black">
									Games
									<ChevronDown className="mt-1 h-4 w-4" />
								</DropdownMenuTrigger>
								<DropdownMenuContent
									side="bottom"
									align="start"
									className="bg-white dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900"
								>
									<DropdownMenuItem className="dark:hover:bg-gray-700 cursor-pointer">
										Profile
									</DropdownMenuItem>
									<DropdownMenuItem className="dark:hover:bg-gray-700 cursor-pointer">
										Billing
									</DropdownMenuItem>
									<DropdownMenuItem className="dark:hover:bg-gray-700 cursor-pointer">
										Team
									</DropdownMenuItem>
									<DropdownMenuItem className="dark:hover:bg-gray-700 cursor-pointer">
										Subscription
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div> */}

						{/* <div>
							<DropdownMenu>
								<DropdownMenuTrigger className="header-menu-trigger py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors dark:text-white flex w-full items-center justify-start gap-1 font-medium text-[#20202081] hover:text-black active:text-black data-[state=open]:text-black">
									Agency
									<ChevronDown className="mt-1 h-4 w-4" />
								</DropdownMenuTrigger>
								<DropdownMenuContent
									side="bottom"
									align="start"
									className="bg-white dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900"
								>
									<DropdownMenuItem className="dark:hover:bg-gray-700 cursor-pointer">
										Profile
									</DropdownMenuItem>
									<DropdownMenuItem className="dark:hover:bg-gray-700 cursor-pointer">
										Billing
									</DropdownMenuItem>
									<DropdownMenuItem className="dark:hover:bg-gray-700 cursor-pointer">
										Team
									</DropdownMenuItem>
									<DropdownMenuItem className="dark:hover:bg-gray-700 cursor-pointer">
										Subscription
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div> */}

						{/* <Link
							href="/company"
							className="header-menu-trigger block w-full text-left py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
						>
							Company
						</Link> */}
						{/* <Link
							href="/press-kits"
							className="header-menu-trigger block w-full text-left py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
						>
							PressKits
						</Link> */}
						<Link
							href="/about-us"
							className="header-menu-trigger block w-full text-left py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
						>
							About Us
						</Link>
						<Link
							href="/contact"
							className="header-menu-trigger block w-full text-left py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
						>
							Contact
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Search, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { Input } from "@/components/ui/input"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='relative'>
      {/* Desktop Header */}
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-12'>
          <Link href="/">
            <Image className='mr-12 2xl:hover:scale-110 transition-all duration-500' priority src="/planb-logo.png" alt="logo" width={100} height={100} />
          </Link>
          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center gap-12'>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger className='header-menu-trigger flex items-center gap-1 font-medium text-[#20202081] hover:text-black active:text-black data-[state=open]:text-black'>
                  Games 
                  <ChevronDown className='w-4 h-4 mt-1' />
                </DropdownMenuTrigger>
                <DropdownMenuContent side="bottom" align="start" className='bg-white'>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger className='header-menu-trigger flex items-center gap-1 font-medium text-[#20202081] hover:text-black active:text-black data-[state=open]:text-black'>
                  Agency 
                  <ChevronDown className='w-4 h-4 mt-1' />
                </DropdownMenuTrigger>
                <DropdownMenuContent side="bottom" align="start" className='bg-white'>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div><button className='header-menu-trigger'>Company</button></div>
          </div>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex items-center gap-12">
          <button className='header-menu-trigger'>PressKits</button>
          <Link href="/contact" className='header-menu-trigger'>Contact</Link>
          <div className='relative'>
            <Input className='search-input border border-gray-400 rounded-3xl pl-6 pr-10 py-2 placeholder:!text-[#20202081]' type="text" placeholder="I'am looking for..." />
            <Search className='w-4 h-4 absolute right-5 top-1/2 -translate-y-1/2 text-gray-500' />
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className='lg:hidden p-2 text-[#20202081] hover:text-black transition-colors'
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden z-40 absolute top-15 left-0 right-0 bg-white border-t border-gray-200 shadow-lg transform transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
      }`}>
        <div className='p-6 space-y-6'>
          {/* Mobile Search */}
          <div className='relative'>
            <Input className='search-input border border-gray-400 rounded-3xl pl-6 pr-10 py-2 placeholder:!text-[#20202081] w-full' type="text" placeholder="I'am looking for..." />
            <Search className='w-4 h-4 absolute right-5 top-1/2 -translate-y-1/2 text-gray-500' />
          </div>

          {/* Mobile Navigation */}
          <div className='space-y-4'>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger className='header-menu-trigger flex items-center gap-1 font-medium text-[#20202081] hover:text-black active:text-black data-[state=open]:text-black w-full justify-start'>
                  Games 
                  <ChevronDown className='w-4 h-4 mt-1' />
                </DropdownMenuTrigger>
                <DropdownMenuContent side="bottom" align="start" className='bg-white'>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger className='header-menu-trigger flex items-center gap-1 font-medium text-[#20202081] hover:text-black active:text-black data-[state=open]:text-black w-full justify-start'>
                  Agency 
                  <ChevronDown className='w-4 h-4 mt-1' />
                </DropdownMenuTrigger>
                <DropdownMenuContent side="bottom" align="start" className='bg-white'>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <button className='header-menu-trigger text-left w-full'>Company</button>
            <button className='header-menu-trigger text-left w-full'>PressKits</button>
            <Link href="/contact" className='header-menu-trigger block w-full text-left'>Contact</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

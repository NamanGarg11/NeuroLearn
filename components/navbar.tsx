"use client";

import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AnimatePresence, motion } from "framer-motion";
import { Brain, LayoutDashboard, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-background/50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 w-1/5">
            <Link
              href="/#"
              className="flex items-center cursor-pointer hover:opacity-90 transition-all duration-300 group whitespace-nowrap"
            >
              <Brain className="me-[5px] h-5 w-5 text-[#8B5CF6]" />
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-[#8B5CF6] group-hover:to-[#3B82F6] transition-all duration-300">
                Vidhya AI
              </span>
            </Link>
          </div>

          {/* Center Navigation Links - Hidden on Mobile */}
          <div className="hidden md:flex items-center justify-center gap-4 w-3/5">
            <Link href="/#" className="cursor-pointer">
              <Button
                variant="ghost"
                className="rounded-full cursor-pointer hover:bg-[#8B5CF6]/10 hover:text-[#8B5CF6] transition-all duration-300 hover:scale-105"
              >
                Home
              </Button>
            </Link>
            <Link href="/about" className="cursor-pointer">
              <Button
                variant="ghost"
                className="rounded-full cursor-pointer hover:bg-[#8B5CF6]/10 hover:text-[#8B5CF6] transition-all duration-300 hover:scale-105"
              >
                About Us
              </Button>
            </Link>
            <Link href="/contact" className="cursor-pointer">
              <Button
                variant="ghost"
                className="rounded-full cursor-pointer hover:bg-[#8B5CF6]/10 hover:text-[#8B5CF6] transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center justify-end space-x-2 w-1/5">
            {/* Desktop Dashboard Button */}
            <SignedIn>
              <div className="hidden md:flex items-center">
                <Link href="/dashboard" className="cursor-pointer">
                  <Button
                    variant="outline"
                    className="rounded-full flex items-center gap-2 cursor-pointer border-[#8B5CF6]/30 text-[#8B5CF6] hover:bg-gradient-to-r hover:from-[#8B5CF6] hover:to-[#3B82F6] hover:text-white hover:border-[#8B5CF6] transition-all duration-300 hover:scale-105"
                  >
                    <LayoutDashboard className="h-4 w-4" />
                    Dashboard
                  </Button>
                </Link>
              </div>
            </SignedIn>

            {/* Desktop Sign In Button */}
            <SignedOut>
              <div className="flex items-center gap-2">
                <Link href="/sign-in" className="cursor-pointer">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full flex items-center gap-2 border-[#8B5CF6]/30 text-[#8B5CF6] hover:bg-gradient-to-r hover:from-[#8B5CF6] hover:to-[#3B82F6] hover:text-white hover:border-[#8B5CF6] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#8B5CF6]/25 px-4 py-2"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="/sign-up" className="cursor-pointer">
                  <Button
                    size="sm"
                    className="rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white hover:from-[#3B82F6] hover:to-[#8B5CF6] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#8B5CF6]/25 px-4 py-2"
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            </SignedOut>

            {/* Profile Button */}
            <SignedIn>
              <div className="flex items-center">
                <UserButton />
              </div>
            </SignedIn>

            {/* Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex items-center p-2 rounded-full hover:bg-[#8B5CF6]/10"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-[#8B5CF6]" />
              ) : (
                <Menu className="h-6 w-6 text-[#8B5CF6]" />
              )}
            </button>
          </div>
        </div>

        {/* Animated Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-background/95 border-t border-border"
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="py-4 px-2 space-y-3"
              >
                <Link href="/#" className="block">
                  <Button
                    variant="ghost"
                    className="w-full text-left rounded-full hover:bg-[#8B5CF6]/10 hover:text-[#8B5CF6]"
                  >
                    Home
                  </Button>
                </Link>
                <Link href="/about" className="block">
                  <Button
                    variant="ghost"
                    className="w-full text-left rounded-full hover:bg-[#8B5CF6]/10 hover:text-[#8B5CF6]"
                  >
                    About Us
                  </Button>
                </Link>
                <Link href="/contact" className="block">
                  <Button
                    variant="ghost"
                    className="w-full text-left rounded-full hover:bg-[#8B5CF6]/10 hover:text-[#8B5CF6]"
                  >
                    Contact Us
                  </Button>
                </Link>

                {/* Mobile Dashboard Button */}
                <SignedIn>
                  <Link href="/dashboard" className="block">
                    <Button
                      variant="outline"
                      className="w-full rounded-full flex items-center justify-center gap-2 border-[#8B5CF6]/30 text-[#8B5CF6] hover:bg-gradient-to-r hover:from-[#8B5CF6] hover:to-[#3B82F6] hover:text-white"
                    >
                      <LayoutDashboard className="h-4 w-4" />
                      Dashboard
                    </Button>
                  </Link>
                </SignedIn>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

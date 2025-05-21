"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Play, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Solutions", href: "/solutions" },
  { name: "Careers", href: "/careers" },
  { name: "Industries", href: "/industries" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Media Hub", href: "/media-hub" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  // Removed scroll effect since we want constant background
  const scrolled = true // Always show background

  const handleNavClick = (href: string) => {
    setIsOpen(false)

    if (href === "/" && pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50",
        "bg-black/80 backdrop-blur-md border-b border-slate-800" // Constant styling
      )}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
  <motion.div
    initial={{ rotate: 0 }}
    animate={{ rotate: 360 }}
    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
    className="relative w-8 h-8"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full opacity-70 blur-sm" />
    <div className="absolute inset-0 flex items-center justify-center">
      <img
        src="https://media.licdn.com/dms/image/v2/C510BAQEhP-s4ejt1Ag/company-logo_200_200/company-logo_200_200/0/1630602071829/1_play_sports_pte_ltd_logo?e=2147483647&v=beta&t=FwDmmB6ta1TAim6qCn08b8pZlhsCDwku2nN9orYWzxw" 
        alt="Custom Image"
        className="h-8 w-8" 
      />
    </div>
  </motion.div>
  <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
    1Play Global
  </span>
</Link>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                pathname === item.href
                  ? "text-white bg-slate-800"
                  : "text-slate-100 hover:text-white hover:bg-slate-800/50",
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button
            variant="outline"
            size="icon"
            className="ml-2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Link href="/contact">
            <Button className="text-slate-300 ml-2 bg-gradient-to-r from-red-600 to-cyan-600 hover:from-red-700 hover:to-cyan-700">
              Request Demo
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <Button
            variant="outline"
            size="icon"
            className="mr-2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-md border-b border-slate-800"
          >
            <div className="container mx-auto px-4 py-3">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      pathname === item.href
                        ? "text-white bg-slate-800"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/50",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link href="/contact">
                  <Button className="mt-2 w-full bg-gradient-to-r from-red-600 to-cyan-600 hover:from-red-700 hover:to-cyan-700 text-slate-300">
                    Request Demo
                  </Button>
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
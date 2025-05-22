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
    animate={{ rotate: 0 }}
    transition={{ duration: 0, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
    className="relative w-8 h-8"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full opacity-70 blur-sm" />
    <div className="absolute inset-0 flex items-center justify-center">
      <img
        src="./logo.jpeg" 
        alt="Custom Image"
        className="h-8 w-8" 
      />
    </div>
  </motion.div>
  <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-cyan-500">
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

      
    </header>
  )
}
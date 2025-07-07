"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // const handleNavClick = (sectionId: string) => {
  //   const element = document.getElementById(sectionId)
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" })
  //   }
  // }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-4 md:px-6 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          {/* <img src="/logo-sikumbang.webp" className="h-[28px]" alt="Logo Sikumbang" /> */}
          <Image alt="logo si kumbang" src={"/logo-sikumbang.webp"} height={64} width={64} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Beranda</Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">Tentang Kami</Link>
          <Link href="/product" className="text-sm font-medium hover:text-primary transition-colors">Daftar Hunian</Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">Artikel</Link>
        </nav>

        {/* Kontak & Hamburger */}
        <div className="flex items-center space-x-4">
          <Link href="#contact">
            <Button className="hidden md:flex items-center gap-1">
              <Phone className="h-4 w-4" />
              Hubungi Kami
            </Button>
          </Link>

          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden text-primary"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="flex flex-col p-4 space-y-3 text-sm">
            <Link href="/" className="hover:text-primary" onClick={toggleMobileMenu}>Beranda</Link>
            <Link href="/about" className="hover:text-primary" onClick={toggleMobileMenu}>Tentang Kami</Link>
            <Link href="/product" className="hover:text-primary" onClick={toggleMobileMenu}>Daftar Hunian</Link>
            <Link href="/blog" className="hover:text-primary" onClick={toggleMobileMenu}>Artikel</Link>
            <Link href="#contact" onClick={toggleMobileMenu}>
              <Button className="w-full flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                Hubungi Kami
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

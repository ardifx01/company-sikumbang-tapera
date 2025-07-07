import { Button } from "@/components/ui/button"
import { Home, Phone } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-4 md:px-6 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Home className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">PropertyHub</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#home" className="text-sm font-medium hover:text-primary transition-colors">
            Beranda
          </Link>
          <Link href="#properties" className="text-sm font-medium hover:text-primary transition-colors">
            Properti
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            Tentang
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Kontak
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>+62 812-3456-7890</span>
            </div>
          </div>
          <Button>Hubungi Kami</Button>
        </div>
      </div>
    </header>
  )
}

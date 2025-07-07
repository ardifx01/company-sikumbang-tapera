import { Button } from "@/components/ui/button"
import { Search, MapPin } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section
      id="home"
      className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10"
    >
      <div className="px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Temukan Rumah Impian Anda
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Jelajahi ribuan properti terbaik di seluruh Indonesia. Dari apartemen modern hingga rumah mewah, kami
                membantu Anda menemukan tempat yang sempurna untuk disebut rumah.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                Cari Properti
              </Button>
              <Button variant="outline" size="lg">
                Konsultasi Gratis
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Properti</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Klien Puas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Kota</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Modern House"
                className="aspect-[4/3] overflow-hidden rounded-xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <MapPin className="h-4 w-4 text-primary" />
                    Jakarta Selatan
                  </div>
                  <div className="text-lg font-bold">Rp 2.5 Miliar</div>
                  <div className="text-sm text-muted-foreground">Rumah Modern 3 Lantai</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

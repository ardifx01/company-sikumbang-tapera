import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Bed, Bath, Square, Heart, Eye } from "lucide-react"
import Image from "next/image"

const properties = [
  {
    id: 1,
    title: "Rumah Modern Minimalis",
    location: "Jakarta Selatan",
    price: "Rp 2.5 Miliar",
    image: "/placeholder.svg?height=300&width=400",
    beds: 4,
    baths: 3,
    area: "200 m²",
    type: "Dijual",
    featured: true,
  },
  {
    id: 2,
    title: "Apartemen Luxury View City",
    location: "Jakarta Pusat",
    price: "Rp 1.8 Miliar",
    image: "/placeholder.svg?height=300&width=400",
    beds: 2,
    baths: 2,
    area: "85 m²",
    type: "Dijual",
    featured: true,
  },
  {
    id: 3,
    title: "Villa Tropis dengan Kolam Renang",
    location: "Bandung",
    price: "Rp 3.2 Miliar",
    image: "/placeholder.svg?height=300&width=400",
    beds: 5,
    baths: 4,
    area: "350 m²",
    type: "Dijual",
    featured: true,
  },
  {
    id: 4,
    title: "Townhouse Strategis",
    location: "Surabaya",
    price: "Rp 1.2 Miliar",
    image: "/placeholder.svg?height=300&width=400",
    beds: 3,
    baths: 2,
    area: "120 m²",
    type: "Dijual",
    featured: false,
  },
  {
    id: 5,
    title: "Rumah Cluster Eksklusif",
    location: "Tangerang",
    price: "Rp 950 Juta",
    image: "/placeholder.svg?height=300&width=400",
    beds: 3,
    baths: 2,
    area: "110 m²",
    type: "Dijual",
    featured: false,
  },
  {
    id: 6,
    title: "Penthouse Mewah",
    location: "Jakarta Utara",
    price: "Rp 4.5 Miliar",
    image: "/placeholder.svg?height=300&width=400",
    beds: 3,
    baths: 3,
    area: "180 m²",
    type: "Dijual",
    featured: true,
  },
]

export function FeaturedProperties() {
  return (
    <section id="properties" className="py-16">
      <div className="px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Properti Unggulan</h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            Koleksi properti terbaik pilihan kami dengan lokasi strategis dan fasilitas lengkap
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant={property.type === "Dijual" ? "default" : "secondary"}>{property.type}</Badge>
                </div>
                {property.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="destructive">Featured</Badge>
                  </div>
                )}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <Button size="icon" variant="secondary" className="h-8 w-8">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="h-8 w-8">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{property.title}</h3>
                    <div className="flex items-center text-muted-foreground text-sm mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      {property.location}
                    </div>
                    <div className="text-2xl font-bold text-primary">{property.price}</div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Bed className="h-4 w-4" />
                      <span>{property.beds} Kamar</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="h-4 w-4" />
                      <span>{property.baths} Kamar Mandi</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square className="h-4 w-4" />
                      <span>{property.area}</span>
                    </div>
                  </div>

                  <Button className="w-full">Lihat Detail</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Lihat Semua Properti
          </Button>
        </div>
      </div>
    </section>
  )
}

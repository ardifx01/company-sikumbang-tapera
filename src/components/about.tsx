import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Home, TrendingUp } from "lucide-react"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-16 bg-muted/50">
      <div className="px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Mengapa Memilih PropertyHub?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                Dengan pengalaman lebih dari 10 tahun di industri properti, kami berkomitmen memberikan pelayanan
                terbaik untuk membantu Anda menemukan properti impian.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Berpengalaman</h3>
                    <p className="text-sm text-muted-foreground">10+ tahun di industri properti</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Tim Profesional</h3>
                    <p className="text-sm text-muted-foreground">Agent bersertifikat dan terpercaya</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Home className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Properti Berkualitas</h3>
                    <p className="text-sm text-muted-foreground">Seleksi properti terbaik</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Harga Kompetitif</h3>
                    <p className="text-sm text-muted-foreground">Penawaran terbaik di pasar</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="About Us"
              className="aspect-[4/3] overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

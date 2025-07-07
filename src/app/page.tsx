"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Home, Users, TrendingUp, Phone, Mail, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Homepage() {
  const handleNavClick = (sectionId: string) => {
    // setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header></Header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
          <Image
            src="https://gardens.id/wp-content/uploads/2024/09/Perumahan-Subsidi-di-Indonesia.jpeg"
            alt="Luxury real estate property"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-20 container px-4 md:px-6 text-center text-white text-shadow-lg">
            {/* <Badge variant="secondary" className="mb-4">
              #1 Real Estate Agency
            </Badge> */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Mewujudkan Rumah Layak
              <span className="text-gray-400 block">untuk Semua</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Memberikan akses kepemilikan rumah yang layak, terjangkau, dan berkeadilan bagi seluruh rakyat Indonesia melalui program-program pemerintah yang transparan dan inklusif
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 hover:cursor-pointer">
                <Link href="/product">
                  Cari Rumah
                </Link>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:cursor-pointer"
                onClick={() => handleNavClick("program")}
              >
                Lihat Program
              </Button>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="w-full py-16 md:py-24 bg-muted/50">
          <div className="px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <Badge variant="outline">Tentang Kami</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Mewujudkan Hunian Layak dan Terjangkau untuk Seluruh Rakyat Indonesia
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Sejak 2010, kami berkomitmen menyediakan akses terhadap perumahan yang layak, terjangkau, dan berkualitas
                    bagi seluruh lapisan masyarakat. Melalui kolaborasi dengan berbagai pihak dan program pemerintah, kami
                    mendukung terciptanya kehidupan yang lebih baik melalui kepemilikan rumah yang adil dan merata.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">10.000+</div>
                    <div className="text-sm text-muted-foreground">Keluarga Terbantu</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Tahun Pengabdian</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">100+</div>
                    <div className="text-sm text-muted-foreground">Kawasan Perumahan</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Nilai & Komitmen Kami</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      Transparansi dan akuntabilitas dalam setiap proses
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      Fokus pada kesejahteraan masyarakat berpenghasilan rendah
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      Inovasi dalam pengelolaan dan distribusi properti rakyat
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="https://gardens.id/wp-content/uploads/2024/09/Perumahan-Subsidi-di-Indonesia.jpeg"
                  alt="Program Perumahan Pemerintah"
                  width={600}
                  height={500}
                  className="w-[600px] h-[500px] rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-sm">Tingkat Kepuasan Warga</div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Services Section */}
        <section id="program" className="w-full py-16 md:py-24 bg-muted/50">
          <div className="px-4 md:px-6">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                Program Pemerintah
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Program Unggulan untuk Akses Hunian yang Layak</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Pemerintah hadir memberikan solusi properti yang terjangkau, adil, dan berkelanjutan bagi masyarakat.
                Jelajahi program yang dirancang untuk mendukung impian memiliki rumah sendiri.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Rumah Subsidi</h3>
                  <p className="text-muted-foreground mb-4">
                    Program rumah dengan harga terjangkau dan cicilan ringan khusus untuk masyarakat berpenghasilan rendah.
                  </p>
                  <Button variant="ghost" className="p-0 h-auto font-semibold text-primary">
                    Lihat Detail <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Bantuan Renovasi Rumah</h3>
                  <p className="text-muted-foreground mb-4">
                    Dukungan finansial bagi masyarakat yang ingin memperbaiki rumah tidak layak huni agar menjadi lebih sehat dan aman.
                  </p>
                  <Button variant="ghost" className="p-0 h-auto font-semibold text-primary">
                    Lihat Detail <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">KPR Bersubsidi</h3>
                  <p className="text-muted-foreground mb-4">
                    Skema Kredit Pemilikan Rumah (KPR) dengan bunga rendah dan tenor panjang yang difasilitasi pemerintah.
                  </p>
                  <Button variant="ghost" className="p-0 h-auto font-semibold text-primary">
                    Lihat Detail <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-12">
              <Button size="lg">
                Lihat Semua Program
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>


        {/* Testimonials Section */}
        <section className="w-full py-16 md:py-24 bg-muted/50">
          <div className="px-4 md:px-6">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                Testimoni Masyarakat
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Cerita Nyata dari Penerima Manfaat</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dengarkan langsung kisah para warga yang telah merasakan manfaat dari program hunian pemerintah. Karena rumah layak adalah hak setiap warga negara.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4">
                    &quot;Dulu kami hanya bisa menyewa rumah petakan. Setelah mengikuti program rumah subsidi, kami akhirnya memiliki rumah sendiri dengan cicilan ringan.&quot;
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Budi & Siti</div>
                      <div className="text-sm text-muted-foreground">Penerima Rumah Subsidi</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4">
                    &quot;Rumah kami sempat rusak parah dan tidak layak huni. Alhamdulillah, bantuan renovasi dari pemerintah membuat rumah kami kembali nyaman dan aman.&quot;
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Pak Slamet</div>
                      <div className="text-sm text-muted-foreground">Penerima Bantuan Renovasi</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4">
                    &quot;Program KPR subsidi sangat membantu kami memiliki rumah impian, dengan bunga rendah dan proses yang mudah. Terima kasih kepada semua pihak!&quot;
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Ayu & Rendi</div>
                      <div className="text-sm text-muted-foreground">Penerima KPR Subsidi</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section id="contact" className="w-full py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap Bermitra dengan Tapera?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Jadilah bagian dari solusi hunian nasional. Tim kami siap membantu Anda memahami proses kemitraan dengan BP Tapera.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Phone className="mr-2 h-5 w-5" />
                Hubungi Kami: (021) 1234 5678
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                <Mail className="mr-2 h-5 w-5" />
                Ajukan Pertanyaan
              </Button>
            </div>
          </div>
        </section>

      </main>

      <Footer></Footer>
    </div>
  )
}

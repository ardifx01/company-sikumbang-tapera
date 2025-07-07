// import { Home, Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full py-12 bg-background border-t">
      <div className="px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Identitas Instansi */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg">
                {/* <Home className="h-5 w-5 text-primary-foreground" /> */}
                <Image
                  src={"/logo-sikumbang.webp"}
                  // src={'/logo-sikumbang-png.png'}
                  alt="Logo Sikumbang"
                  width={128}
                  height={128}
                />
              </div>
              <div>
                <h3 className="font-bold">SI Kumbang Tapera</h3>
                <p className="text-xs text-muted-foreground">Sistem Informasi Kemitraan Pengembang</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Portal resmi BP Tapera untuk mendukung kemitraan strategis bersama pengembang dalam menyediakan hunian terjangkau dan berkelanjutan bagi masyarakat Indonesia.
            </p>
          </div>

          {/* Navigasi Program */}
          <div>
            <h4 className="font-semibold mb-4">Program Tapera</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/program/hunian" className="text-muted-foreground hover:text-primary">
                  Hunian Tapera
                </Link>
              </li>
              <li>
                <Link href="/program/kemitraan" className="text-muted-foreground hover:text-primary">
                  Kemitraan Pengembang
                </Link>
              </li>
              <li>
                <Link href="/program/simulasi" className="text-muted-foreground hover:text-primary">
                  Simulasi Pembiayaan
                </Link>
              </li>
              <li>
                <Link href="/program/daftar" className="text-muted-foreground hover:text-primary">
                  Cara Mendaftar
                </Link>
              </li>
            </ul>
          </div>

          {/* Informasi Publik */}
          <div>
            <h4 className="font-semibold mb-4">Informasi & Bantuan</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/pengumuman" className="text-muted-foreground hover:text-primary">
                  Pengumuman
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/berita" className="text-muted-foreground hover:text-primary">
                  Berita & Artikel
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-muted-foreground hover:text-primary">
                  Kontak & Dukungan
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak Resmi */}
          <div>
            <h4 className="font-semibold mb-4">Kontak Resmi</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Badan Pengelola Tabungan Perumahan Rakyat (BP Tapera)</li>
              <li>Jl. Wijaya I No. 33, Kebayoran Baru, Jakarta Selatan</li>
              <li>Telp: (021) 1234 5678</li>
              <li>Email: <a href="mailto:sikumbang@tapera.go.id" className="hover:text-primary">sikumbang@tapera.go.id</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BP Tapera - SI Kumbang. Seluruh hak cipta dilindungi undang-undang.</p>
        </div>
      </div>
    </footer>
    // <footer className="bg-muted/50 border-t">
    //   <div className="px-4 md:px-6 py-12">
    //     <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
    //       <div className="space-y-4">
    //         <Link href="/" className="flex items-center space-x-2">
    //           <Home className="h-6 w-6 text-primary" />
    //           <span className="text-xl font-bold">PropertyHub</span>
    //         </Link>
    //         <p className="text-muted-foreground">
    //           Platform properti terpercaya untuk membantu Anda menemukan rumah impian dengan pelayanan profesional dan
    //           terpercaya.
    //         </p>
    //         <div className="flex space-x-4">
    //           <Link href="#" className="text-muted-foreground hover:text-primary">
    //             <Facebook className="h-5 w-5" />
    //           </Link>
    //           <Link href="#" className="text-muted-foreground hover:text-primary">
    //             <Instagram className="h-5 w-5" />
    //           </Link>
    //           <Link href="#" className="text-muted-foreground hover:text-primary">
    //             <Twitter className="h-5 w-5" />
    //           </Link>
    //           <Link href="#" className="text-muted-foreground hover:text-primary">
    //             <Youtube className="h-5 w-5" />
    //           </Link>
    //         </div>
    //       </div>

    //       <div className="space-y-4">
    //         <h3 className="text-lg font-semibold">Layanan</h3>
    //         <ul className="space-y-2 text-muted-foreground">
    //           <li>
    //             <Link href="#" className="hover:text-primary">
    //               Jual Properti
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="#" className="hover:text-primary">
    //               Beli Properti
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="#" className="hover:text-primary">
    //               Sewa Properti
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="#" className="hover:text-primary">
    //               Konsultasi
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="#" className="hover:text-primary">
    //               Valuasi Properti
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>

    //       <div className="space-y-4">
    //         <h3 className="text-lg font-semibold">Lokasi</h3>
    //         <ul className="space-y-2 text-muted-foreground">
    //           <li>
    //             <Link href="#" className="hover:text-primary">
    //               Jakarta
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="#" className="hover:text-primary">
    //               Bandung
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="#" className="hover:text-primary">
    //               Surabaya
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="#" className="hover:text-primary">
    //               Medan
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="#" className="hover:text-primary">
    //               Semarang
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>

    //       <div className="space-y-4">
    //         <h3 className="text-lg font-semibold">Bantuan</h3>
    //         <ul className="space-y-2 text-muted-foreground">
    //           <li>
    //             <Link href="#" className="hover:text-primary">
    //               FAQ
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="#" className="hover:text-primary">
    //               Panduan
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="#" className="hover:text-primary">
    //               Syarat & Ketentuan
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="#" className="hover:text-primary">
    //               Kebijakan Privasi
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="#" className="hover:text-primary">
    //               Hubungi Kami
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>

    //     <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
    //       <p>&copy; {new Date().getFullYear()} PropertyHub. Semua hak dilindungi.</p>
    //     </div>
    //   </div>
    // </footer>
  )
}

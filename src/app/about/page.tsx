"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Sparkles,
    Play,
    ArrowRight,
    TrendingUp,
    Heart,
    Users,
    Star,
    Rocket,
    Target,
    Lightbulb,
    Building,
    Quote,
    CheckCircle,
    Shield,
    Award,
    TreePine,
    Briefcase,
} from "lucide-react"
import { Clock, GraduationCap, Home, Car, Coffee } from "lucide-react"
import { Header } from "@/components/header"
import axios from "axios"
import { useEffect, useState } from "react"
import { Footer } from "@/components/footer"

export default function MainSection() {

    type RandomUserData = {
        results: Array<{
            picture: {
                large: string;
                medium: string;
                thumbnail: string;
            };
            [key: string]: any;
        }>;
        [key: string]: any;
    };

    const [randomData, setRandomData] = useState<RandomUserData | undefined>();
    

    useEffect(() => {
        const fetchRandomData = async () => {
            const res = await axios.get('https://randomuser.me/api/');
            console.log(res.data);
            setRandomData(res.data)
        }

        fetchRandomData()
    }, [])

    const picture = randomData?.results?.[0]?.picture;

    return (
        <div className="flex flex-col min-h-screen">
            <Header></Header>

            <main className="flex-1">
                {/* Enhanced Hero Section */}
                <section className="relative w-full min-h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-20" />

                    {/* Floating Elements */}
                    <div className="absolute top-10 md:top-20 left-4 md:left-10 w-16 md:w-24 h-16 md:h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
                    <div className="absolute bottom-10 md:bottom-20 right-4 md:right-10 w-20 md:w-32 h-20 md:h-32 bg-blue-400/10 rounded-full blur-2xl animate-pulse delay-1000" />
                    <div className="absolute top-1/2 left-1/4 w-12 md:w-16 h-12 md:h-16 bg-yellow-400/20 rounded-full blur-lg animate-pulse delay-500" />

                    <div className="relative z-30 px-4 md:px-6 text-center text-white max-w-6xl mx-auto">
                        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6">
                            <Sparkles className="h-4 md:h-5 w-4 md:w-5 text-yellow-400" />
                            <span className="font-medium text-sm md:text-base">SIKUMBANG TAPERA</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
                            Wujudkan Rumah Impian
                            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                                Bersama TAPERA
                            </span>
                        </h1>
                        <p className="text-base md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed opacity-90 px-4">
                            Sistem Informasi Keuangan Umum Berbasis Aplikasi Nusantara (SIKUMBANG) TAPERA - Platform digital terpercaya
                            untuk mengelola tabungan perumahan rakyat Indonesia menuju rumah yang terjangkau untuk semua.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                            <Button
                                size="lg"
                                className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-xl"
                            >
                                <Play className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                                Pelajari TAPERA
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
                            >
                                Daftar Sekarang
                                <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,_theme(colors.blue.600)_1px,_transparent_0)] bg-[size:60px_60px]" />
                    </div>
                    <div className="px-4 md:px-6 relative z-10">
                        <div className="text-center mb-8 md:mb-12">
                            <div className="inline-flex items-center space-x-2 bg-blue-600/10 rounded-full px-4 py-2 mb-4">
                                <TrendingUp className="h-4 w-4 text-blue-600" />
                                <span className="text-sm font-medium text-blue-600">Dampak TAPERA</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Angka yang Menunjukkan Komitmen Kami</h2>
                            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                                Lebih dari satu dekade melayani masyarakat Indonesia dalam mewujudkan rumah impian
                            </p>
                        </div>
                        <div className="grid gap-6 md:gap-8 grid-cols-2 lg:grid-cols-4">
                            {[
                                {
                                    number: "2.5M+",
                                    label: "Peserta Aktif",
                                    desc: "Pekerja terdaftar di seluruh Indonesia",
                                    icon: Heart,
                                    color: "from-red-500 to-pink-500",
                                },
                                {
                                    number: "10+",
                                    label: "Tahun Pengalaman",
                                    desc: "Melayani kebutuhan perumahan rakyat",
                                    icon: Clock,
                                    color: "from-blue-500 to-cyan-500",
                                },
                                {
                                    number: "34",
                                    label: "Provinsi",
                                    desc: "Jangkauan layanan di seluruh Indonesia",
                                    icon: Users,
                                    color: "from-green-500 to-emerald-500",
                                },
                                {
                                    number: "95%",
                                    label: "Kepuasan Peserta",
                                    desc: "Tingkat kepuasan layanan digital",
                                    icon: Star,
                                    color: "from-yellow-500 to-orange-500",
                                },
                            ].map((stat, index) => (
                                <Card
                                    key={index}
                                    className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-muted/10 border-0"
                                >
                                    <CardContent className="p-4 md:p-8 text-center">
                                        <div
                                            className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                                        >
                                            <stat.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                        </div>
                                        <div className="text-2xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                                            {stat.number}
                                        </div>
                                        <div className="font-semibold text-sm md:text-lg mb-2">{stat.label}</div>
                                        <p className="text-xs md:text-sm text-muted-foreground">{stat.desc}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Enhanced Company Story */}
                <section className="w-full py-16 md:py-20 lg:py-28">
                    <div className="px-4 md:px-6 grid gap-4">
                        <Tabs defaultValue="story" className="w-full">
                            <div className="flex justify-center mb-12 md:mb-16">
                                <TabsList className="grid grid-cols-2 bg-muted/50 backdrop-blur-sm p-2 rounded-2xl shadow-lg w-full max-w-2xl">
                                    <TabsTrigger
                                        value="story"
                                        className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-500 data-[state=active]:text-white text-xs md:text-sm"
                                    >
                                        <Rocket className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                                        <span className="hidden sm:inline">Sejarah</span>
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="mission"
                                        className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-500 data-[state=active]:text-white text-xs md:text-sm"
                                    >
                                        <Target className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                                        <span className="hidden sm:inline">Misi</span>
                                    </TabsTrigger>
                                </TabsList>
                            </div>

                            <TabsContent value="story" className="space-y-12 md:space-y-16">
                                <div className="text-center mb-8 md:mb-12">
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                                        Perjalanan TAPERA
                                    </h2>
                                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                                        Dari visi mewujudkan rumah terjangkau hingga menjadi program nasional yang dipercaya jutaan rakyat
                                        Indonesia
                                    </p>
                                </div>

                                <div className="grid gap-12 md:gap-16 lg:grid-cols-2 items-center">
                                    <div className="space-y-6 md:space-y-8">
                                        <div className="space-y-4 md:space-y-6">
                                            <div className="flex items-center space-x-4">
                                                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                                                    <Building className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl md:text-3xl font-bold">Awal Mula</h3>
                                                    <p className="text-blue-600 font-medium">2019 - Visi Terwujud</p>
                                                </div>
                                            </div>
                                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                                TAPERA lahir dari komitmen pemerintah Indonesia untuk mengatasi kesenjangan kepemilikan rumah.
                                                Dengan dukungan UU No. 4 Tahun 2016, program ini dirancang khusus untuk membantu pekerja Indonesia
                                                memiliki rumah yang layak dan terjangkau.
                                            </p>
                                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                                SIKUMBANG sebagai platform digital TAPERA hadir untuk memberikan kemudahan akses, transparansi
                                                pengelolaan dana, dan pelayanan terbaik bagi seluruh peserta di Indonesia.
                                            </p>
                                        </div>
                                        <div className="bg-gradient-to-br from-blue-600/5 to-blue-500/10 rounded-2xl p-4 md:p-6 border border-blue-600/20">
                                            <div className="flex items-start space-x-4">
                                                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <Quote className="h-5 w-5 md:h-6 md:w-6 text-white" />
                                                </div>
                                                <div>
                                                    <blockquote className="text-base md:text-lg font-medium mb-3">
                                                        &quot;Rumah bukan hanya tempat tinggal, tetapi fondasi kehidupan yang bermartabat bagi setiap
                                                        keluarga Indonesia.&quot;
                                                    </blockquote>
                                                    <cite className="text-sm text-muted-foreground">- Visi TAPERA Indonesia</cite>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-6 md:space-y-8">
                                        <div className="relative">
                                            <Image
                                                // src="/placeholder.svg?height=400&width=500"
                                                src="/building-inspeksi.webp"
                                                alt="TAPERA Indonesia building and team"
                                                width={500}
                                                height={400}
                                                className="rounded-2xl shadow-2xl w-full"
                                            />
                                            <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                                                <div className="text-center text-white">
                                                    <div className="text-sm md:text-lg font-bold">2019</div>
                                                    <div className="text-xs">Dimulai</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                                                <CardContent className="p-3 md:p-4 text-center">
                                                    <div className="text-xl md:text-2xl font-bold text-blue-600 mb-1">34</div>
                                                    <div className="text-xs md:text-sm text-muted-foreground">Provinsi</div>
                                                </CardContent>
                                            </Card>
                                            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                                                <CardContent className="p-3 md:p-4 text-center">
                                                    <div className="text-xl md:text-2xl font-bold text-green-600 mb-1">2.5M+</div>
                                                    <div className="text-xs md:text-sm text-muted-foreground">Peserta</div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="mission" className="space-y-12 md:space-y-16">
                                <div className="text-center mb-8 md:mb-12">
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                                        Misi & Visi TAPERA
                                    </h2>
                                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                                        Mendorong perubahan positif dalam kepemilikan rumah melalui inovasi, integritas, dan komitmen yang tak
                                        tergoyahkan kepada rakyat Indonesia
                                    </p>
                                </div>
                                <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
                                    <Card className="bg-gradient-to-br from-blue-600/5 to-blue-500/10 border-blue-600/20 p-6 md:p-8">
                                        <div className="flex items-center space-x-4 mb-4 md:mb-6">
                                            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                                                <Target className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-bold">Misi Kami</h3>
                                        </div>
                                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6">
                                            Menyediakan akses pembiayaan perumahan yang terjangkau dan berkelanjutan bagi seluruh pekerja
                                            Indonesia melalui sistem tabungan perumahan yang aman, transparan, dan mudah diakses.
                                        </p>
                                        <div className="space-y-3">
                                            {[
                                                "Memberikan akses pembiayaan perumahan yang terjangkau",
                                                "Mengelola dana peserta dengan transparansi penuh",
                                                "Memanfaatkan teknologi untuk kemudahan layanan",
                                                "Membangun ekosistem perumahan yang berkelanjutan",
                                            ].map((point, index) => (
                                                <div key={index} className="flex items-center space-x-3">
                                                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-600 flex-shrink-0" />
                                                    <span className="text-sm md:text-base">{point}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </Card>
                                    <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 p-6 md:p-8">
                                        <div className="flex items-center space-x-4 mb-4 md:mb-6">
                                            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                                                <Lightbulb className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-bold">Visi Kami</h3>
                                        </div>
                                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6">
                                            Menjadi lembaga pengelola tabungan perumahan terpercaya yang memungkinkan setiap pekerja Indonesia
                                            memiliki rumah yang layak dan terjangkau.
                                        </p>
                                        <div className="space-y-3">
                                            {[
                                                "Menjadi rujukan utama pembiayaan perumahan nasional",
                                                "Memperluas akses kepemilikan rumah di seluruh Indonesia",
                                                "Mengembangkan inovasi berkelanjutan dalam layanan",
                                                "Menciptakan dampak positif bagi generasi mendatang",
                                            ].map((point, index) => (
                                                <div key={index} className="flex items-center space-x-3">
                                                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-600 flex-shrink-0" />
                                                    <span className="text-sm md:text-base">{point}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </Card>
                                </div>
                            </TabsContent>


                        </Tabs>

                        <Tabs defaultValue="values" className="w-full">
                            <div className="flex justify-center mb-12 md:mb-16">
                                <TabsList className="grid grid-cols-2 bg-muted/50 backdrop-blur-sm p-2 rounded-2xl shadow-lg w-full max-w-2xl">
                                    <TabsTrigger
                                        value="values"
                                        className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-500 data-[state=active]:text-white text-xs md:text-sm"
                                    >
                                        <Heart className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                                        <span className="hidden sm:inline">Nilai</span>
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="future"
                                        className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-500 data-[state=active]:text-white text-xs md:text-sm"
                                    >
                                        <Lightbulb className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                                        <span className="hidden sm:inline">Masa Depan</span>
                                    </TabsTrigger>
                                </TabsList>
                            </div>

                            <TabsContent value="values" className="space-y-12 md:space-y-16">
                                <div className="text-center mb-8 md:mb-12">
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                                        Nilai-Nilai Kami
                                    </h2>
                                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                                        Prinsip-prinsip yang memandu setiap keputusan dan hubungan yang kami bangun
                                    </p>
                                </div>
                                <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                    {[
                                        {
                                            icon: Heart,
                                            title: "Mengutamakan Peserta",
                                            desc: "Setiap keputusan kami didasarkan pada kepentingan terbaik peserta. Kesuksesan mereka adalah kesuksesan kami.",
                                            color: "from-red-500 to-pink-500",
                                        },
                                        {
                                            icon: Shield,
                                            title: "Integritas & Transparansi",
                                            desc: "Kami berkomitmen pada komunikasi yang jujur dan praktik bisnis yang etis. Tidak ada biaya tersembunyi.",
                                            color: "from-blue-500 to-cyan-500",
                                        },
                                        {
                                            icon: Award,
                                            title: "Keunggulan Layanan",
                                            desc: "Kami berusaha mencapai kesempurnaan dalam setiap interaksi dan terus meningkatkan standar industri.",
                                            color: "from-yellow-500 to-orange-500",
                                        },
                                        {
                                            icon: Users,
                                            title: "Kolaborasi Tim",
                                            desc: "Kami bekerja bersama sebagai satu tim yang solid untuk mencapai tujuan bersama dan memberikan hasil terbaik.",
                                            color: "from-green-500 to-emerald-500",
                                        },
                                        {
                                            icon: Lightbulb,
                                            title: "Inovasi & Pertumbuhan",
                                            desc: "Kami mengadopsi teknologi dan metodologi baru untuk tetap terdepan dan memberikan solusi terbaik.",
                                            color: "from-purple-500 to-violet-500",
                                        },
                                        {
                                            icon: TreePine,
                                            title: "Dampak Komunitas",
                                            desc: "Kami berkomitmen memberikan dampak positif bagi masyarakat dan lingkungan melalui praktik bisnis kami.",
                                            color: "from-teal-500 to-green-500",
                                        },
                                    ].map((value, index) => (
                                        <Card
                                            key={index}
                                            className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-muted/10 border-0"
                                        >
                                            <CardContent className="p-6 md:p-8 text-center">
                                                <div
                                                    className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                                                >
                                                    <value.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                                </div>
                                                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 group-hover:text-blue-600 transition-colors">
                                                    {value.title}
                                                </h3>
                                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{value.desc}</p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>

                            <TabsContent value="future" className="space-y-12 md:space-y-16">
                                <div className="text-center mb-8 md:mb-12">
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                                        Masa Depan TAPERA
                                    </h2>
                                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                                        Visi kami untuk dekade mendatang - inovasi, ekspansi, dan keunggulan berkelanjutan
                                    </p>
                                </div>
                                <div className="grid gap-8 md:gap-12 lg:grid-cols-2 items-center">
                                    <div className="space-y-6 md:space-y-8">
                                        <div className="space-y-4 md:space-y-6">
                                            <h3 className="text-2xl md:text-3xl font-bold">Roadmap Inovasi</h3>
                                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                                Kami berinvestasi besar dalam teknologi mutakhir dan praktik berkelanjutan untuk membentuk masa
                                                depan kepemilikan rumah di Indonesia. Roadmap kami mencakup AI untuk pencocokan properti, tur
                                                virtual reality, dan transaksi berbasis blockchain.
                                            </p>
                                        </div>
                                        <div className="space-y-4">
                                            {[
                                                {
                                                    title: "Platform Digital Terintegrasi",
                                                    desc: "Sistem all-in-one untuk semua kebutuhan perumahan",
                                                    progress: 85,
                                                },
                                                {
                                                    title: "Kemitraan Strategis",
                                                    desc: "Kolaborasi dengan developer dan bank terkemuka",
                                                    progress: 70,
                                                },
                                                {
                                                    title: "Program Rumah Berkelanjutan",
                                                    desc: "Fokus pada rumah ramah lingkungan dan hemat energi",
                                                    progress: 60,
                                                },
                                                {
                                                    title: "Ekspansi Layanan Digital",
                                                    desc: "Akses mudah melalui mobile dan web platform",
                                                    progress: 90,
                                                },
                                            ].map((item, index) => (
                                                <div key={index} className="space-y-2">
                                                    <div className="flex justify-between items-center">
                                                        <h4 className="font-semibold text-sm md:text-base">{item.title}</h4>
                                                        <span className="text-xs md:text-sm text-blue-600 font-medium">{item.progress}%</span>
                                                    </div>
                                                    <p className="text-xs md:text-sm text-muted-foreground">{item.desc}</p>
                                                    <div className="w-full bg-muted rounded-full h-2">
                                                        <div
                                                            className="bg-gradient-to-r from-blue-600 to-blue-500 h-2 rounded-full transition-all duration-500"
                                                            style={{ width: `${item.progress}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-6 md:space-y-8">
                                        <Image
                                            // src="/placeholder.svg?height=400&width=500"
                                            src="/strategic-maping.webp"
                                            alt="Future of TAPERA"
                                            width={500}
                                            height={400}
                                            className="rounded-2xl shadow-2xl w-full"
                                        />
                                        <div className="grid grid-cols-2 gap-4">
                                            <Card className="bg-gradient-to-br from-blue-600/5 to-blue-500/10 border-blue-600/20">
                                                <CardContent className="p-3 md:p-4 text-center">
                                                    <div className="text-xl md:text-2xl font-bold text-blue-600 mb-1">5M+</div>
                                                    <div className="text-xs md:text-sm text-muted-foreground">Target Peserta 2030</div>
                                                </CardContent>
                                            </Card>
                                            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                                                <CardContent className="p-3 md:p-4 text-center">
                                                    <div className="text-xl md:text-2xl font-bold text-green-600 mb-1">100%</div>
                                                    <div className="text-xs md:text-sm text-green-700">Digitalisasi Layanan</div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </section>

                {/* Enhanced Team Section */}
                <section className="w-full py-16 md:py-20 lg:py-28 bg-gradient-to-br from-muted/30 to-background">
                    <div className="px-4 md:px-6">
                        <div className="text-center mb-12 md:mb-16">
                            <div className="inline-flex items-center space-x-2 bg-blue-600/10 rounded-full px-4 py-2 mb-4">
                                <Users className="h-4 w-4 text-blue-600" />
                                <span className="text-sm font-medium text-blue-600">Tim Kami</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Struktur Organisasi TAPERA</h2>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                                Tim profesional berpengalaman yang berkomitmen melayani kepentingan peserta TAPERA di seluruh Indonesia
                            </p>
                        </div>

                        {/* Leadership Team */}
                        <div className="mb-16 md:mb-20">
                            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Pimpinan Eksekutif</h3>
                            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                                {[
                                    {
                                        name: "Dr. Ir. Ahmad Danang Girindrawardana, M.Sc.",
                                        role: "Direktur Utama",
                                        bio: "Memimpin TAPERA dengan pengalaman lebih dari 20 tahun di sektor keuangan dan perumahan. Lulusan ITB dan memiliki gelar doktor di bidang Teknik Sipil dengan spesialisasi manajemen konstruksi.",
                                        expertise: ["Kepemimpinan Strategis", "Manajemen Keuangan", "Kebijakan Perumahan"],
                                        // image: "/placeholder.svg?height=300&width=300",
                                        image: picture?.large,
                                    },
                                    {
                                        name: "Drs. Budiman Gultom, M.M.",
                                        role: "Direktur Operasional",
                                        bio: "Mengelola operasional harian TAPERA dengan fokus pada efisiensi dan inovasi layanan. Berpengalaman 18 tahun dalam manajemen operasional lembaga keuangan.",
                                        expertise: ["Manajemen Operasional", "Sistem Informasi", "Pengembangan Produk"],
                                        image: picture?.large,
                                    },
                                    {
                                        name: "Ir. Siti Nurhaliza, M.T.",
                                        role: "Direktur Investasi & Keuangan",
                                        bio: "Bertanggung jawab atas pengelolaan investasi dan keuangan TAPERA. Lulusan teknik dengan spesialisasi manajemen keuangan dan investasi properti.",
                                        expertise: ["Manajemen Investasi", "Analisis Keuangan", "Manajemen Risiko"],
                                        image: picture?.large,
                                    },
                                ].map((leader, index) => (
                                    <Card
                                        key={index}
                                        className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-muted/10 border-0 overflow-hidden"
                                    >
                                        <div className="relative">
                                            <Image
                                                src={leader.image || "/placeholder.svg"}
                                                alt={leader.name}
                                                width={300}
                                                height={300}
                                                className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                        <CardContent className="p-4 md:p-6">
                                            <h4 className="font-bold text-lg md:text-xl mb-2 leading-tight">{leader.name}</h4>
                                            <p className="text-blue-600 font-medium mb-3 md:mb-4">{leader.role}</p>
                                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
                                                {leader.bio}
                                            </p>
                                            <div className="space-y-2">
                                                <h5 className="font-semibold text-sm">Keahlian:</h5>
                                                <div className="flex flex-wrap gap-1">
                                                    {leader.expertise.map((skill, skillIndex) => (
                                                        <span
                                                            key={skillIndex}
                                                            className="text-xs bg-blue-600/10 text-blue-600 px-2 py-1 rounded-full"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Department Teams */}
                        <div className="space-y-12 md:space-y-16">
                            <h3 className="text-2xl md:text-3xl font-bold text-center">Struktur Departemen</h3>
                            <div className="grid gap-6 md:gap-8 grid-cols-2 lg:grid-cols-4">
                                {[
                                    {
                                        department: "Divisi Keuangan",
                                        count: "25+ Staff",
                                        icon: Briefcase,
                                        color: "from-blue-500 to-blue-600",
                                        description: "Mengelola keuangan dan investasi dana peserta",
                                        head: "Kepala: Drs. Bambang Sutrisno, M.M.",
                                    },
                                    {
                                        department: "Divisi IT & Digital",
                                        count: "30+ Developer",
                                        icon: Users,
                                        color: "from-purple-500 to-purple-600",
                                        description: "Mengembangkan dan memelihara platform SIKUMBANG",
                                        head: "Ir. Andi Wijaya, M.T.",
                                    },
                                    {
                                        department: "Divisi Pelayanan",
                                        count: "40+ Staff",
                                        icon: Heart,
                                        color: "from-green-500 to-green-600",
                                        description: "Melayani kebutuhan dan keluhan peserta",
                                        head: "Kepala: Dra. Maya Sari, M.Si.",
                                    },
                                    {
                                        department: "Divisi Hukum & Compliance",
                                        count: "15+ Staff",
                                        icon: Shield,
                                        color: "from-orange-500 to-orange-600",
                                        description: "Memastikan kepatuhan regulasi dan aspek hukum",
                                        head: "Kepala: Dr. Hendra Gunawan, S.H., M.H.",
                                    },
                                ].map((dept, index) => (
                                    <Card
                                        key={index}
                                        className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-muted/10 border-0"
                                    >
                                        <CardContent className="p-4 md:p-6 text-center">
                                            <div
                                                className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${dept.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                                            >
                                                <dept.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                            </div>
                                            <h4 className="font-bold text-base md:text-lg mb-2">{dept.department}</h4>
                                            <p className="text-blue-600 font-medium mb-3 text-sm md:text-base">{dept.count}</p>
                                            <p className="text-xs md:text-sm text-muted-foreground mb-3 leading-relaxed">{dept.description}</p>
                                            <p className="text-xs text-muted-foreground font-medium">{dept.head}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Organizational Chart */}
                        <div className="mt-16 md:mt-20">
                            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Bagan Organisasi</h3>
                            <div className="max-w-4xl mx-auto">
                                <Card className="p-6 md:p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                                    <div className="text-center space-y-6 md:space-y-8">
                                        {/* Top Level */}
                                        <div className="bg-white rounded-lg p-4 shadow-md">
                                            <h4 className="font-bold text-blue-600">Dewan Pengawas</h4>
                                            <p className="text-sm text-muted-foreground">Pengawasan Strategis</p>
                                        </div>

                                        {/* Executive Level */}
                                        <div className="bg-white rounded-lg p-4 shadow-md">
                                            <h4 className="font-bold text-blue-600">Direktur Utama</h4>
                                            <p className="text-sm text-muted-foreground">Kepemimpinan Eksekutif</p>
                                        </div>

                                        {/* Directors Level */}
                                        <div className="grid gap-4 md:grid-cols-3">
                                            <div className="bg-white rounded-lg p-4 shadow-md">
                                                <h4 className="font-bold text-green-600 text-sm md:text-base">Direktur Operasional</h4>
                                                <p className="text-xs md:text-sm text-muted-foreground">Operasional Harian</p>
                                            </div>
                                            <div className="bg-white rounded-lg p-4 shadow-md">
                                                <h4 className="font-bold text-purple-600 text-sm md:text-base">Direktur Investasi</h4>
                                                <p className="text-xs md:text-sm text-muted-foreground">Pengelolaan Dana</p>
                                            </div>
                                            <div className="bg-white rounded-lg p-4 shadow-md">
                                                <h4 className="font-bold text-orange-600 text-sm md:text-base">Direktur Kepatuhan</h4>
                                                <p className="text-xs md:text-sm text-muted-foreground">Regulasi & Hukum</p>
                                            </div>
                                        </div>

                                        {/* Divisions Level */}
                                        <div className="grid gap-3 grid-cols-2 md:grid-cols-4 text-sm">
                                            {["Div. Keuangan", "Div. IT & Digital", "Div. Pelayanan", "Div. Hukum"].map((div, index) => (
                                                <div key={index} className="bg-white/70 rounded-lg p-3 shadow-sm">
                                                    <p className="font-medium text-muted-foreground">{div}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Company Culture Section */}
                <section className="w-full py-16 md:py-20 lg:py-28">
                    <div className="px-4 md:px-6">
                        <div className="text-center mb-12 md:mb-16">
                            <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-4">
                                <Heart className="h-4 w-4 text-green-600" />
                                <span className="text-sm font-medium text-green-700">Budaya Kerja</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Budaya & Lingkungan Kerja</h2>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                                Menciptakan lingkungan kerja yang mendukung inovasi, kolaborasi, dan pertumbuhan profesional
                            </p>
                        </div>

                        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 items-center mb-16 md:mb-20">
                            <div className="space-y-6 md:space-y-8">
                                <h3 className="text-2xl md:text-3xl font-bold">Lingkungan Kerja Kami</h3>
                                <div className="space-y-4 md:space-y-6">
                                    {[
                                        {
                                            title: "Fleksibilitas Kerja",
                                            desc: "Mendukung work-life balance dengan sistem kerja hybrid dan jam kerja fleksibel",
                                            icon: Clock,
                                        },
                                        {
                                            title: "Pengembangan Karir",
                                            desc: "Program pelatihan berkelanjutan dan jalur karir yang jelas untuk setiap karyawan",
                                            icon: TrendingUp,
                                        },
                                        {
                                            title: "Kolaborasi Tim",
                                            desc: "Budaya kerja tim yang solid dengan komunikasi terbuka dan saling mendukung",
                                            icon: Users,
                                        },
                                        {
                                            title: "Inovasi & Kreativitas",
                                            desc: "Mendorong ide-ide inovatif dan memberikan ruang untuk eksperimen dan pembelajaran",
                                            icon: Lightbulb,
                                        },
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start space-x-4">
                                            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <item.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-base md:text-lg mb-2">{item.title}</h4>
                                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-6 md:space-y-8">
                                <Image
                                    // src="/placeholder.svg?height=400&width=500"
                                    src="/foto_rapat.webp"
                                    alt="TAPERA office environment"
                                    width={500}
                                    height={400}
                                    className="rounded-2xl shadow-2xl w-full"
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                                        <CardContent className="p-3 md:p-4 text-center">
                                            <div className="text-xl md:text-2xl font-bold text-green-600 mb-1">4.8/5</div>
                                            <div className="text-xs md:text-sm text-green-700">Rating Kepuasan Karyawan</div>
                                        </CardContent>
                                    </Card>
                                    <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                                        <CardContent className="p-3 md:p-4 text-center">
                                            <div className="text-xl md:text-2xl font-bold text-blue-600 mb-1">150+</div>
                                            <div className="text-xs md:text-sm text-blue-700">Total Karyawan</div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>

                        {/* Work Benefits */}
                        <div className="space-y-8 md:space-y-12">
                            <h3 className="text-2xl md:text-3xl font-bold text-center">Fasilitas & Benefit Karyawan</h3>
                            <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                {[
                                    {
                                        icon: Heart,
                                        title: "Asuransi Kesehatan",
                                        desc: "Asuransi kesehatan komprehensif untuk karyawan dan keluarga",
                                        color: "from-red-500 to-pink-500",
                                    },
                                    {
                                        icon: GraduationCap,
                                        title: "Program Pendidikan",
                                        desc: "Bantuan biaya pendidikan dan pelatihan profesional",
                                        color: "from-blue-500 to-cyan-500",
                                    },
                                    {
                                        icon: Home,
                                        title: "Bantuan Perumahan",
                                        desc: "Program khusus pembiayaan rumah untuk karyawan",
                                        color: "from-green-500 to-emerald-500",
                                    },
                                    {
                                        icon: Car,
                                        title: "Transportasi",
                                        desc: "Fasilitas transportasi dan tunjangan transportasi",
                                        color: "from-purple-500 to-violet-500",
                                    },
                                    {
                                        icon: Coffee,
                                        title: "Fasilitas Kantor",
                                        desc: "Ruang kerja modern dengan fasilitas lengkap dan nyaman",
                                        color: "from-orange-500 to-yellow-500",
                                    },
                                    {
                                        icon: Clock,
                                        title: "Cuti & Libur",
                                        desc: "Kebijakan cuti yang fleksibel dan hari libur nasional",
                                        color: "from-teal-500 to-green-500",
                                    },
                                ].map((benefit, index) => (
                                    <Card
                                        key={index}
                                        className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-muted/10 border-0"
                                    >
                                        <CardContent className="p-4 md:p-6 text-center">
                                            <div
                                                className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                                            >
                                                <benefit.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                            </div>
                                            <h4 className="font-bold text-base md:text-lg mb-3 group-hover:text-blue-600 transition-colors">
                                                {benefit.title}
                                            </h4>
                                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{benefit.desc}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Enhanced CTA Section */}
                {/* <section className="w-full py-16 md:py-20 lg:py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
                <div className="absolute top-10 left-10 w-20 md:w-32 h-20 md:h-32 bg-white/10 rounded-full blur-2xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-24 md:w-40 h-24 md:h-40 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />

                <div className="px-4 md:px-6 text-center relative z-10">
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8">
                        <Users className="h-4 md:h-5 w-4 md:w-5 text-yellow-400" />
                        <span className="text-white font-medium text-sm md:text-base">Bergabung dengan TAPERA</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 text-white">
                        Siap Wujudkan
                        <span className="block text-yellow-400">Rumah Impian?</span>
                    </h2>
                    <p className="text-base md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-3xl mx-auto text-white/90 leading-relaxed px-4">
                        Bergabunglah dengan jutaan pekerja Indonesia yang telah mempercayakan masa depan perumahan mereka kepada
                        TAPERA. Mulai perjalanan menuju rumah impian Anda hari ini.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4">
                        <Button
                            size="lg"
                            variant="secondary"
                            className="text-base md:text-lg px-8 md:px-10 py-4 md:py-6 bg-white text-blue-600 hover:bg-white/90 shadow-2xl"
                        >
                            <Briefcase className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" />
                            Daftar Sebagai Peserta
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-base md:text-lg px-8 md:px-10 py-4 md:py-6 border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm shadow-2xl"
                        >
                            <Mail className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" />
                            Hubungi Kami
                        </Button>
                    </div>
                </div>
            </section> */}
            </main>

            <Footer></Footer>
        </div>
    )
}

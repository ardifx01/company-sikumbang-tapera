"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Home,
    MapPin,
    Building,
    Phone,
    ArrowRight,
    Sparkles,
    Building2,
} from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { useEffect, useMemo, useState } from "react"
import { Heart, Eye, Filter } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
// import { properties } from "@/helper/dataPropertys"
import { Header } from "@/components/header"
import { properties } from "@/helper/dataPropertys"
import { Wilayah } from "@/helper/dataWilayah"
import { Footer } from "@/components/footer"

// const locations = ["All Locations", "Downtown", "City Center", "Suburbs", "Westside", "Lakeside"]
const locations = ["All Provinsi", ...Wilayah]
// const propertyTypes = ["All Types", "House", "Condo", "Villa", "Townhouse", "Penthouse", "Cottage", "Apartment"]
// const bedroomOptions = ["Any", "1", "2", "3", "4", "5+"]
// const bathroomOptions = ["Any", "1", "2", "3", "4+"]

export default function ServicesPage() {
    const [dataPerum, setDataPerum] = useState([])
    const perusahaanList = useMemo(() => {
        const set = new Set<string>();
        dataPerum.forEach((item: any) => {
            if (item.nama_pt) set.add(item.nama_pt);
        });
        return Array.from(set);
    }, [dataPerum])

    const [filterProvinsi, setFilterProvinsi] = useState("All Provinsi")
    const [filterKota, setFilterKota] = useState("All Kota")
    const [filterNamaPerumahan, setFilterNamaPerumahan] = useState("All Perumahan")
    const [filterNamaPT, setFilterNamaPT] = useState("All Perusahaan")

    const [provinsiOpen, setProvinsiOpen] = useState(false)
    const [kotaOpen, setKotaOpen] = useState(false)
    const [namaPerumahanOpen, setNamaPerumahanOpen] = useState(false)
    const [namaPTOpen, setNamaPTOpen] = useState(false)

    // const [dataProperties, setDataProperties] = useState([]);

    useEffect(() => {
        // const fetchData = async () => {
        //     const result = await properties();
        //     setDataProperties(result);
        // };
        // fetchData();

        const fetchDataPerum = async () => {
            const result = await properties();
            setDataPerum(result);
        };
        fetchDataPerum();
    }, []);

    // Filter properties based on selected filters
    const filteredProperties = dataPerum.filter((property: any) => {
        const matchesProvinsi = filterProvinsi === "All Provinsi" || property.provinsi.toLowerCase() === filterProvinsi.toLowerCase()
        const matchesKota = filterKota === "All Kota" || property.kota.toLowerCase() === filterKota.toLowerCase()
        // const matchesBedrooms = bedroomFilter === "Any" ||(bedroomFilter === "5+" ? property.bedrooms >= 5 : property.bedrooms === Number.parseInt(bedroomFilter))
        const matchesPerumahan = filterNamaPerumahan === "All Perumahan" || property.nama_perumahan.toLowerCase() === filterNamaPerumahan.toLowerCase()
        const matchesPerusahaan = filterNamaPT === "All Perusahaan" || property.nama_pt.toLowerCase() === filterNamaPT.toLowerCase()

        return matchesProvinsi && matchesKota && matchesPerumahan && matchesPerusahaan
    })

    // const formatPrice = (price: number) => {
    //     return new Intl.NumberFormat("en-US", {
    //         style: "currency",
    //         currency: "USD",
    //         minimumFractionDigits: 0,
    //         maximumFractionDigits: 0,
    //     }).format(price)
    // }

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
                {/* Enhanced Hero Section */}
                <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-20" />
                    {/* Floating Elements */}
                    <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse delay-1000" />

                    <div className="relative z-30 px-4 md:px-6 text-center text-white">
                        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                            <Sparkles className="h-4 w-4 text-yellow-400" />
                            <span className="text-sm font-medium">Premium Real Estate Services</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Jelajahi Daftar Hunian
                            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                                Bersama Tapera
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
                            Temukan hunian yang sesuai dengan kebutuhan Anda dari berbagai pengembang terpercaya yang telah terdaftar di SI Kumbang Tapera.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl hover:cursor-pointer"
                                onClick={() => handleNavClick("list-property")}
                            >
                                Lihat Semua Hunian
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
                            >
                                <Phone className="mr-2 h-5 w-5" />
                                Hubungi Bantuan
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Property Listings Section */}
                <section id="list-property" className="w-full py-20 md:py-28 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,_theme(colors.primary)_1px,_transparent_0)] bg-[size:40px_40px]" />
                    </div>

                    <div className="px-4 md:px-6 relative z-10">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full px-6 py-3 mb-6">
                                <Home className="h-5 w-5 text-primary" />
                                <span className="font-medium text-primary">Featured Properties</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                                Properties For Sale
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                                Discover your dream home from our curated selection of premium properties across prime locations
                            </p>
                        </div>

                        {/* Enhanced Filter Section */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 mb-12">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                                        <Filter className="h-5 w-5 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold">Find Your Perfect Property</h3>
                                </div>
                                <div className="text-sm text-muted-foreground">{filteredProperties.length} properties found</div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground">Provinsi</label>
                                    <Popover open={provinsiOpen} onOpenChange={setProvinsiOpen}>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                role="combobox"
                                                aria-expanded={provinsiOpen}
                                                className="w-full justify-between bg-white/50 border-primary/20 focus:border-primary hover:bg-white/70"
                                            >
                                                <div className="flex items-center">
                                                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                                                    {filterProvinsi === "All Provinsi" ? "Select Provinsi..." : filterProvinsi}
                                                </div>
                                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-full p-0" align="start">
                                            <Command>
                                                <CommandInput placeholder="Search provinsi..." className="h-9" />
                                                <CommandList>
                                                    <CommandEmpty>No location found.</CommandEmpty>
                                                    <CommandGroup>
                                                        {locations.map((location) => (
                                                            typeof location === "string" ? (
                                                                <CommandItem
                                                                    key={location}
                                                                    value={location}
                                                                    onSelect={() => {
                                                                        setFilterProvinsi(location);
                                                                        setProvinsiOpen(false);
                                                                    }}
                                                                >
                                                                    <Check
                                                                        className={cn(
                                                                            "mr-2 h-4 w-4",
                                                                            filterProvinsi === location ? "opacity-100" : "opacity-0",
                                                                        )}
                                                                    />
                                                                    {location}
                                                                </CommandItem>
                                                            ) : (
                                                                <CommandItem
                                                                    key={location.provinsi}
                                                                    value={location.provinsi}
                                                                    onSelect={() => {
                                                                        setFilterProvinsi(location.provinsi);
                                                                        setProvinsiOpen(false);
                                                                    }}
                                                                >
                                                                    <Check
                                                                        className={cn(
                                                                            "mr-2 h-4 w-4",
                                                                            filterProvinsi === location.provinsi ? "opacity-100" : "opacity-0",
                                                                        )}
                                                                    />
                                                                    {location.provinsi}
                                                                </CommandItem>
                                                            )
                                                        ))}

                                                    </CommandGroup>
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground">Kota</label>
                                    <Popover open={kotaOpen} onOpenChange={setKotaOpen}>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                role="combobox"
                                                aria-expanded={kotaOpen}
                                                className="w-full justify-between bg-white/50 border-primary/20 focus:border-primary hover:bg-white/70"
                                            >
                                                <div className="flex items-center">
                                                    <Building2 className="h-4 w-4 mr-2 text-primary" />
                                                    {filterKota === "All Kota" ? "Select Kota..." : filterKota}
                                                </div>
                                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-full p-0" align="start">
                                            <Command>
                                                <CommandInput placeholder="Search kota..." className="h-9" />
                                                <CommandList>
                                                    <CommandEmpty>No kota found.</CommandEmpty>
                                                    <CommandGroup>
                                                        <CommandItem
                                                            key={"All Kota"}
                                                            value={"All Kota"}
                                                            onSelect={() => {
                                                                setFilterKota("All Kota");
                                                                setKotaOpen(false);
                                                            }}
                                                        >
                                                            <Check
                                                                className={cn(
                                                                    "mr-2 h-4 w-4",
                                                                    filterKota === "All Kota" ? "opacity-100" : "opacity-0"
                                                                )}
                                                            />
                                                            All Kota
                                                        </CommandItem>
                                                        {(() => {
                                                            // Find selected provinsi object from Wilayah
                                                            const selectedProvinsi = Wilayah.find(
                                                                (item: any) =>
                                                                (typeof filterProvinsi === "string"
                                                                    ? item.provinsi?.toLowerCase() === filterProvinsi.toLowerCase()
                                                                    : false)
                                                            );
                                                            // Get kota array or empty array
                                                            const kotaList =
                                                                filterProvinsi === "All Provinsi"
                                                                    ? []
                                                                    : selectedProvinsi?.kota || [];
                                                            // If no provinsi selected, show empty
                                                            if (filterProvinsi === "All Provinsi" || kotaList.length === 0) {
                                                                return (
                                                                    <CommandItem disabled value="">
                                                                        Pilih provinsi terlebih dahulu
                                                                    </CommandItem>
                                                                );
                                                            }
                                                            return kotaList.map((kota: string) => (
                                                                <CommandItem
                                                                    key={kota}
                                                                    value={kota}
                                                                    onSelect={() => {
                                                                        setFilterKota(kota);
                                                                        setKotaOpen(false);
                                                                    }}
                                                                >
                                                                    <Check
                                                                        className={cn(
                                                                            "mr-2 h-4 w-4",
                                                                            filterKota === kota ? "opacity-100" : "opacity-0"
                                                                        )}
                                                                    />
                                                                    {kota}
                                                                </CommandItem>
                                                            ));
                                                        })()}
                                                    </CommandGroup>
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground">Perumahan</label>
                                    <Popover open={namaPerumahanOpen} onOpenChange={setNamaPerumahanOpen}>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                role="combobox"
                                                aria-expanded={namaPerumahanOpen}
                                                className="w-full justify-between bg-white/50 border-primary/20 focus:border-primary hover:bg-white/70"
                                            >
                                                <div className="flex items-center">
                                                    <Home className="h-4 w-4 mr-2 text-primary" />
                                                    {filterNamaPerumahan === "All Perumahan"
                                                        ? "Pilih Perumahan..."
                                                        : filterNamaPerumahan}
                                                </div>
                                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-full p-0" align="start">
                                            <Command>
                                                <CommandInput placeholder="Cari perumahan..." className="h-9" />
                                                <CommandList>
                                                    <CommandEmpty>Tidak ada perumahan ditemukan.</CommandEmpty>
                                                    <CommandGroup>
                                                        <CommandItem
                                                            key="All Perumahan"
                                                            value="All Perumahan"
                                                            onSelect={() => {
                                                                setFilterNamaPerumahan("All Perumahan");
                                                                setNamaPerumahanOpen(false);
                                                            }}
                                                        >
                                                            <Check
                                                                className={cn("mr-2 h-4 w-4", filterNamaPerumahan === "All Perumahan" ? "opacity-100" : "opacity-0")}
                                                            />
                                                            Semua Perumahan
                                                        </CommandItem>
                                                        {dataPerum
                                                            .filter((property: any) => {
                                                                // Filter by provinsi & kota if selected
                                                                const matchesProvinsi =
                                                                    filterProvinsi === "All Provinsi" ||
                                                                    property.provinsi?.toLowerCase() === filterProvinsi.toLowerCase();
                                                                const matchesKota =
                                                                    filterKota === "All Kota" ||
                                                                    property.kota?.toLowerCase() === filterKota.toLowerCase();
                                                                return matchesProvinsi && matchesKota;
                                                            }).reduce((acc: any[], curr: any) => {
                                                                if (!acc.find(item => item.nama_perumahan === curr.nama_perumahan)) {
                                                                    acc.push(curr);
                                                                }
                                                                return acc;
                                                            }, [])
                                                            .map((property: any) => (
                                                                <CommandItem
                                                                    key={property.nama_perumahan}
                                                                    value={property.nama_perumahan}
                                                                    onSelect={() => {
                                                                        setFilterNamaPerumahan(property.nama_perumahan);
                                                                        setNamaPerumahanOpen(false);
                                                                    }}
                                                                >
                                                                    <Check
                                                                        className={cn(
                                                                            "mr-2 h-4 w-4",
                                                                            filterNamaPerumahan === property.nama_perumahan ? "opacity-100" : "opacity-0"
                                                                        )}
                                                                    />
                                                                    {property.nama_perumahan}
                                                                </CommandItem>
                                                            ))}
                                                    </CommandGroup>
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground">Perusahaan</label>
                                    <Popover open={namaPTOpen} onOpenChange={setNamaPTOpen}>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                role="combobox"
                                                aria-expanded={namaPTOpen}
                                                className="w-full justify-between bg-white/50 border-primary/20 focus:border-primary hover:bg-white/70"
                                            >
                                                <div className="flex items-center">
                                                    <Building className="h-4 w-4 mr-2 text-primary" />
                                                    {filterNamaPT === "All Perusahaan"
                                                        ? "Pilih Perusahaan..."
                                                        : `${filterNamaPT}`}
                                                </div>
                                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-full p-0" align="start">
                                            <Command>
                                                <CommandInput placeholder="Search bathrooms..." className="h-9" />
                                                <CommandList>
                                                    <CommandEmpty>No bathroom option found.</CommandEmpty>
                                                    <CommandGroup>
                                                        <CommandItem
                                                            key="All Perusahaan"
                                                            value="All Perusahaan"
                                                            onSelect={() => {
                                                                setFilterNamaPT("All Perusahaan");
                                                                setNamaPTOpen(false);
                                                            }}
                                                        >
                                                            <Check
                                                                className={cn("mr-2 h-4 w-4",
                                                                    filterNamaPT === "All Perusahaan" ? "opacity-100" : "opacity-0")}
                                                            />
                                                            Semua Perusahaan
                                                        </CommandItem>
                                                        {perusahaanList.map((nama_pt) => (
                                                            <CommandItem
                                                                key={nama_pt}
                                                                value={nama_pt}
                                                                onSelect={() => {
                                                                    setFilterNamaPT(nama_pt);
                                                                    setNamaPTOpen(false);
                                                                }}
                                                            >
                                                                <Check
                                                                    className={cn(
                                                                        "mr-2 h-4 w-4",
                                                                        filterNamaPT === nama_pt ? "opacity-100" : "opacity-0"
                                                                    )}
                                                                />
                                                                {nama_pt}
                                                            </CommandItem>
                                                        ))}
                                                    </CommandGroup>
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 mt-6">
                                <Button
                                    variant="outline"
                                    onClick={() => {
                                        setFilterProvinsi("All Provinsi")
                                        setFilterKota("All Kota")
                                        setFilterNamaPerumahan("All Perumahan")
                                        setFilterNamaPT("All Perusahaan")
                                        setProvinsiOpen(false)
                                        setKotaOpen(false)
                                        setNamaPerumahanOpen(false)
                                        setNamaPTOpen(false)
                                    }}
                                    className="border-primary/20 text-primary hover:bg-primary/5"
                                >
                                    Clear All Filters
                                </Button>
                                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                    <span>Quick filters:</span>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => {
                                            setFilterKota("House")
                                            setFilterNamaPerumahan("3")
                                            setKotaOpen(false)
                                            setNamaPerumahanOpen(false)
                                        }}
                                        className="text-xs"
                                    >
                                        3BR Houses
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => {
                                            setFilterKota("Condo")
                                            setFilterProvinsi("City Center")
                                            setKotaOpen(false)
                                            setProvinsiOpen(false)
                                        }}
                                        className="text-xs"
                                    >
                                        City Condos
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Property Grid */}
                        {filteredProperties.length === 0 ? (
                            <div className="text-center py-16">
                                <div className="w-20 h-20 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Home className="h-10 w-10 text-muted-foreground" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">No Properties Found</h3>
                                <p className="text-muted-foreground mb-6">Try adjusting your filters to see more properties</p>
                                <Button
                                    onClick={() => {
                                        setFilterProvinsi("All Provinsi")
                                        setFilterKota("All Kota")
                                        setFilterNamaPerumahan("All Perumahan")
                                        setFilterNamaPT("All Perusahaan")
                                        setProvinsiOpen(false)
                                        setKotaOpen(false)
                                        setNamaPerumahanOpen(false)
                                        setNamaPTOpen(false)
                                    }}
                                    className="bg-gradient-to-r from-primary to-primary/80"
                                >
                                    Reset Filters
                                </Button>
                            </div>
                        ) : (
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {filteredProperties.map((property: any) => (
                                    <Card
                                        key={property.objectId}
                                        className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 overflow-hidden"
                                    >
                                        <div className="relative overflow-hidden">
                                            {/* <Image
                                                src={property.image || "/placeholder.svg"}
                                                alt={property.title}
                                                width={400}
                                                height={300}
                                                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                            /> */}
                                            <Image
                                                width={400}
                                                height={300}
                                                // src={`${property.url_thumbnail}`}
                                                src={property.url_thumbnail && property.url_thumbnail.trim() !== "" ? property.url_thumbnail : "/foto_thumbnail.webp"}
                                                alt={property.url_thumbnail}
                                                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                            <div className="absolute top-3 left-3">
                                                <Badge className="bg-gradient-to-r from-primary to-primary/80 text-white">
                                                    {property.nama_pt}
                                                </Badge>
                                            </div>
                                            <div className="absolute top-3 right-3 flex space-x-2">
                                                <Button
                                                    size="sm"
                                                    variant="ghost"
                                                    className="w-8 h-8 p-0 bg-white/80 hover:bg-white text-primary"
                                                >
                                                    <Heart className="h-4 w-4" />
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="ghost"
                                                    className="w-8 h-8 p-0 bg-white/80 hover:bg-white text-primary"
                                                >
                                                    <Eye className="h-4 w-4" />
                                                </Button>
                                            </div>
                                            <div className="absolute bottom-3 left-3">
                                                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                                                    {/* <span className="text-lg font-bold text-primary">{formatPrice(property.price)}</span> */}
                                                    <span>{(property.unit_subsidi + property.unit_komersial) - (property.unit_subsidi_terjual + property.unit_komersial_terjual)} Tersedia</span>
                                                </div>
                                            </div>
                                        </div>

                                        <CardContent className="p-6 pt-0">
                                            <div className="mb-3">
                                                <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors line-clamp-1">
                                                    {property.nama_perumahan}
                                                </h3>
                                                <div className="flex items-center text-muted-foreground text-sm">
                                                    <MapPin className="h-4 w-4 mr-1" />
                                                    {property.kota} - {property.provinsi}
                                                </div>
                                                <span className="text-sm">{property.alamat}</span>
                                            </div>


                                            {/* <div className="flex items-center justify-between mb-4 text-sm">
                                                <div className="flex items-center space-x-4">
                                                    <div className="flex items-center space-x-1">
                                                        <Bed className="h-4 w-4 text-primary" />
                                                        <span>{property.unit_subsidi}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-1">
                                                        <Bath className="h-4 w-4 text-primary" />
                                                        <span>{property.unit_komersial}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-1">
                                                        <Square className="h-4 w-4 text-primary" />
                                                        <span>{property.telp}</span>
                                                    </div>
                                                </div>
                                            </div> */}

                                            <div className="mb-4">
                                                <div className="flex flex-wrap gap-1">
                                                    {/* {property.features.slice(0, 2).map((feature: any, index: any) => (
                                                        <Badge key={index} variant="secondary" className="text-xs bg-primary/10 text-primary">
                                                            {feature}
                                                        </Badge>
                                                    ))}
                                                    {property.features.length > 2 && (
                                                        <Badge variant="secondary" className="text-xs">
                                                            +{property.features.length - 2} more
                                                        </Badge>
                                                    )} */}
                                                    <Badge variant="secondary" className="text-xs">{property.unit_subsidi - property.unit_subsidi_terjual} Unit Subsidi</Badge>
                                                    <Badge variant="secondary" className="text-xs">{property.unit_komersial - property.unit_komersial_terjual} Unit Komersial</Badge>
                                                    <Badge variant="secondary" className="text-xs">Asosiasi : {property.asosiasi}</Badge>
                                                </div>
                                            </div>

                                            <div className="flex space-x-2">
                                                <Button
                                                    className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                                                    size="sm"
                                                >
                                                    View Details
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="border-primary/20 text-primary hover:bg-primary/5 bg-transparent"
                                                >
                                                    <Phone className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        )}

                        {/* Load More Section */}
                        {filteredProperties.length > 0 && (
                            <div className="text-center mt-12">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-primary/20 text-primary hover:bg-primary/5 px-8 py-6 bg-transparent"
                                >
                                    Load More Properties
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <p className="text-sm text-muted-foreground mt-4">
                                    Showing {filteredProperties.length} of {properties.length} properties
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Footer></Footer>
        </div >
    )
}
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Search, MapPin, Home, DollarSign, Check, ChevronsUpDown } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function PropertySearch() {
  const [openLocation, setOpenLocation] = useState(false)
  const [openType, setOpenType] = useState(false)
  const [openPrice, setOpenPrice] = useState(false)
  const [openBedrooms, setOpenBedrooms] = useState(false)

  const [selectedLocation, setSelectedLocation] = useState("")
  const [selectedType, setSelectedType] = useState("")
  const [selectedPrice, setSelectedPrice] = useState("")
  const [selectedBedrooms, setSelectedBedrooms] = useState("")

  const locations = [
    { value: "jakarta", label: "Jakarta" },
    { value: "bandung", label: "Bandung" },
    { value: "surabaya", label: "Surabaya" },
    { value: "medan", label: "Medan" },
    { value: "semarang", label: "Semarang" },
  ]

  const propertyTypes = [
    { value: "rumah", label: "Rumah" },
    { value: "apartemen", label: "Apartemen" },
    { value: "villa", label: "Villa" },
    { value: "ruko", label: "Ruko" },
    { value: "tanah", label: "Tanah" },
  ]

  const priceRanges = [
    { value: "0-500", label: "< Rp 500 Juta" },
    { value: "500-1000", label: "Rp 500 Juta - 1 Miliar" },
    { value: "1000-2000", label: "Rp 1 - 2 Miliar" },
    { value: "2000-5000", label: "Rp 2 - 5 Miliar" },
    { value: "5000+", label: "> Rp 5 Miliar" },
  ]

  const bedroomOptions = [
    { value: "1", label: "1 Kamar" },
    { value: "2", label: "2 Kamar" },
    { value: "3", label: "3 Kamar" },
    { value: "4", label: "4 Kamar" },
    { value: "5+", label: "5+ Kamar" },
  ]

  return (
    <section className="py-12 bg-muted/50">
      <div className="px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Cari Properti Impian Anda</h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            Gunakan filter pencarian untuk menemukan properti yang sesuai dengan kebutuhan dan budget Anda
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Lokasi
                </label>
                <Popover open={openLocation} onOpenChange={setOpenLocation}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={openLocation}
                      className="w-full justify-between bg-transparent"
                    >
                      {selectedLocation
                        ? locations.find((location) => location.value === selectedLocation)?.label
                        : "Pilih kota"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput placeholder="Cari kota..." />
                      <CommandList>
                        <CommandEmpty>Tidak ada kota ditemukan.</CommandEmpty>
                        <CommandGroup>
                          {locations.map((location) => (
                            <CommandItem
                              key={location.value}
                              value={location.value}
                              onSelect={(currentValue) => {
                                setSelectedLocation(currentValue === selectedLocation ? "" : currentValue)
                                setOpenLocation(false)
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  selectedLocation === location.value ? "opacity-100" : "opacity-0",
                                )}
                              />
                              {location.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  Tipe Properti
                </label>
                <Popover open={openType} onOpenChange={setOpenType}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={openType}
                      className="w-full justify-between bg-transparent"
                    >
                      {selectedType ? propertyTypes.find((type) => type.value === selectedType)?.label : "Pilih tipe"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput placeholder="Cari tipe properti..." />
                      <CommandList>
                        <CommandEmpty>Tidak ada tipe ditemukan.</CommandEmpty>
                        <CommandGroup>
                          {propertyTypes.map((type) => (
                            <CommandItem
                              key={type.value}
                              value={type.value}
                              onSelect={(currentValue) => {
                                setSelectedType(currentValue === selectedType ? "" : currentValue)
                                setOpenType(false)
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  selectedType === type.value ? "opacity-100" : "opacity-0",
                                )}
                              />
                              {type.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Harga
                </label>
                <Popover open={openPrice} onOpenChange={setOpenPrice}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={openPrice}
                      className="w-full justify-between bg-transparent"
                    >
                      {selectedPrice
                        ? priceRanges.find((price) => price.value === selectedPrice)?.label
                        : "Range harga"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput placeholder="Cari range harga..." />
                      <CommandList>
                        <CommandEmpty>Tidak ada range harga ditemukan.</CommandEmpty>
                        <CommandGroup>
                          {priceRanges.map((price) => (
                            <CommandItem
                              key={price.value}
                              value={price.value}
                              onSelect={(currentValue) => {
                                setSelectedPrice(currentValue === selectedPrice ? "" : currentValue)
                                setOpenPrice(false)
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  selectedPrice === price.value ? "opacity-100" : "opacity-0",
                                )}
                              />
                              {price.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Kamar Tidur</label>
                <Popover open={openBedrooms} onOpenChange={setOpenBedrooms}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={openBedrooms}
                      className="w-full justify-between bg-transparent"
                    >
                      {selectedBedrooms
                        ? bedroomOptions.find((bedroom) => bedroom.value === selectedBedrooms)?.label
                        : "Jumlah kamar"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput placeholder="Cari jumlah kamar..." />
                      <CommandList>
                        <CommandEmpty>Tidak ada pilihan ditemukan.</CommandEmpty>
                        <CommandGroup>
                          {bedroomOptions.map((bedroom) => (
                            <CommandItem
                              key={bedroom.value}
                              value={bedroom.value}
                              onSelect={(currentValue) => {
                                setSelectedBedrooms(currentValue === selectedBedrooms ? "" : currentValue)
                                setOpenBedrooms(false)
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  selectedBedrooms === bedroom.value ? "opacity-100" : "opacity-0",
                                )}
                              />
                              {bedroom.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <Button className="flex-1 flex items-center gap-2">
                <Search className="h-4 w-4" />
                Cari Properti
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedLocation("")
                  setSelectedType("")
                  setSelectedPrice("")
                  setSelectedBedrooms("")
                }}
              >
                Reset Filter
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

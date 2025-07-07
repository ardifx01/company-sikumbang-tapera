"use client"
import { properties } from "@/helper/dataPropertys";
import { useEffect, useState, useRef } from "react";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import { Wilayah } from "@/helper/dataWilayah";
import { AddPerumahanDialog } from "./components/AddPerumahanDialog";
import { ShowTable } from "./components/ShowTable";
import { dataFotoPerum } from "@/helper/dataFotoPerum";
import { apiCall } from "@/helper/apiCall";
import { AddBlogDialog } from "./components/AddBlogDialog";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function AdminPage() {
    const router = useRouter();
    const [dataProperties, setDataProperties] = useState([]);
    const [dataFotoPerumahan, setDataFotoPerumahan] = useState([]);
    const [provinsiList, setProvinsiList] = useState<string[]>([]);
    const [kotaList, setKotaList] = useState<string[]>([]);

    // const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    // const [openKota, setOpenKota] = useState(false)
    const [valueKota, setValueKota] = useState("")

    const getData = async () => {
        try {
            const result = await properties();
            setDataProperties(result);

            const resultFotoPerum = await dataFotoPerum();
            setDataFotoPerumahan(resultFotoPerum.data);
        } catch (error) {
            console.log(error)
        }
    }

    const [isReady, setIsReady] = useState(false);

    // Tambahkan useRef untuk setiap input
    const namaPerumahanRef = useRef<HTMLInputElement>(null);
    const namaPtRef = useRef<HTMLInputElement>(null);
    const asosiasiRef = useRef<HTMLInputElement>(null);
    const provinsiRef = useRef<HTMLInputElement>(null);
    const kotaRef = useRef<HTMLInputElement>(null);
    const kecamatanRef = useRef<HTMLInputElement>(null);
    const alamatRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const telpRef = useRef<HTMLInputElement>(null);
    const websiteRef = useRef<HTMLInputElement>(null);
    const urlFotoRef = useRef<HTMLInputElement>(null);
    const unitSubsidiRef = useRef<HTMLInputElement>(null);
    const unitSubsidiTerjualRef = useRef<HTMLInputElement>(null);
    const unitKomersialRef = useRef<HTMLInputElement>(null);
    const unitKomersialTerjualRef = useRef<HTMLInputElement>(null);

    const addNewPerum = async () => {
        try {
            await apiCall.post('/perum', {
                nama_perumahan: namaPerumahanRef.current?.value || "",
                nama_pt: namaPtRef.current?.value || "",
                asosiasi: asosiasiRef.current?.value || "",
                provinsi: value.toUpperCase(),
                kota: valueKota.toUpperCase(),
                kecamatan: kecamatanRef.current?.value || "",
                alamat: alamatRef.current?.value || "",
                email: emailRef.current?.value || "",
                telp: telpRef.current?.value || "",
                website: websiteRef.current?.value || "",
                url_thumbnail: urlFotoRef.current?.value || "",
                unit_subsidi: Number(unitSubsidiRef.current?.value) || 0,
                unit_subsidi_terjual: Number(unitSubsidiTerjualRef.current?.value) || 0,
                unit_komersial: Number(unitKomersialRef.current?.value) || 0,
                unit_komersial_terjual: Number(unitKomersialTerjualRef.current?.value) || 0,
            });
            getData();
            return true;
        } catch (error) {
            throw error;
        }
    };

    useEffect(() => {
        if (localStorage.getItem("tkn")) {
            getData();
            setProvinsiList(Wilayah.map(w => w.provinsi));
            setKotaList(Wilayah.flatMap(w => w.kota));
            const fetchBlogPosts = async () => {
                try {
                    refreshDataBlog();
                } catch (error) {
                    console.error("Error fetching blog posts:", error);
                }
            }
            fetchBlogPosts();
            setIsReady(true);
        } else {
            const timer = setTimeout(() => {
                router.replace('/admin/signin');
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    // Tambahkan useEffect untuk update kotaList saat value (provinsi) berubah
    useEffect(() => {
        const found = Wilayah.find(w => w.provinsi === value);
        setKotaList(found ? found.kota : []);
        setValueKota(""); // reset kota jika provinsi berubah
    }, [value]);

    // BLOG
    const [blogPosts, setBlogPosts] = useState([]);

    const refreshDataBlog = async () => {
        try {
            const res = await apiCall.get('/articles?sortBy=created%20desc');
            setBlogPosts(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    // Logout
    // const logout = async () => {
    //     try {

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    if (!isReady) {
        return <div className="flex justify-center items-center h-screen w-screen">
            <p>Is Loading...</p>
        </div>;
    }

    return (
        <div className="px-[5%] min-h-screen pt-10">
            <div className="flex justify-end mb-2">
                <Button
                    variant="destructive"
                    onClick={() => {
                        localStorage.removeItem('tkn');
                        router.replace('/admin/signin');
                    }}
                    className="hover:cursor-pointer"
                >
                    Log Out
                </Button>
            </div>
            <Tabs defaultValue="perumahan">
                <TabsList className="w-full shadow-2xl">
                    <TabsTrigger value="perumahan">Perumahan</TabsTrigger>
                    <TabsTrigger value="blog">Blog</TabsTrigger>
                    <TabsTrigger value="fotoperumahan">Foto Perumahan</TabsTrigger>
                </TabsList>

                <TabsContent value="perumahan">
                    <Card>
                        <CardHeader>
                            <AddPerumahanDialog
                                provinsiList={provinsiList}
                                kotaList={kotaList}
                                value={value}
                                setValue={setValue}
                                valueKota={valueKota}
                                setValueKota={setValueKota}
                                namaPerumahanRef={namaPerumahanRef}
                                namaPtRef={namaPtRef}
                                asosiasiRef={asosiasiRef}
                                provinsiRef={provinsiRef}
                                kotaRef={kotaRef}
                                kecamatanRef={kecamatanRef}
                                alamatRef={alamatRef}
                                emailRef={emailRef}
                                telpRef={telpRef}
                                websiteRef={websiteRef}
                                urlFotoRef={urlFotoRef}
                                unitSubsidiRef={unitSubsidiRef}
                                unitSubsidiTerjualRef={unitSubsidiTerjualRef}
                                unitKomersialRef={unitKomersialRef}
                                unitKomersialTerjualRef={unitKomersialTerjualRef}
                                onSubmit={addNewPerum}
                            />
                        </CardHeader>
                        <CardContent>
                            {
                                <ShowTable
                                    headList={[
                                        "ID",
                                        "Nama Perumahan",
                                        "Nama PT",
                                        "Asosiasi",
                                        "Provinsi",
                                        "Kota",
                                        "Kecamatan",
                                        "Alamat",
                                        "Email",
                                        "Telp",
                                        "Image URL",
                                        "Website",
                                        "Unit Subsidi",
                                        "Unit Subsidi Terjual",
                                        "Unit Komersial",
                                        "Unit Komersial Terjual",
                                        "Action"
                                    ]}
                                    data={dataProperties}
                                    halaman="perumahan"
                                    onRefresh={getData}
                                />
                            }
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="blog">
                    <Card>
                        <CardHeader>
                            {
                                <AddBlogDialog onRefreshData={refreshDataBlog} />
                            }
                        </CardHeader>
                        <CardContent>
                            <ShowTable
                                headList={["Id", "Title", "Category", "Thumbnail", "Content", "Action"]}
                                data={blogPosts}
                                halaman="blog"
                                onRefresh={refreshDataBlog}
                            />
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="fotoperumahan">
                    <Card>
                        <CardHeader>
                        </CardHeader>
                        <CardContent>
                            {/* <ShowTable
                                headList={[""]}
                                data={dataFotoPerumahan}
                                halaman="foto"
                            /> */}
                            <p>BELUM ADA ISI</p>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
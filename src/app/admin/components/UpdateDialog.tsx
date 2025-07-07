import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { UnitInput } from "./UnitInput";
import { useEffect, useRef, useState } from "react";
import { Wilayah } from "@/helper/dataWilayah";
import { PopoverSelect } from "./PopoverSelect";
import { DialogTitle } from "@radix-ui/react-dialog";
import { apiCall } from "@/helper/apiCall";
import { Edit } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface IUpdateDialog {
    data: any;
    namaProses: string;
    onRefresh?(): void;
    onUpdateBlog?(): void;
}
export function UpdateDialog({ data, namaProses, onRefresh }: IUpdateDialog) {
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

    // Ref untuk blog
    const titleRef = useRef<HTMLInputElement>(null);
    const categoryRef = useRef<string>("");
    const thumbnailRef = useRef<HTMLInputElement>(null);
    const contentRef = useRef<HTMLTextAreaElement>(null);

    const [provinsiList, setProvinsiList] = useState<string[]>([]);
    const [kotaList, setKotaList] = useState<string[]>([]);

    const [valueProvinsi, setValueProvinsi] = useState("")
    const [valueKota, setValueKota] = useState("")

    useEffect(() => {
        setProvinsiList(Wilayah.map(w => w.provinsi));
        setKotaList(Wilayah.flatMap(w => w.kota));

        // Set default value dari data ke setiap ref jika ada
        if (namaPerumahanRef.current) namaPerumahanRef.current.value = data?.nama_perumahan ?? "";
        if (namaPtRef.current) namaPtRef.current.value = data?.nama_pt ?? "";
        if (asosiasiRef.current) asosiasiRef.current.value = data?.asosiasi ?? "";
        if (provinsiRef.current) provinsiRef.current.value = data?.provinsi ?? "";
        if (kotaRef.current) kotaRef.current.value = data?.kota ?? "";
        if (kecamatanRef.current) kecamatanRef.current.value = data?.kecamatan ?? "";
        if (alamatRef.current) alamatRef.current.value = data?.alamat ?? "";
        if (emailRef.current) emailRef.current.value = data?.email ?? "";
        if (telpRef.current) telpRef.current.value = data?.telp ?? "";
        if (websiteRef.current) websiteRef.current.value = data?.website ?? "";
        if (unitSubsidiRef.current) unitSubsidiRef.current.value = data?.unit_subsidi ?? "";
        if (unitSubsidiTerjualRef.current) unitSubsidiTerjualRef.current.value = data?.unit_subsidi_terjual ?? "";
        if (unitKomersialRef.current) unitKomersialRef.current.value = data?.unit_komersial ?? "";
        if (unitKomersialTerjualRef.current) unitKomersialTerjualRef.current.value = data?.unit_komersial_terjual ?? "";

        // Set default value untuk blog
        if (titleRef.current) titleRef.current.value = data?.title ?? "";
        if (categoryRef.current) categoryRef.current = data?.category ?? "";
        if (thumbnailRef.current) thumbnailRef.current.value = data?.thumbnail ?? "";
        if (contentRef.current) contentRef.current.value = data?.content ?? "";
    }, [data]);

    useEffect(() => {
        if (valueProvinsi) {
            const found = Wilayah.find(w => w.provinsi === valueProvinsi);
            setKotaList(found ? found.kota : []);
            if (valueProvinsi !== data?.provinsi) {
                setValueKota("");
            }
        } else {
            setKotaList([]);
            setValueKota("");
        }
    }, [valueProvinsi, data?.provinsi]);

    const onUpdate = async () => {
        if (namaProses === "updatePerumahan") {
            const updatedData = {
                nama_perumahan: namaPerumahanRef.current?.value || "",
                nama_pt: namaPtRef.current?.value || "",
                asosiasi: asosiasiRef.current?.value || "",
                provinsi: provinsiRef.current?.value || valueProvinsi || "",
                kota: kotaRef.current?.value || valueKota || "",
                kecamatan: kecamatanRef.current?.value || "",
                alamat: alamatRef.current?.value || "",
                email: emailRef.current?.value || "",
                telp: telpRef.current?.value || "",
                website: websiteRef.current?.value || "",
                url_thumbnail: urlFotoRef.current?.value || "",
                unit_subsidi: parseInt(unitSubsidiRef.current?.value || "0"),
                unit_subsidi_terjual: parseInt(unitSubsidiTerjualRef.current?.value || "0"),
                unit_komersial: parseInt(unitKomersialRef.current?.value || "0"),
                unit_komersial_terjual: parseInt(unitKomersialTerjualRef.current?.value || "0"),
            };

            const res = await apiCall.put(`/perum/${data.objectId}`, updatedData)

            if (res.status === 200) {
                alert("Data berhasil diupdate!");
                if (onRefresh) {
                    onRefresh();
                }
            }
        } else if (namaProses === "updateBlog") {
            const updatedData = {
                title: titleRef.current?.value || "",
                category: categoryRef.current || "",
                thumbnail: thumbnailRef.current?.value || "",
                content: contentRef.current?.value || "",
            };

            const res = await apiCall.put(`/articles/${data.objectId}`, updatedData);

            if (res.status === 200) {
                alert("Blog berhasil diupdate!");
                if (onRefresh) {
                    onRefresh();
                }
            }
        }

        // console.log(objectId);
    }

    let content: React.ReactNode = null;

    if (namaProses === "updatePerumahan") {
        content = (
            <div className="grid gap-3">
                <UnitInput
                    label="Nama Perumahan"
                    id="nama_perumahan"
                    name="nama_perumahan"
                    placeholder="Nama Perumahan"
                    inputRef={namaPerumahanRef}
                    defaultValue={data?.nama_perumahan ?? ""}
                />
                <UnitInput
                    label="Nama Perusahaan / PT"
                    id="nama_pt"
                    name="nama_pt"
                    placeholder="Nama PT"
                    inputRef={namaPtRef}
                    defaultValue={data?.nama_pt ?? ""}
                />
                <UnitInput
                    label="Asosiasi"
                    id="asosiasi"
                    name="asosiasi"
                    placeholder="Asosiasi"
                    inputRef={asosiasiRef}
                    defaultValue={data?.asosiasi ?? ""}
                />
                <Input disabled defaultValue={`Provinsi sebelumnya : ${data?.provinsi}`} />
                <PopoverSelect
                    label="Provinsi"
                    placeholder="Pilih Provinsi"
                    options={provinsiList}
                    value={valueProvinsi}
                    onChange={setValueProvinsi}
                    inputRef={provinsiRef}
                />
                <Input disabled defaultValue={`Kota sebelumnya : ${data?.kota}`} />
                <PopoverSelect
                    label="Kota"
                    placeholder="Pilih Kota"
                    options={kotaList}
                    value={valueKota}
                    onChange={setValueKota}
                    disabled={!valueProvinsi}
                    inputRef={kotaRef}
                />
                <UnitInput
                    label="Kecamatan"
                    id="kecamatan"
                    name="kecamatan"
                    placeholder="Kecamatan"
                    inputRef={kecamatanRef}
                    defaultValue={data?.kecamatan ?? ""}
                />
                <UnitInput
                    label="Alamat"
                    id="alamat"
                    name="alamat"
                    placeholder="Alamat"
                    inputRef={alamatRef}
                    defaultValue={data?.alamat ?? ""}
                />
                <UnitInput
                    label="Email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    inputRef={emailRef}
                    type="email"
                    defaultValue={data?.email ?? ""}
                />
                <UnitInput
                    label="Telepon"
                    id="telp"
                    name="telp"
                    placeholder="Nomor Telepon"
                    inputRef={telpRef}
                    defaultValue={data?.telp ?? ""}
                />
                <UnitInput
                    label="Website"
                    id="website"
                    name="website"
                    placeholder="Website"
                    inputRef={websiteRef}
                    defaultValue={data?.website ?? ""}
                />
                <UnitInput
                    label="Url Foto"
                    id="url_foto"
                    name="url_foto"
                    placeholder="Url Foto"
                    inputRef={urlFotoRef}
                    defaultValue={data.url_thumbnail}
                />
                <UnitInput
                    label="Unit Subsidi"
                    id="unit_subsidi"
                    name="unit_subsidi"
                    placeholder="Jumlah Unit Subsidi"
                    inputRef={unitSubsidiRef}
                    type="number"
                    defaultValue={data?.unit_subsidi ?? ""}
                />
                <UnitInput
                    label="Unit Subsidi Terjual"
                    id="unit_subsidi_terjual"
                    name="unit_subsidi_terjual"
                    placeholder="Unit Subsidi Terjual"
                    inputRef={unitSubsidiTerjualRef}
                    type="number"
                    defaultValue={data?.unit_subsidi_terjual ?? ""}
                />
                <UnitInput
                    label="Unit Komersial"
                    id="unit_komersial"
                    name="unit_komersial"
                    placeholder="Jumlah Unit Komersial"
                    inputRef={unitKomersialRef}
                    type="number"
                    defaultValue={data?.unit_komersial ?? ""}
                />
                <UnitInput
                    label="Unit Komersial Terjual"
                    id="unit_komersial_terjual"
                    name="unit_komersial_terjual"
                    placeholder="Unit Komersial Terjual"
                    inputRef={unitKomersialTerjualRef}
                    type="number"
                    defaultValue={data?.unit_komersial_terjual ?? ""}
                />
                <DialogClose className="">
                    <Button onClick={() => onUpdate()} className="w-full">Save</Button>
                </DialogClose>
            </div>
        )
    } else if (namaProses === "updateBlog") {
        content = (
            <div className="grid gap-3">
                <UnitInput
                    label="Title"
                    id="title"
                    name="title"
                    placeholder="Title"
                    inputRef={titleRef}
                    defaultValue={data?.title ?? ""}
                />
                {/* <UnitInput
                    label="Category"
                    id="category"
                    name="category"
                    placeholder="Category"
                    inputRef={categoryRef}
                    defaultValue={data?.category ?? ""}
                /> */}
                <Label>Category</Label>
                <Input disabled defaultValue={`Value Sebelumnya : ${data.category}`} />
                <Select onValueChange={(val) => categoryRef.current = val}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a Category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Category Post</SelectLabel>
                            <SelectItem value="Panduan Tapera">Panduan Tapera</SelectItem>
                            <SelectItem value="Pengumuman">Pengumuman</SelectItem>
                            <SelectItem value="Edukasi">Edukasi</SelectItem>
                            <SelectItem value="Berita">Berita</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <UnitInput
                    label="Thumbnail"
                    id="thumbnail"
                    name="thumbnail"
                    placeholder="Thumbnail URL"
                    inputRef={thumbnailRef}
                    defaultValue={data?.thumbnail ?? ""}
                />
                <Label>Content</Label>
                <Textarea ref={contentRef} defaultValue={data?.content}></Textarea>
                <DialogClose className="">
                    <Button onClick={() => onUpdate()} className="w-full">Save</Button>
                </DialogClose>
            </div>
        )
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                {/* <Button variant="outline" size="sm">Edit</Button> */}
                <Button
                    size="icon"
                    variant="outline"
                >
                    <Edit className="w-4 h-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="max-h-1/2 overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>{namaProses}</DialogTitle>
                </DialogHeader>
                {
                    content
                }
            </DialogContent>
        </Dialog>
    )
}
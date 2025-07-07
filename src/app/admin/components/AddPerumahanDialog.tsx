import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { PopoverSelect } from "./PopoverSelect";
import { UnitInput } from "./UnitInput";
import { RefObject, useState } from "react";

interface AddPerumahanDialogProps {
    provinsiList: string[];
    kotaList: string[];
    value: string;
    setValue: (v: string) => void;
    valueKota: string;
    setValueKota: (v: string) => void;
    namaPerumahanRef: RefObject<HTMLInputElement | null>;
    namaPtRef: RefObject<HTMLInputElement | null>;
    asosiasiRef: RefObject<HTMLInputElement | null>;
    provinsiRef: RefObject<HTMLInputElement | null>;
    kotaRef: RefObject<HTMLInputElement | null>;
    kecamatanRef: RefObject<HTMLInputElement | null>;
    alamatRef: RefObject<HTMLInputElement | null>;
    emailRef: RefObject<HTMLInputElement | null>;
    telpRef: RefObject<HTMLInputElement | null>;
    websiteRef: RefObject<HTMLInputElement | null>;
    urlFotoRef: RefObject<HTMLInputElement | null>;
    unitSubsidiRef: RefObject<HTMLInputElement | null>;
    unitSubsidiTerjualRef: RefObject<HTMLInputElement | null>;
    unitKomersialRef: RefObject<HTMLInputElement | null>;
    unitKomersialTerjualRef: RefObject<HTMLInputElement | null>;
    onSubmit: () => void;
}

export function AddPerumahanDialog({
    provinsiList,
    kotaList,
    value,
    setValue,
    valueKota,
    setValueKota,
    namaPerumahanRef,
    namaPtRef,
    asosiasiRef,
    provinsiRef,
    kotaRef,
    kecamatanRef,
    alamatRef,
    emailRef,
    telpRef,
    websiteRef,
    urlFotoRef,
    unitSubsidiRef,
    unitSubsidiTerjualRef,
    unitKomersialRef,
    unitKomersialTerjualRef,
    onSubmit,
}: AddPerumahanDialogProps) {
    const [open, setOpen] = useState(false);

    // Fungsi handle submit
    const handleSubmit = async () => {
        try {
            const result = await onSubmit();
            // Jika onSubmit mengembalikan sesuatu yang menandakan sukses, tutup dial
            // og
            setOpen(false);
        } catch (err) {
            alert("Gagal menyimpan data!");
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="w-fit"><Plus />Add New Perumahan</Button>
            </DialogTrigger>
            <DialogContent className="max-h-1/2 overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Tambah Perumahan</DialogTitle>
                    <DialogDescription>
                        Isi semua data dengan benar.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                    <UnitInput
                        label="Nama Perumahan"
                        id="nama_perumahan"
                        name="nama_perumahan"
                        placeholder="Nama Perumahan"
                        inputRef={namaPerumahanRef}
                    />
                    <UnitInput
                        label="Nama Perusahaan / PT"
                        id="nama_pt"
                        name="nama_pt"
                        placeholder="Nama PT"
                        inputRef={namaPtRef}
                    />
                    <UnitInput
                        label="Asosiasi"
                        id="asosiasi"
                        name="asosiasi"
                        placeholder="Asosiasi"
                        inputRef={asosiasiRef}
                    />
                    <PopoverSelect
                        label="Provinsi"
                        placeholder="Pilih Provinsi"
                        options={provinsiList}
                        value={value}
                        onChange={setValue}
                        inputRef={provinsiRef}
                    />
                    <PopoverSelect
                        label="Kota"
                        placeholder="Pilih Kota"
                        options={kotaList}
                        value={valueKota}
                        onChange={setValueKota}
                        disabled={!value}
                        inputRef={kotaRef}
                    />
                    <UnitInput
                        label="Kecamatan"
                        id="kecamatan"
                        name="kecamatan"
                        placeholder="Kecamatan"
                        inputRef={kecamatanRef}
                    />
                    <UnitInput
                        label="Alamat"
                        id="alamat"
                        name="alamat"
                        placeholder="Alamat"
                        inputRef={alamatRef}
                    />
                    <UnitInput
                        label="Email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        inputRef={emailRef}
                        type="email"
                    />
                    <UnitInput
                        label="Telepon"
                        id="telp"
                        name="telp"
                        placeholder="Nomor Telepon"
                        inputRef={telpRef}
                    />
                    <UnitInput
                        label="Website"
                        id="website"
                        name="website"
                        placeholder="Website"
                        inputRef={websiteRef}
                    />
                    <UnitInput
                        label="Url Foto"
                        id="url_foto"
                        name="url_foto"
                        placeholder="Url Foto"
                        inputRef={urlFotoRef}
                    />
                    <UnitInput
                        label="Unit Subsidi"
                        id="unit_subsidi"
                        name="unit_subsidi"
                        placeholder="Jumlah Unit Subsidi"
                        inputRef={unitSubsidiRef}
                        type="number"
                    />
                    <UnitInput
                        label="Unit Subsidi Terjual"
                        id="unit_subsidi_terjual"
                        name="unit_subsidi_terjual"
                        placeholder="Unit Subsidi Terjual"
                        inputRef={unitSubsidiTerjualRef}
                        type="number"
                    />
                    <UnitInput
                        label="Unit Komersial"
                        id="unit_komersial"
                        name="unit_komersial"
                        placeholder="Jumlah Unit Komersial"
                        inputRef={unitKomersialRef}
                        type="number"
                    />
                    <UnitInput
                        label="Unit Komersial Terjual"
                        id="unit_komersial_terjual"
                        name="unit_komersial_terjual"
                        placeholder="Unit Komersial Terjual"
                        inputRef={unitKomersialTerjualRef}
                        type="number"
                    />
                </div>
                <DialogFooter>
                    <Button onClick={handleSubmit}>Simpan</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
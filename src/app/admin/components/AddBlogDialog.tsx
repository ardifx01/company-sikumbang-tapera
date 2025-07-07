import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { apiCall } from "@/helper/apiCall";
import { Label } from "@radix-ui/react-label";
import { Plus } from "lucide-react";
import { useRef, useState } from "react";

interface AddBlogDialogProps {
    onRefreshData?: () => void; // Props untuk refresh data
}

export function AddBlogDialog({ onRefreshData }: AddBlogDialogProps) {
    const [open, setOpen] = useState(false);
    const titleRef = useRef<HTMLInputElement>(null);
    const categoryRef = useRef<string>("");
    const contentRef = useRef<HTMLTextAreaElement>(null);
    const thumbnailRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async () => {
        try {
            console.log(titleRef.current?.value)
            console.log(categoryRef.current)
            console.log(contentRef.current?.value)
            console.log(thumbnailRef.current?.value)
            const res = await apiCall.post('/articles', {
                title: titleRef.current?.value,
                category: categoryRef.current,
                content: contentRef.current?.value,
                thumbnail: thumbnailRef.current?.value,
            })

            if (res.status === 200) {
                alert("Blog berhasil diupdate!");
                setOpen(false)
                if (onRefreshData) {
                    onRefreshData()
                }
            }
            // return res;
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="w-fit"><Plus />Add New Blog</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Tambah Blog</DialogTitle>
                    <DialogDescription>
                        Isi semua data dengan benar.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-3">
                    <div>
                        <Label>Title</Label>
                        <Input ref={titleRef}></Input>
                    </div>
                    <div>
                        <Label>Category</Label>
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
                    </div>
                    <div>
                        <Label>Content</Label>
                        <Textarea ref={contentRef}></Textarea>
                    </div>
                    <div>
                        <Label>Thumbnail</Label>
                        <Input ref={thumbnailRef}></Input>
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={handleSubmit}>Simpan</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { UpdateDialog } from "./UpdateDialog";
import DeleteDialog from "./DeleteDialog";
import Image from "next/image";

interface DataPerumahan {
    objectId: string;
    nama_perumahan: string;
    nama_pt: string;
    asosiasi: string;
    provinsi: string;
    kota: string;
    kecamatan: string;
    alamat: string;
    email: string;
    telp: string;
    website: string;
    url_thumbnail: string;
    unit_subsidi: number;
    unit_subsidi_terjual: number;
    unit_komersial: number;
    unit_komersial_terjual: number;
}

interface DataFotoPerumahan {
    nama: string;
    url: string;
    index_perum: string;
}

interface DataBlogPost {
    objectId: string;
    title: string;
    content: string;
    category: string;
    thumbnail: string;
}

interface ShowTableProps {
    headList: string[];
    data?: DataFotoPerumahan[] | DataPerumahan[] | DataBlogPost[];
    halaman: string;
}

export function ShowTable({ headList, data, halaman, onRefresh }: ShowTableProps & { onRefresh?: () => void }) {
    let rows: React.ReactNode = null;

    if (data && data.length > 0) {
        // if ((data[0] as DataPerumahan).hasOwnProperty("nama_perumahan")) {
        if (halaman === "perumahan") {
            rows = (data as DataPerumahan[]).map((item, index) => (
                <TableRow key={index}>
                    <TableCell>{item.objectId}</TableCell>
                    <TableCell>{item.nama_perumahan}</TableCell>
                    <TableCell>{item.nama_pt}</TableCell>
                    <TableCell>{item.asosiasi}</TableCell>
                    <TableCell>{item.provinsi}</TableCell>
                    <TableCell>{item.kota}</TableCell>
                    <TableCell>{item.kecamatan}</TableCell>
                    <TableCell>{item.alamat}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.telp}</TableCell>
                    <TableCell>{item.website}</TableCell>
                    <TableCell>{item.url_thumbnail}</TableCell>
                    <TableCell>{item.unit_subsidi}</TableCell>
                    <TableCell>{item.unit_subsidi_terjual}</TableCell>
                    <TableCell>{item.unit_komersial}</TableCell>
                    <TableCell>{item.unit_komersial_terjual}</TableCell>
                    <TableCell>
                        <div className="flex gap-2">
                            <UpdateDialog data={item} namaProses="updatePerumahan" onRefresh={onRefresh} />
                            <DeleteDialog objectId={item.objectId} namaProses="deletePerumahan" onRefresh={onRefresh} />
                            {/* <Button
                                size="icon"
                                variant="outline"
                                onClick={() => onEdit && onEdit()}
                            >
                                <Edit className="w-4 h-4" />
                            </Button> */}
                            {/* <Button
                                size="icon"
                                variant="destructive"
                                onClick={() => onDelete && onDelete(item)}
                            >
                                <Trash2 className="w-4 h-4" />
                            </Button> */}
                        </div>
                    </TableCell>
                </TableRow>
            ));
            // } else if ((data[0] as DataFotoPerumahan).hasOwnProperty("index_perum")) {
        } else if (halaman === "foto") {
            rows = (data as DataFotoPerumahan[]).map((item, index) => (
                <TableRow key={index}>
                    <TableCell>{item.index_perum}</TableCell>
                    <TableCell>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                            {item.url}
                        </a>
                    </TableCell>
                    <TableCell>{item.nama}</TableCell>
                    <TableCell>
                        <div className="flex gap-2">
                            {/* <Button
                                size="icon"
                                variant="outline"
                                onClick={() => onEdit && onEdit()}
                            >
                                <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                                size="icon"
                                variant="destructive"
                                onClick={() => onDelete && onDelete(item)}
                            >
                                <Trash2 className="w-4 h-4" />
                            </Button> */}
                        </div>
                    </TableCell>
                </TableRow>
            ));
            // } else if ((data[0] as DataBlogPost).hasOwnProperty("title")) {
        } else if (halaman === "blog") {
            rows = (data as DataBlogPost[]).map((item, index) => (
                <TableRow key={index}>
                    <TableCell>{item.objectId}</TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell>
                        <Image src={item.thumbnail} alt={item.title} width={64} height={40} className="w-16 h-10 object-cover rounded" />
                    </TableCell>
                    <TableCell className="max-w-xs truncate">{item.content}</TableCell>
                    <TableCell>
                        <div className="flex gap-2">
                            <UpdateDialog data={item} namaProses="updateBlog" onRefresh={onRefresh} />
                            <DeleteDialog objectId={item.objectId} namaProses="deleteBlog" onRefresh={onRefresh} />
                        </div>
                    </TableCell>
                </TableRow>
            ));
        }
    }

    return (
        <Table className="w-full">
            <TableHeader className="">
                <TableRow>
                    {headList.map((head, index) => (
                        <TableHead key={index}>{head}</TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {rows}
            </TableBody>
        </Table>
    )
}
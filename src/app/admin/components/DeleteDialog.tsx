import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { apiCall } from "@/helper/apiCall";
import { Trash2 } from "lucide-react";
// import { ReactNode } from "react";

interface IDeleteDialog {
    objectId: string;
    namaProses: string;
    onRefresh?(): void;
}

export default function DeleteDialog({ objectId, namaProses, onRefresh }: IDeleteDialog) {
    // let content: ReactNode = null;

    if (namaProses === "deletePerumahan") {

    } else if (namaProses === "deleteBlog") {

    }

    const onDelete = async () => {
        try {
            if (namaProses === "deletePerumahan") {
                const res = await apiCall.delete(`/perum/${objectId}`);
            } else if (namaProses === "deleteBlog") {
                const res = await apiCall.delete(`/articles/${objectId}`);
            }
            if (onRefresh) {
                onRefresh()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="destructive" size="icon">
                        <Trash2 />
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your
                            account and remove your data from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={onDelete}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}
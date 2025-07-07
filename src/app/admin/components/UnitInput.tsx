import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RefObject } from "react";

interface UnitInputProps {
    label: string;
    id: string;
    name: string;
    placeholder: string;
    inputRef: RefObject<HTMLInputElement | null>;
    type?: string; // tambahkan type opsional
    defaultValue?: string;
}

export function UnitInput({ label, id, name, placeholder, inputRef, type = "text", defaultValue }: UnitInputProps) {
    return (
        <div className="grid gap-3">
            <Label htmlFor={id}>{label}</Label>
            <Input
                ref={inputRef}
                defaultValue={defaultValue}
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
}
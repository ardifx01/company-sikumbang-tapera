import { useState, RefObject } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { ChevronsUpDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

interface PopoverSelectProps {
    label: string;
    placeholder: string;
    options: string[];
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
    inputRef?: RefObject<HTMLInputElement | null>; // Tambahkan ini
}

export function PopoverSelect({
    label,
    placeholder,
    options,
    value,
    onChange,
    disabled = false,
    inputRef, // Tambahkan ini
}: PopoverSelectProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className="grid gap-3">
            <Label>{label}</Label>
            {/* Hidden input untuk ref */}
            <input
                ref={inputRef}
                value={value}
                readOnly
                hidden
                tabIndex={-1}
                aria-hidden="true"
            />
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full justify-between"
                        disabled={disabled}
                    >
                        {value ? options.find((opt) => opt === value) : placeholder}
                        <ChevronsUpDown className="opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    <Command>
                        <CommandInput placeholder={`Cari ${label.toLowerCase()}...`} className="h-9" />
                        <CommandList>
                            <CommandEmpty>Tidak ditemukan.</CommandEmpty>
                            <CommandGroup>
                                {options.map((opt) => (
                                    <CommandItem
                                        key={opt}
                                        value={opt}
                                        onSelect={(currentValue) => {
                                            onChange(currentValue === value ? "" : currentValue);
                                            setOpen(false);
                                        }}
                                    >
                                        {opt}
                                        <Check
                                            className={cn(
                                                "ml-auto",
                                                value === opt ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
}
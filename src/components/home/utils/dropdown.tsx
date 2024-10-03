"use client";

import * as React from "react";
import type { FC } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { ControllerRenderProps } from "react-hook-form";

interface Organisasi {
  value: string;
  label: string;
}

const organisasiList: Organisasi[] = [
  { value: "bem filkom", label: "BEM FILKOM" },
  { value: "bem ftp", label: "BEM FTP" },
  { value: "bem fk", label: "BEM FK" },
  { value: "bem fh", label: "BEM FH" },
  { value: "bem feb", label: "BEM FEB" },
  { value: "bem fp", label: "BEM FP" },
  { value: "bem ft", label: "BEM FT" },
  { value: "bem fisip", label: "BEM FISIP" },
  { value: "bem fpik", label: "BEM FPIK" },
];

interface ListLkmProps extends ControllerRenderProps {
  error?: boolean;
}

const ListLkm: FC<ListLkmProps> = ({ onChange, value, error }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedOrganisasi, setSelectedOrganisasi] =
    React.useState<Organisasi | null>(
      organisasiList.find((org) => org.value === value) || null,
    );

  React.useEffect(() => {
    const down = (e: KeyboardEvent): void => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => {
      document.removeEventListener("keydown", down);
    };
  }, []);

  const handleSelect = (organisasi: Organisasi): void => {
    setSelectedOrganisasi(organisasi);
    setOpen(false);
    onChange(organisasi.value);
  };
  const handleClear = (e: React.MouseEvent<SVGSVGElement>): void => {
    e.stopPropagation();
    setSelectedOrganisasi(null);
    onChange("");
  };

  return (
    <div className="relative">
      <Input
        type="text"
        value={selectedOrganisasi?.label || ""}
        readOnly
        placeholder="Pilih BEM Fakultasmu / Klik Ctrl + J"
        className={`border-2 rounded-xl pl-10 pr-4 py-2 bg-white text-black cursor-pointer placeholder:text-gray-400 ${
          error ? "border-red-500" : ""
        }`}
        onClick={() => setOpen(true)}
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black" />
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Cari BEM mu..." />
        <CommandList className="h-60 overflow-x-auto">
          <CommandEmpty>Ketik yang bener yaa...</CommandEmpty>
          {organisasiList.map((organisasi) => (
            <CommandItem
              key={organisasi.value}
              onSelect={() => handleSelect(organisasi)}
              className="hover:bg-white/80 hover:text-black hover:font-semibold transition-all duration-100 ease-in-out cursor-pointer"
            >
              <span>{organisasi.label}</span>
            </CommandItem>
          ))}
        </CommandList>
      </CommandDialog>
      {selectedOrganisasi && (
        <X
          className="ml-auto absolute top-1/2 text-black w-5 h-5 transform -translate-y-1/2 right-3 cursor-pointer"
          onClick={handleClear}
        />
      )}
    </div>
  );
};

export default ListLkm;

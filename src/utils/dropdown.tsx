"use client";

import * as React from "react";
import type { FC } from "react";
import { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import type { ControllerRenderProps } from "react-hook-form";
import axios from "axios";

interface Organisasi {
  id: string;
  name: string;
}

interface ListLkmProps extends ControllerRenderProps {
  error?: boolean;
  lkm: string;
  id: string;
  type: string;
}

const ListLkm: FC<ListLkmProps> = ({
  onChange,
  value,
  error,
  lkm,
  id,
  type,
}) => {
  const [open, setOpen] = useState(false);
  const [organisasiList, setOrganisasiList] = useState<Organisasi[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [selectedOrganisasi, setSelectedOrganisasi] =
    useState<Organisasi | null>(null);

  useEffect(() => {
    const fetchLkms = async () => {
      try {
        setLoading(true);
        if (type === "6") {
          const requests = [1, 2, 3, 4, 5].map((type) =>
            axios.get(
              `${process.env.NEXT_PUBLIC_API_URL_DEV}api/v1/lkms/get/${id}/${type}`,
            ),
          );
          const responses = await Promise.all(requests);
          const allData = responses.flatMap((response) => response.data);
          setOrganisasiList(allData);
        } else {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL_DEV}api/v1/lkms/get/${id}/${type}`,
          );
          console.log(response.data);
          setOrganisasiList(response.data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching LKMs:", error);
        setFetchError("Failed to fetch LKM data. Please try again later.");
        setLoading(false);
      }
    };

    fetchLkms();
  }, [id, type]);

  useEffect(() => {
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

  useEffect(() => {
    if (value) {
      const selected = organisasiList.find((org) => org.id === value);
      setSelectedOrganisasi(selected || null);
    }
  }, [value, organisasiList]);

  const handleSelect = (organisasi: Organisasi): void => {
    setSelectedOrganisasi(organisasi);
    setOpen(false);
    onChange(organisasi.id);
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
        value={selectedOrganisasi?.name || ""}
        readOnly
        placeholder={`Pilih ${lkm} / Klik Ctrl + J`}
        className={`border-2 rounded-xl pl-10 pr-4 py-2 bg-white text-black cursor-pointer placeholder:text-gray-400 ${
          error ? "border-red-500" : ""
        }`}
        onClick={() => {
          setOpen(true);
        }}
        aria-label={`Select ${lkm}`}
      />
      <Search
        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black"
        aria-hidden="true"
      />
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={`Cari ${lkm} mu...`} />
        <CommandList className="h-60 overflow-x-auto">
          <CommandEmpty>Ketik yang bener yaa...</CommandEmpty>
          {loading && <CommandItem>Loading...</CommandItem>}
          {fetchError && <CommandItem>{fetchError}</CommandItem>}
          {!loading &&
            !fetchError &&
            organisasiList.map((organisasi) => (
              <CommandItem
                key={organisasi.id}
                onSelect={() => handleSelect(organisasi)}
                className="hover:bg-white/80 hover:text-black hover:font-semibold transition-all duration-100 ease-in-out cursor-pointer"
              >
                <span>{organisasi.name}</span>
              </CommandItem>
            ))}
        </CommandList>
      </CommandDialog>
      {selectedOrganisasi && (
        <X
          className="ml-auto absolute top-1/2 text-black w-5 h-5 transform -translate-y-1/2 right-3 cursor-pointer"
          onClick={handleClear}
          aria-label="Clear selection"
        />
      )}
    </div>
  );
};

export default ListLkm;

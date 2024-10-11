import { useState, useEffect } from "react";
import axios from "axios";

interface Item {
  id: string;
  name: string;
  logo_file: string;
  kategori: string;
}

interface FilterItem {
  kategori: string;
  type: string;
}

interface Props {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  itemsPerPage: number;
  startIndex: number;
  endIndex: number;
  totalPages: number;
  currentItems: Item[];
  items: Item[];
  filteredItems: Item[];
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setActiveFilter: (filter: string) => void;
  activeFilter: string;
  searchTerm: string;
  filterKategori: FilterItem[];
  noDataFound: boolean;
  isLoading: boolean;
  error: string | null;
}

export default function usePage(id: string, initialType: string): Props {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("Semuanya");
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const [noDataFound, setNoDataFound] = useState(false);
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentType, setCurrentType] = useState(initialType);

  const itemsPerPage = 8;

  const filterKategori: FilterItem[] = [
    { kategori: "Penalaran", type: "1" },
    { kategori: "Kerohanian", type: "2" },
    { kategori: "Olahraga", type: "3" },
    { kategori: "Kesenian", type: "4" },
    { kategori: "Minat Khusus", type: "5" },
    { kategori: "Semuanya", type: "6" },
  ];

  const fetchItems = async (type: string) => {
    setIsLoading(true);
    setError(null);
    try {
      if (type === "6") {
        const requests = [1, 2, 3, 4, 5].map((type) =>
          axios.get(
            `${process.env.NEXT_PUBLIC_API_URL_DEV}api/v1/lkms/get/${id}/${type}`,
          ),
        );
        const responses = await Promise.all(requests);
        const allData = responses.flatMap((response) => response.data);
        setItems(allData);
        setFilteredItems(allData);
      } else {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL_DEV}api/v1/lkms/get/${id}/${type}`,
        );
        setItems(data);
        setFilteredItems(data);
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred while fetching items",
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchItems(currentType);
  }, [id, currentType]);

  useEffect(() => {
    let filtered = items;

    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    setFilteredItems(filtered);
    setCurrentPage(1);
    setNoDataFound(filtered.length === 0);
  }, [searchTerm, items]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice(startIndex, endIndex);

  const setActiveFilterAndFetch = (filter: string) => {
    setActiveFilter(filter);
    const newType =
      filterKategori.find((f) => f.kategori === filter)?.type || "6";
    setCurrentType(newType);
    fetchItems(newType);
  };

  return {
    currentPage,
    itemsPerPage,
    startIndex,
    endIndex,
    currentItems,
    setCurrentPage,
    totalPages,
    items,
    filteredItems,
    setSearchTerm,
    setActiveFilter: setActiveFilterAndFetch,
    activeFilter,
    searchTerm,
    filterKategori,
    noDataFound,
    isLoading,
    error,
  };
}

import { useState, useEffect } from "react";
import axios from "axios";

interface Item {
  id: string;
  name: string;
  title: string;
  logo_file: string;
  kategori: string;
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
  searchTerm: string;
  noDataFound: boolean;
  isLoading: boolean;
  error: string | null;
}

export default function usePage(id: string, type: string): Props {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const [noDataFound, setNoDataFound] = useState(false);
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const itemsPerPage = 8;

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL_DEV}api/v1/lkms/get/${id}/${type}`,
        );
        setItems(data);
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

    fetchItems();
  }, [id, type]);

  useEffect(() => {
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setFilteredItems(filtered);
    setCurrentPage(1);
    setNoDataFound(filtered.length === 0);
  }, [searchTerm, items]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice(startIndex, endIndex);

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
    searchTerm,
    noDataFound,
    isLoading,
    error,
  };
}

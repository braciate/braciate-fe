import { useState } from "react";

interface Item {
  id: number;
  title: string;
  logo?: string;
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
}

export default function usePage(): Props {
  const items = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    title: `lkm ke-${i + 1}`,
  }));
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  return {
    currentPage,
    itemsPerPage,
    startIndex,
    endIndex,
    currentItems,
    setCurrentPage,
    totalPages,
    items,
  };
}

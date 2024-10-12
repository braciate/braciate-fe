import React from "react";
import { useState } from "react";

const useFavValidation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>("");
  const [voteSuccess, setVoteSuccess] = useState(false);

  const handleVoteClick = (item: any) => {
    setSelectedItem(item);
    setIsModalOpen(true);
    setVoteSuccess(false);
    console.log(isModalOpen);
    console.log(selectedItem);
  };

  const handleConfirmVote = () => {
    setVoteSuccess(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setVoteSuccess(false);
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "modal-overlay") {
      handleCloseModal();
    }
  };
  return {
    handleVoteClick,
    isModalOpen,
    selectedItem,
    handleOutsideClick,
    handleConfirmVote,
    voteSuccess,
    handleCloseModal,
  };
};

export default useFavValidation;

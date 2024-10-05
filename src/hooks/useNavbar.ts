import { useState, useEffect } from "react";
import { signOut } from "next-auth/react";

interface NavbarProps {
  isOpen: boolean;
  timeLeft: number;
  toggleSlide: () => void;
  handleLogout: () => void;
}

export const useNavbar = (): NavbarProps => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const endDate = localStorage.getItem("countdownEndDate");
    if (!endDate) {
      const newEndDate = new Date(
        Date.now() + 25 * 24 * 60 * 60 * 1000,
      ).getTime();
      localStorage.setItem("countdownEndDate", newEndDate.toString());
    }

    const updateCountdown = () => {
      const end = parseInt(localStorage.getItem("countdownEndDate") || "0");
      const now = new Date().getTime();
      const timeRemaining = Math.max(0, end - now);
      setTimeLeft(timeRemaining);
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleLogout = (): void => {
    signOut({ callbackUrl: "/" });
  };

  const toggleSlide = (): void => {
    setIsOpen(!isOpen);
  };

  return { isOpen, toggleSlide, handleLogout, timeLeft };
};

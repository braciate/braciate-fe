import { useState, useEffect } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
interface NavbarProps {
  isOpen: boolean;
  timeLeft: number;
  toggleSlide: () => void;
  handleLogout: () => void;
  scrollToPanduan: () => void;
  isManualLogout: boolean;
}

export const useNavbar = (): NavbarProps => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const router = useRouter();
  const [isManualLogout, setIsManualLogout] = useState<boolean>(false);

  useEffect(() => {
    // Set the end date to October 30th, current year, 23:59:59
    const endDate = new Date(
      new Date().getFullYear(),
      9,
      26,
      23,
      59,
      59,
    ).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeRemaining = Math.max(0, endDate - now);
      setTimeLeft(timeRemaining);
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleLogout = async () => {
    setIsManualLogout(true);
    localStorage.removeItem("expire_at");
    await signOut({ redirect: false });
    router.push("/");
  };

  const toggleSlide = (): void => {
    setIsOpen(!isOpen);
  };

  const scrollToPanduan = () => {
    const panduanSection = document.getElementById("panduan");
    if (panduanSection) {
      panduanSection.scrollIntoView({ behavior: "smooth" });
    }
    if (isOpen) {
      toggleSlide();
    }
  };

  return {
    isOpen,
    toggleSlide,
    handleLogout,
    timeLeft,
    scrollToPanduan,
    isManualLogout,
  };
};

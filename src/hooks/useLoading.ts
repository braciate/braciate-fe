import { useState, useEffect } from "react";

interface prop {
  dots: string;
}

export const useLoading = (): prop => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots.length >= 4) {
          return "";
        }
        return prevDots + ".";
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);
  return { dots };
};

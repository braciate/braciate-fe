"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import LoadingScreen from "./LoadingScreen";

const PageTransition: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    const handleRouteChange = () => {
      handleStart();
      setTimeout(handleComplete, 3500);
    };

    handleRouteChange();

    return () => {
      handleComplete();
    };
  }, [pathname, searchParams]);

  return (
    <>
      {isLoading && <LoadingScreen />}
      {children}
    </>
  );
};

export default PageTransition;

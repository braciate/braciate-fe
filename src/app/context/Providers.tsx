"use client";

import { SessionProvider, useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingScreen from "@/components/loading/LoadingScreen";
import { useNavbar } from "@/hooks/useNavbar";

function TokenExpirationHandler({ children }: { children: React.ReactNode }) {
  const { isManualLogout } = useNavbar();
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isExpired, setIsExpired] = useState<boolean | null>(null);

  useEffect(() => {
    const checkExpiration = () => {
      const expireAt = localStorage.getItem("expire_at");
      if (expireAt) {
        const expireTime = parseInt(expireAt, 10);
        setIsExpired(Date.now() > expireTime);
      } else {
        setIsExpired(false);
      }
    };

    checkExpiration();
    const intervalId = setInterval(checkExpiration, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (status === "authenticated" && session?.user?.expired_at) {
      !isManualLogout;
    } else if (status === "unauthenticated" || session?.user.expired_at) {
      if (isManualLogout) {
        setIsExpired(false);
      } else {
        const expireAt = session?.user.expired_at?.toString();
        if (expireAt) {
          const expireTime = parseInt(expireAt, 10);
          setIsExpired(Date.now() > expireTime);
        }
      }
    }
  }, [status, session, isManualLogout]);

  useEffect(() => {
    if (status === "unauthenticated" && isExpired && !isManualLogout) {
      router.push("/login");
    }
  }, [status, isExpired, isManualLogout, router]);

  if (status === "loading" || isExpired === null) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <TokenExpirationHandler>{children}</TokenExpirationHandler>
    </SessionProvider>
  );
}

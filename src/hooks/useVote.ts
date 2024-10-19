"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function useVote() {
  const router = useRouter();
  const { data: session } = useSession();
  const [error, setError] = useState<string | null>(null);

  const submitVote = async (lkm_id: string, nomination_id: string) => {
    if (!session?.user?.user_id) {
      setError("User not authenticated");
      return null;
    }

    try {
      const response = await axios.post("/api/vote", {
        lkm_id,
        nomination_id,
      });

      console.log(response.data + "data");

      setError(null);
      router.push("/");
      return response.data;
    } catch (err: any) {
      console.error(err);
      setError(
        err.response?.data?.error ||
          (err instanceof Error
            ? err.message
            : "Terjadi kesalahan saat melakukan vote")
      );
      throw err;
    }
  };

  return { submitVote, error };
}

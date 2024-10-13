import axios from "axios";
import { useSession } from "next-auth/react";
import { useCallback, useState } from "react";

export default function useVote() {
  const { data: session } = useSession();
  const [error, setError] = useState<string | null>(null);
  const BaseURL = process.env.NEXT_PUBLIC_API_URL_DEV;
  const CREATE_URL = `${BaseURL}api/v1/userVotes/create`;

  const submitVote = useCallback(
    async (lkm_id: string, nomination_id: string) => {
      const nomination = "best-favorite-" + nomination_id;

      if (!session?.user?.user_id) {
        setError("User not authenticated");
        return null;
      }

      try {
        // Check if the user has already voted
        const checkResponse = await axios.get(
          `${BaseURL}api/v1/userVotes/get/${nomination}`,
          {
            params: { user_id: session.user.user_id },
          },
        );

        if (
          Array.isArray(checkResponse.data) &&
          checkResponse.data.length > 0
        ) {
          if (
            checkResponse.data.some(
              (vote: any) => vote.user_id === session.user.user_id,
            )
          ) {
            setError("Anda telah melakukan vote pada nominasi LKM ini");
            return null;
          }
        } else if (checkResponse.data === null) {
          console.log("No votes found for this nomination");
        } else {
          console.error("Unexpected response format:", checkResponse.data);
          setError("Terjadi kesalahan saat memeriksa vote");
          return null;
        }

        // If not voted, proceed with voting
        const { data } = await axios.post(
          CREATE_URL,
          {
            user_id: session.user.user_id,
            lkm_id: lkm_id,
            nomination_id: nomination,
          },
          {
            headers: { "Content-Type": "application/json" },
          },
        );
        console.log(data);
        setError(null);
        return data;
      } catch (err) {
        console.error(err);
        setError("Terjadi kesalahan saat melakukan vote");
        throw err;
      }
    },
    [BaseURL, CREATE_URL, session],
  );

  return { submitVote, error };
}

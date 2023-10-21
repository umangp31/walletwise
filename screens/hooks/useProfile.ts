import { useEffect, useState } from "react";
import { PROXY_API_URL } from "../../constant";
export type ProfileResponse = {
  address: string;
  avatar: string;
  description: string;
  name: string;
  platform: string;
  user_id: number;
  username: string;
};
const useProfile = (address: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<ProfileResponse | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const fetchProfile = async () => {
    try {
      const apiResponse = await fetch(`${PROXY_API_URL}/fetchProfile`, {
        method: "POST",
        body: JSON.stringify({
          address: address,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (apiResponse.ok) {
        const jsonRes = await apiResponse.json();
        setData(jsonRes.profile[0]);
        return jsonRes.profile[0];
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        setError(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, fetchProfile };
};
export default useProfile;

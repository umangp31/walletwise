import { useEffect, useState } from "react";
import { PROXY_API_URL } from "../../constant";
export type ProfileResponse = {
    address:     string;
    avatar:      string;
    description: string;
    name:        string;
    platform:    string;
    user_id:     number;
    username:    string;
}
const useProfile = (address: string) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<ProfileResponse|null>(null);
    const [error, setError] = useState<Error | null>(null);
    
    useEffect(() => {
        console.log("here");
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchProfile = async () => {
            try {
                const apiResponse = await fetch(`${PROXY_API_URL}/fetchProfile`, {
                    method: 'POST',
                    body: JSON.stringify({
                        address: address
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    },
                    signal: signal
                });
                    console.log(apiResponse.ok);
                    
                if (apiResponse.ok) {
                    const jsonRes = await apiResponse.json();
                    console.log(jsonRes);
                    setData(jsonRes.profile[0]);
                }

            } catch (error) {
                if (error instanceof Error) {
                    console.log(error)
                    setError(error);
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchProfile();

        return () => {
            controller.abort();
        };
    }, [address]);

    return { isLoading, data, error };
}
export default useProfile
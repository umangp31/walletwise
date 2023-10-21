import { useState } from "react";
import { PROXY_API_URL } from "../../constant";

type CreateProfileResponse = {
    message: string;
}

type CreateProfileRequest = {
    address: string;
    platform: "lens" | "ens" | "farcaster" | "walletwise";
    name: string | null,
    avatarUrl: string | null;
    description: string | null;
    username: string
}
const useCreateProfile = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<CreateProfileResponse | null>(null);
    const [error, setError] = useState<Error | null>(null)

    const createProfile = async (options: CreateProfileRequest) => {
        setIsLoading(true)
        try {
            const headers = {
                "Content-Type": "application/json"
            }
            const body = JSON.stringify(options)
            const apiResponse = await fetch(`${PROXY_API_URL}/createProfile`, {
                method: "POST",
                headers: headers,
                body: body
            })
            if (apiResponse.ok) {
                const jsonRes = await apiResponse.json();
                setData(jsonRes)
            }
        } catch (error) {
            if (error instanceof Error) {
                setError(error)
            }

        } finally {
            setIsLoading(false)
        }
    }
    return {
        isLoading,
        data,
        error,
        createProfile
    }
}
export default useCreateProfile
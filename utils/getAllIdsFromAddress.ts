    
    
export type APIResponse = {
    address:     string | null;
    identity:    string | null;
    platform:    string| null;
    displayName: string| null;
    avatar:      string| null;
    email:       string|null;
    description: string| null;
    location:    string| null;
    header:      string| null;
    links:       Links | Links[];
}
export type Links = {
    website: Website;
}

export type Website = {
    link:   string;
    handle: string;
}

async function getAllIdsFromAddress(address: string):Promise<APIResponse|undefined> {
    try {
        const API_URL = `https://api.web3.bio/profile/${address}`

        const res = await fetch(API_URL);

        if (res.ok) {
            const jsonResponse = await res.json()
            return jsonResponse
        }

    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch social id's",{cause:error})
    }
}
export default getAllIdsFromAddress
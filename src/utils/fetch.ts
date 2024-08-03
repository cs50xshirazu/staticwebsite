const BASE_URL = "https://api.cs50xshiraz.ir";

const customFetch = async <T>(input: string, init?: RequestInit) => {
    const response = await fetch(`${BASE_URL}/${input}`, init);
    return await response.json() as T;
};

export default customFetch;
import { useEffect, useState } from "react";

export const useFetchData = (selection) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const apiUrl = "https://the-one-api.dev/v2";
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    useEffect(() => {
        async function fetchData() {
            if (!selection) return;
            setIsLoading(true);
            if (error) {
                setError(null);
            }
            try {
                const res = await fetch(`${apiUrl}/${selection}`, {
                    headers: {
                        Authorization: `Bearer ${apiKey}`
                    }
                });
                const jsonData = await res.json();
                setData(jsonData.docs);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [selection]);
    return { isLoading, error, data, setData, setIsLoading };
}
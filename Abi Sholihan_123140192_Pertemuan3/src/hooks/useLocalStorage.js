import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        // Mengambil data dari localStorage
        try {
            const stored = localStorage.getItem(key);
            return stored ? JSON.parse(stored) : initialValue;
        } catch (error) {
            console.error("Failed to parse localStorage data:", error);
            return initialValue;
        }
    });

    // Menyimpan data ke localStorage
    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error("Failed to save to localStorage:", error);
        }
    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorage;

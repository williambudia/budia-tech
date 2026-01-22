import { useEffect, useState } from "react";

export function useReducedMotion() {
    const [reduceMotion, setReduceMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

        setReduceMotion(mediaQuery.matches);

        const handler = () => setReduceMotion(mediaQuery.matches);
        mediaQuery.addEventListener("change", handler);

        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    return reduceMotion;
}

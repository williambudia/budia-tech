import { useEffect, useState } from "react";

export function useMotionSafe() {
    const [enabled, setEnabled] = useState(true);

    useEffect(() => {
        // Segurança para SSR
        if (typeof window === "undefined") return;

        const isMobile = window.innerWidth < 768;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        // Desativa animações em mobile OU se o usuário pediu menos movimento
        setEnabled(!isMobile && !prefersReducedMotion);
    }, []);

    return enabled;
}

import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";

const BrazilFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 48" className="w-6 h-6 rounded-sm shadow-sm">
        <rect width="72" height="48" fill="#009c3b" />
        <path fill="#ffdf00" d="M36 8l28 16-28 16L8 24z" />
        <circle cx="36" cy="24" r="10" fill="#002776" />
        <path fill="#fff" d="M26.54 26.68a18.66 18.66 0 0 1 18.92-5.36 18.66 18.66 0 0 0-18.92 5.36z" />
    </svg>
);

const USFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 48" className="w-6 h-6 rounded-sm shadow-sm">
        <rect width="72" height="48" fill="#fff" />
        <rect width="72" height="3.7" y="0" fill="#b22234" />
        <rect width="72" height="3.7" y="7.4" fill="#b22234" />
        <rect width="72" height="3.7" y="14.8" fill="#b22234" />
        <rect width="72" height="3.7" y="22.2" fill="#b22234" />
        <rect width="72" height="3.7" y="29.6" fill="#b22234" />
        <rect width="72" height="3.7" y="37" fill="#b22234" />
        <rect width="72" height="3.7" y="44.4" fill="#b22234" />
        <rect width="32" height="26" fill="#3c3b6e" />
        {/* Simplified stars pattern for small size */}
        <g fill="#fff">
            <circle cx="5" cy="4" r="1.5" />
            <circle cx="11" cy="4" r="1.5" />
            <circle cx="17" cy="4" r="1.5" />
            <circle cx="23" cy="4" r="1.5" />
            <circle cx="29" cy="4" r="1.5" />
            <circle cx="5" cy="10" r="1.5" />
            <circle cx="11" cy="10" r="1.5" />
            <circle cx="17" cy="10" r="1.5" />
            <circle cx="23" cy="10" r="1.5" />
            <circle cx="29" cy="10" r="1.5" />
            <circle cx="5" cy="16" r="1.5" />
            <circle cx="11" cy="16" r="1.5" />
            <circle cx="17" cy="16" r="1.5" />
            <circle cx="23" cy="16" r="1.5" />
            <circle cx="29" cy="16" r="1.5" />
            <circle cx="5" cy="22" r="1.5" />
            <circle cx="11" cy="22" r="1.5" />
            <circle cx="17" cy="22" r="1.5" />
            <circle cx="23" cy="22" r="1.5" />
            <circle cx="29" cy="22" r="1.5" />
        </g>
    </svg>
);

export function LanguageToggle() {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === "pt" ? "en" : "pt";
        i18n.changeLanguage(newLang);
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="rounded-full w-10 h-10 hover:bg-muted/50 transition-all border border-transparent hover:border-border"
            title={i18n.language === "pt" ? "Switch to English" : "Mudar para Português"}
        >
            {i18n.language === "pt" ? (
                <BrazilFlag />
            ) : (
                <USFlag />
            )}
            <span className="sr-only">
                {i18n.language === "pt" ? "Mudar para Inglês" : "Mudar para Português"}
            </span>
        </Button>
    );
}

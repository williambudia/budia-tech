import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useLocation } from "wouter";

interface SEOProps {
    page?: "home" | "promotional";
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
}

export function SEO({ page = "home", title, description, keywords, image }: SEOProps) {
    const { t, i18n } = useTranslation();
    const [location] = useLocation();

    const currentLang = i18n.language;
    const baseUrl = "https://www.budiatech.com.br";
    const canonicalUrl = `${baseUrl}${location}`;

    // Use custom props or fallback to translations
    const pageTitle = title || t(`seo.${page}.title`);
    const pageDescription = description || t(`seo.${page}.description`);
    const pageKeywords = keywords || t(`seo.${page}.keywords`);
    const ogImage = image || `${baseUrl}/og-image.jpg`;

    // Structured Data (JSON-LD)
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: t("seo.structuredData.organizationName"),
        description: t("seo.structuredData.organizationDescription"),
        url: baseUrl,
        logo: `${baseUrl}/budia-tech.svg`,
        address: {
            "@type": "PostalAddress",
            addressLocality: t("seo.structuredData.address.city"),
            addressRegion: t("seo.structuredData.address.state"),
            addressCountry: t("seo.structuredData.address.country"),
        },
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+55-66-99687-0030",
            contactType: "Customer Service",
            availableLanguage: ["Portuguese", "English"],
        },
        sameAs: [
            "https://www.instagram.com/budiatech",
            "https://www.linkedin.com/company/budiatech",
        ],
    };

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <html lang={currentLang === "pt" ? "pt-BR" : "en"} />
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <meta name="keywords" content={pageKeywords} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content={t("seo.og.siteName")} />
            <meta property="og:locale" content={t("seo.og.locale")} />
            <meta property="og:locale:alternate" content={t("seo.og.localeAlternate")} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDescription} />
            <meta name="twitter:image" content={ogImage} />

            {/* Hreflang Tags */}
            <link rel="alternate" hrefLang="pt-BR" href={`${baseUrl}${location}`} />
            <link rel="alternate" hrefLang="en" href={`${baseUrl}${location}`} />
            <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${location}`} />

            {/* Additional Meta Tags */}
            <meta name="author" content="BudiaTech" />
            <meta name="robots" content="index, follow" />
            <meta name="theme-color" content="#3b82f6" />

            {/* Structured Data */}
            <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        </Helmet>
    );
}

import { Button } from "../ui/button";
import { Link } from "wouter";
import { ArrowRight, Sparkles } from "lucide-react";
import { MotionSafeDiv } from "../motion/MotionSafeDiv";
import { useTranslation } from "react-i18next";

export function PromoBanner() {
    const { t } = useTranslation();

    return (
        <section className="py-12 bg-muted/30 border-y border-border/50">
            <div className="container-padding">
                <MotionSafeDiv
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-background to-secondary/10 border border-primary/20 p-8 md:p-12"
                >
                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full -z-10 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 blur-[60px] rounded-full -z-10 pointer-events-none" />

                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative z-10">
                        <div className="flex-1 space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit mx-auto md:mx-0">
                                <Sparkles className="w-3 h-3" />
                                {t("promoBanner.badge")}
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                                {t("promoBanner.titlePart1")} <span className="text-gradient">{t("promoBanner.titlePrice")}</span>
                            </h2>

                            <p className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
                                {t("promoBanner.description")}
                            </p>
                        </div>

                        <div className="flex-shrink-0">
                            <Link href="/promocao">
                                <Button
                                    size="lg"
                                    className="h-14 px-8 text-lg rounded-full font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all"
                                >
                                    {t("promoBanner.cta")}
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </MotionSafeDiv>
            </div>
        </section>
    );
}

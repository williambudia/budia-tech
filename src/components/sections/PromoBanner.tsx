import { Button } from "../ui/button";
import { Link } from "wouter";
import { ArrowRight, Sparkles } from "lucide-react";
import { MotionSafeDiv } from "../motion/MotionSafeDiv";

export function PromoBanner() {
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
                                Oferta Especial
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                                Seu site profissional <span className="text-gradient">a partir de R$ 999</span>
                            </h2>

                            <p className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
                                A presença digital que sua empresa merece. Rápido, profissional e pronto para o Google. Pacote completo por tempo limitado.
                            </p>
                        </div>

                        <div className="flex-shrink-0">
                            <Link href="/promocao">
                                <Button
                                    size="lg"
                                    className="h-14 px-8 text-lg rounded-full font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all"
                                >
                                    Quero aproveitar a promoção
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

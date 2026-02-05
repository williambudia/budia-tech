import { Button } from "../components/ui/button";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { MotionSafeDiv } from "../components/motion/MotionSafeDiv";
import { CheckCircle2, MessageCircle, ArrowRight, Zap, Target, ShieldCheck, Rocket } from "lucide-react";

export default function Promotional() {
    const scrollToContact = () => {
        window.open("https://wa.me/5566997150476?text=Olá, vi a promoção do site por 999 e gostaria de mais detalhes!", "_blank");
    };

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
            <Navbar />

            <main className="pt-24 lg:pt-32">
                {/* --- HERO SECTION --- */}
                <section className="relative pb-20 overflow-hidden">
                    <div className="container-padding max-w-4xl mx-auto text-center relative z-10">
                        <MotionSafeDiv
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 text-sm font-bold mb-6 border border-red-500/20">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                </span>
                                Oferta por Tempo Limitado
                            </div>

                            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.15]">
                                Seu Negócio Precisa de um <span className="text-gradient">Site Profissional</span> Agora.
                            </h1>

                            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                                Pare de perder clientes para a concorrência. Tenha um site rápido, moderno e pronto para vender, sem a complexidade e os custos altos das agências tradicionais.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto text-lg h-14 rounded-full px-8 shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all font-bold gap-2 animate-pulse hover:animate-none"
                                    onClick={scrollToContact}
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    Quero Aproveitar a Oferta
                                </Button>
                                <p className="text-xs text-muted-foreground sm:hidden mt-2">
                                    Toque para falar no WhatsApp
                                </p>
                            </div>
                        </MotionSafeDiv>
                    </div>

                    {/* Background Decor */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
                </section>

                {/* --- INCLUDED SECTION --- */}
                <section className="py-20 bg-muted/30">
                    <div className="container-padding max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Tudo o que você precisa para crescer</h2>
                            <p className="text-muted-foreground">Sem letras miúdas. O pacote completo para digitalizar sua empresa.</p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                "Design Premium e Responsivo",
                                "Site Rápido (Top Performance)",
                                "Otimizado para o Google (SEO)",
                                "Botão de WhatsApp Flutuante",
                                "Hospedagem Inclusa (1º ano)",
                                "Certificado de Segurança (SSL)",
                                "Integração com Redes Sociais",
                                "E-mail Profissional",
                                "Suporte Dedicado"
                            ].map((item, i) => (
                                <MotionSafeDiv
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border/50 shadow-sm"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                    <span className="font-medium">{item}</span>
                                </MotionSafeDiv>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- AUDIENCE SECTION --- */}
                <section className="py-20">
                    <div className="container-padding max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Para quem é este pacote?</h2>
                                <p className="text-lg text-muted-foreground mb-6">Criado especialmente para quem quer resultado rápido sem dor de cabeça.</p>
                                <ul className="space-y-4">
                                    {[
                                        { icon: Target, title: "Pequenos Negócios", text: "Lojas, comércios e escritórios locais." },
                                        { icon: Rocket, title: "Prestadores de Serviço", text: "Advogados, dentistas, psicólogos, técnicos." },
                                        { icon: Zap, title: "Startups Locais", text: "Quem está começando e precisa de credibilidade." }
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                                <item.icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg">{item.title}</h3>
                                                <p className="text-muted-foreground text-sm">{item.text}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-card p-8 rounded-3xl text-card-foreground border border-border shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full" />
                                <h3 className="text-2xl font-bold mb-2 z-10 relative">Por que agora?</h3>
                                <p className="text-muted-foreground mb-8 z-10 relative">O mercado digital de Sorriso e região está crescendo. Quem não está na internet, não existe.</p>
                                <div className="space-y-4 relative z-10">
                                    <div className="flex items-center gap-3">
                                        <ShieldCheck className="w-5 h-5 text-primary" />
                                        <span className="font-medium">Entrega em até 7 dias</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ShieldCheck className="w-5 h-5 text-primary" />
                                        <span className="font-medium">Garantia de Satisfação</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ShieldCheck className="w-5 h-5 text-primary" />
                                        <span className="font-medium">Sem mensalidade (Site é seu)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- PRICING SECTION --- */}
                <section className="py-20 bg-primary/5">
                    <div className="container-padding max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">Investimento Único</h2>

                        <div className="bg-background rounded-3xl p-8 md:p-12 border-2 border-primary shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-bold rounded-bl-xl">POPULAR</div>

                            <p className="text-muted-foreground text-lg mb-2">Pacote Site Profissional</p>
                            <div className="flex items-baseline justify-center gap-1 mb-6">
                                <span className="text-base text-muted-foreground line-through">R$ 2.500</span>
                                <span className="text-5xl font-extrabold">R$ 999</span>
                                <span className="text-xl font-medium text-muted-foreground">,00</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-8">Parcelamos no cartão de crédito.</p>

                            <Button
                                size="lg"
                                className="w-full text-lg h-14 rounded-xl font-bold gap-2"
                                onClick={scrollToContact}
                            >
                                <MessageCircle className="w-5 h-5" />
                                Garantir Meu Site Agora
                            </Button>
                        </div>

                        <p className="mt-8 text-sm text-muted-foreground">
                            *Preço válido para Landing Pages e Sites Institucionais de até 5 seções.
                            <br />Promoção por tempo limitado, sujeita a disponibilidade de agenda.
                        </p>
                    </div>
                </section>

                {/* --- FINAL CTA --- */}
                <section className="py-20">
                    <div className="container-padding max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Não deixe para depois.</h2>
                        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                            Sua empresa merece uma presença digital de qualidade. Vamos construir isso juntos?
                        </p>
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-lg h-14 rounded-full px-12 border-2 hover:bg-primary hover:text-primary-foreground transition-all"
                            onClick={scrollToContact}
                        >
                            Falar com Consultor
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroDashboard from "../../assets/images/hero-dashboard.png";

export function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 blur-[100px] rounded-full -z-10" />

      <div className="container-padding relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative z-20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Atendimento local em Sorriso/MT
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 drop-shadow-sm">
              Soluções web modernas para <span className="text-gradient">empresas que crescem</span>.
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed bg-background/20 backdrop-blur-[2px] rounded-lg p-1">
              Desenvolvemos sites profissionais, sistemas web e landing pages focadas em conversão. Tecnologia de ponta para destacar seu negócio no mercado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="rounded-full text-base font-semibold px-8 h-12 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                onClick={() => window.open("https://wa.me/5566999999999", "_blank")}
              >
                Falar com especialista
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full text-base h-12 border-2 hover:bg-muted/50 backdrop-blur-sm"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver projetos
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                Design Premium
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                Alta Performance
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                Suporte Dedicado
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8 lg:absolute lg:-right-24 lg:top-0 lg:-translate-y-[45%] w-full lg:w-[850px] z-10 pointer-events-none lg:pointer-events-auto"
          >
            {/* Abstract geometric composition */}
            <div className="relative w-full h-full max-h-[700px]">
              {/* Main Image Container */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl transform rotate-3" />

              {/* Placeholder for Hero Image - Abstract dashboard/code concept */}
              {/* Using a gradient box here to represent the "Screen" */}
              <div className="relative w-full aspect-[16/11] bg-card rounded-3xl shadow-2xl overflow-hidden flex flex-col group transition-transform duration-500 hover:scale-[1.02]">
                {/* Fake Browser Header */}
                <div className="h-10 bg-muted/50 border-b border-border/50 flex items-center px-6 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>

                {/* Content Area with Generated Image */}
                <div className="flex-1 relative bg-background overflow-hidden">
                  <img
                    loading="lazy"
                    decoding="async"
                    fetchPriority="high"
                    src={heroDashboard}
                    alt="Dashboard Mockup"
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/60 pointer-events-none" />
                </div>

                {/* Decorative floating element */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute bottom-10 right-10 bg-card/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-border/50 min-w-[180px] z-30 hidden lg:block"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl">
                      🚀
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground leading-none">Performance</p>
                      <p className="text-sm font-bold text-foreground mt-1">99% Otimizada</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

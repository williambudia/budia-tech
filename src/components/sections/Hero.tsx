import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 blur-[100px] rounded-full -z-10" />

      <div className="container-padding grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Atendimento local em Sorriso/MT
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
            Soluções web modernas para <span className="text-gradient">empresas em crescimento</span>.
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
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
              className="rounded-full text-base h-12 border hover:bg-muted/50"
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
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          {/* Abstract geometric composition */}
          <div className="relative w-full h-full max-w-[500px] max-h-[500px]">
            {/* Main Image Container */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl transform rotate-3" />
            
            {/* Placeholder for Hero Image - Abstract dashboard/code concept */}
            {/* Using a gradient box here to represent the "Screen" */}
            <div className="absolute inset-2 bg-card rounded-2xl border border-border/50 shadow-2xl overflow-hidden flex flex-col">
              {/* Fake Browser Header */}
              <div className="h-8 bg-muted/50 border-b border-border/50 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
              </div>
              
              {/* Content Area */}
              <div className="flex-1 p-6 relative bg-gradient-to-br from-background to-muted/30">
                 {/* Hero abstract graphic */}
                 <div className="w-full h-32 bg-primary/10 rounded-xl mb-4 animate-pulse" />
                 <div className="grid grid-cols-3 gap-4">
                    <div className="h-24 bg-secondary/10 rounded-xl" />
                    <div className="h-24 bg-muted rounded-xl" />
                    <div className="h-24 bg-primary/5 rounded-xl" />
                 </div>
                 <div className="mt-6 space-y-3">
                   <div className="h-3 w-3/4 bg-muted-foreground/10 rounded-full" />
                   <div className="h-3 w-1/2 bg-muted-foreground/10 rounded-full" />
                 </div>
              </div>

              {/* Decorative floating elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute bottom-2 right-2 bg-card p-4 rounded-xl shadow-xl border border-border/50 max-w-[280px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                    🚀
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Garantia de performance</p>
                    <p className="font-bold text-foreground">Otimizada</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

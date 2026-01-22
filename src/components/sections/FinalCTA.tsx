import { Button } from "../../components/ui/button";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-accent dark:bg-card">
      <div className="container-padding relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Pronto para levar seu negócio para o próximo nível?
          </h2>
          
          <p className="text-xl text-muted-foreground font-medium">
            Não perca mais oportunidades. Tenha uma presença digital profissional e comece a vender mais hoje mesmo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover-elevate active-elevate-2 text-lg px-8 h-14 rounded-full shadow-lg"
              onClick={() => window.open("https://wa.me/5566997150476", "_blank")}
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Solicitar Orçamento Grátis
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-8">
            Atendimento exclusivo para Sorriso e região do Norte de Mato Grosso.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

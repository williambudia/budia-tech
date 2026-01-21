import { motion } from "framer-motion";
import { Leaf, Store, Wrench, Building2 } from "lucide-react";

const audiences = [
  {
    icon: Leaf,
    title: "Agronegócio",
    description: "Soluções robustas para produtores e empresas do agro que precisam de presença digital profissional.",
    color: "text-green-600",
    bg: "bg-green-100 dark:bg-green-900/20"
  },
  {
    icon: Store,
    title: "Comércio Local",
    description: "Lojas e varejistas que querem expandir vendas e serem encontrados por clientes da região.",
    color: "text-blue-600",
    bg: "bg-blue-100 dark:bg-blue-900/20"
  },
  {
    icon: Wrench,
    title: "Prestadores de Serviço",
    description: "Advogados, médicos, consultores e técnicos. Mostre sua autoridade e receba mais contatos.",
    color: "text-amber-600",
    bg: "bg-amber-100 dark:bg-amber-900/20"
  },
  {
    icon: Building2,
    title: "Empresas B2B",
    description: "Indústrias e distribuidoras que precisam de catálogos digitais e sistemas de gestão integrados.",
    color: "text-indigo-600",
    bg: "bg-indigo-100 dark:bg-indigo-900/20"
  }
];

export function TargetAudience() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container-padding">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Para quem desenvolvemos</h2>
          <p className="text-muted-foreground">
            Entendemos as particularidades do mercado de Sorriso. Criamos soluções específicas para o seu nicho de atuação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 rounded-2xl border border-border/50 group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

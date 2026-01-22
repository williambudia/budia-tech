import { Layout, Smartphone, Gauge, Settings, Database, BarChart3 } from "lucide-react";
import { MotionSafeDiv } from "../motion/MotionSafeDiv";

const services = [
  {
    icon: Layout,
    title: "Sites Institucionais",
    description: "Apresente sua empresa com elegância e profissionalismo. Design responsivo que funciona em qualquer dispositivo."
  },
  {
    icon: Smartphone,
    title: "Landing Pages",
    description: "Páginas de alta conversão focadas em vender um produto ou capturar leads para suas campanhas de marketing."
  },
  {
    icon: Gauge,
    title: "Performance & SEO",
    description: "Otimização para que seu site carregue rápido e apareça bem posicionado nas buscas do Google."
  },
  {
    icon: Settings,
    title: "Manutenção & Suporte",
    description: "Não te deixamos na mão. Pacotes de atualização, segurança e melhorias contínuas para seu projeto."
  },
  {
    icon: Database,
    title: "Sistemas Web",
    description: "Soluções complexas sob medida. Gestão de processos, áreas de membros e integrações via API.",
    highlight: true
  },
  {
    icon: BarChart3,
    title: "Dashboards",
    description: "Visualize dados do seu negócio em tempo real com painéis administrativos intuitivos e poderosos.",
    highlight: true
  }
];

export default function Services() {

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container-padding relative z-10">
        <div className="mb-16">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">O que fazemos</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">Soluções Completas</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <MotionSafeDiv
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 rounded-3xl border transition-all duration-300 ${service.highlight
                ? "bg-gradient-to-br from-primary/5 to-transparent border-primary/20 hover:border-primary/50"
                : "bg-card border-border/50 hover:border-primary/30"
                } hover:shadow-lg group`}
            >
              <div className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </MotionSafeDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

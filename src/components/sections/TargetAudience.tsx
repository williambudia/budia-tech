import { Leaf, Store, Wrench, Building2, EyeIcon, Globe, ServerIcon, Gauge } from "lucide-react";
import { MotionSafeDiv } from "../motion/MotionSafeDiv";

const audiences = [
  {
    icon: Leaf,
    title: "Agronegócio",
    description: "Soluções tecnológicas robustas para produtores e empresas do agro que buscam presença digital estratégica.",
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
    description: "Advogados, médicos, consultores e técnicos que desejam fortalecer sua autoridade e atrair mais clientes.",
    color: "text-amber-600",
    bg: "bg-amber-100 dark:bg-amber-900/20"
  },
  {
    icon: Building2,
    title: "Empresas B2B",
    description: "Soluções digitais para indústrias e distribuidoras que buscam eficiência com catálogos digitais e gestão integrada.",
    color: "text-purple-600",
    bg: "bg-purple-100 dark:bg-purple-900/20"
  },
  {
    icon: Globe,
    title: "Sites Institucionais",
    description: "Fortaleça a imagem da sua empresa com um site elegante, profissional e totalmente responsivo.",
    color: "text-teal-600",
    bg: "bg-teal-100 dark:bg-teal-900/20"
  },
  {
    icon: Gauge,
    title: "Desempenho e SEO",
    description: "Mais velocidade, mais visibilidade e melhores posições no Google.",
    color: "text-pink-600",
    bg: "bg-pink-100 dark:bg-pink-900/20"
  },
  {
    icon: EyeIcon,
    title: "Observabilidade",
    description: "Já possui um sistema, mas precisa monitorar logs e métricas para tomar decisões rápidas e prevenir problemas? Nós ajudamos você a ganhar visibilidade completa da sua operação.",
    color: "text-lime-600",
    bg: "bg-lime-100 dark:bg-lime-900/20"
  },
  {
    icon: ServerIcon,
    title: "Sistemas WEB",
    description: "Soluções web personalizadas para automatizar processos, integrar sistemas e escalar seu negócio.",
    color: "text-indigo-600",
    bg: "bg-indigo-100 dark:bg-indigo-900/20"
  },
];

export function TargetAudience() {

  return (
    <section className="py-20 bg-muted/30">
      <div className="container-padding">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Para quem desenvolvemos</h2>
          <p className="text-muted-foreground">
            Desenvolvemos soluções sob medida para o seu nicho de atuação, entendendo suas necessidades e desafios específicos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item, index) => (
            <MotionSafeDiv
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
            </MotionSafeDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

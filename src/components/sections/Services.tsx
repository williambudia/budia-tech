import { Layout, Smartphone, Gauge, Settings, Database, BarChart3 } from "lucide-react";
import { MotionSafeDiv } from "../motion/MotionSafeDiv";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Layout,
      title: t("services.institutional.title"),
      description: t("services.institutional.desc")
    },
    {
      icon: Smartphone,
      title: t("services.landing.title"),
      description: t("services.landing.desc")
    },
    {
      icon: Gauge,
      title: t("services.seo.title"),
      description: t("services.seo.desc")
    },
    {
      icon: Settings,
      title: t("services.support.title"),
      description: t("services.support.desc")
    },
    {
      icon: Database,
      title: t("services.systems.title"),
      description: t("services.systems.desc"),
      highlight: true
    },
    {
      icon: BarChart3,
      title: t("services.dashboards.title"),
      description: t("services.dashboards.desc"),
      highlight: true
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container-padding relative z-10">
        <div className="mb-16">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">{t("services.sectionBadge")}</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">{t("services.sectionTitle")}</h2>
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
                } hover:shadow group`}
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

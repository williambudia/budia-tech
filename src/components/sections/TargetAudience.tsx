import { Leaf, Store, Wrench, Building2, EyeIcon, Globe, ServerIcon, Gauge } from "lucide-react";
import { MotionSafeDiv } from "../motion/MotionSafeDiv";
import { useTranslation } from "react-i18next";

export default function TargetAudience() {
  const { t } = useTranslation();

  const audiences = [
    {
      icon: Leaf,
      title: t("audience.agro.title"),
      description: t("audience.agro.desc"),
      color: "text-green-600",
      bg: "bg-green-100 dark:bg-green-900/20"
    },
    {
      icon: Store,
      title: t("audience.commerce.title"),
      description: t("audience.commerce.desc"),
      color: "text-blue-600",
      bg: "bg-blue-100 dark:bg-blue-900/20"
    },
    {
      icon: Wrench,
      title: t("audience.services.title"),
      description: t("audience.services.desc"),
      color: "text-amber-600",
      bg: "bg-amber-100 dark:bg-amber-900/20"
    },
    {
      icon: Building2,
      title: t("audience.b2b.title"),
      description: t("audience.b2b.desc"),
      color: "text-purple-600",
      bg: "bg-purple-100 dark:bg-purple-900/20"
    },
    {
      icon: Globe,
      title: t("audience.institutional.title"),
      description: t("audience.institutional.desc"),
      color: "text-teal-600",
      bg: "bg-teal-100 dark:bg-teal-900/20"
    },
    {
      icon: Gauge,
      title: t("audience.seo.title"),
      description: t("audience.seo.desc"),
      color: "text-pink-600",
      bg: "bg-pink-100 dark:bg-pink-900/20"
    },
    {
      icon: EyeIcon,
      title: t("audience.observability.title"),
      description: t("audience.observability.desc"),
      color: "text-lime-600",
      bg: "bg-lime-100 dark:bg-lime-900/20"
    },
    {
      icon: ServerIcon,
      title: t("audience.systems.title"),
      description: t("audience.systems.desc"),
      color: "text-indigo-600",
      bg: "bg-indigo-100 dark:bg-indigo-900/20"
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container-padding">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("audience.title")}</h2>
          <p className="text-muted-foreground">
            {t("audience.description")}
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

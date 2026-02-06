import { MotionSafeDiv } from "../motion/MotionSafeDiv";
import { useTranslation } from "react-i18next";

export default function Process() {
  const { t } = useTranslation();

  const steps = [
    {
      number: "01",
      title: t("process.step1.title"),
      description: t("process.step1.desc")
    },
    {
      number: "02",
      title: t("process.step2.title"),
      description: t("process.step2.desc")
    },
    {
      number: "03",
      title: t("process.step3.title"),
      description: t("process.step3.desc")
    },
    {
      number: "04",
      title: t("process.step4.title"),
      description: t("process.step4.desc")
    }
  ];

  return (
    <section id="process" className="py-24 bg-card dark:bg-accent relative overflow-hidden">
      {/* Abstract lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100" fill="transparent" stroke="currentColor" className="text-foreground" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container-padding relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">{t("process.title")}</h2>
          <p className="text-muted-foreground text-lg">
            {t("process.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <MotionSafeDiv
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-6xl font-bold text-foreground/5 mb-4 absolute md:-top-12 left-2 select-none">
                {step.number}
              </div>
              <div className="relative pt-4 pl-4 border-l border-border h-full">
                <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </MotionSafeDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

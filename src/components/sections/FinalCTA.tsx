import { Button } from "../../components/ui/button";
import { MessageCircle } from "lucide-react";
import { MotionSafeDiv } from "../motion/MotionSafeDiv";
import { useTranslation } from "react-i18next";

export default function FinalCTA() {
  const { t } = useTranslation();

  return (
    <section className="py-24 relative overflow-hidden bg-accent dark:bg-card">
      <div className="container-padding relative z-10 text-center">
        <MotionSafeDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            {t("finalCta.title")}
          </h2>

          <p className="text-xl text-muted-foreground font-medium">
            {t("finalCta.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover-elevate active-elevate-2 text-lg px-8 h-14 rounded-full shadow"
              onClick={() => window.open("https://wa.me/5566996870030", "_blank")}
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              {t("finalCta.button")}
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            {t("finalCta.disclaimer")}
          </p>
        </MotionSafeDiv>
      </div>
    </section>
  );
}

import { useProjects } from "../../hooks/use-projects";
import { ExternalLink, Loader2 } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { MotionSafeDiv } from "../motion/MotionSafeDiv";
import { useTranslation } from "react-i18next";

export default function Portfolio() {
  const { data: projects, isLoading } = useProjects();
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className="py-24 flex justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <section id="portfolio" className="py-24 bg-muted/20">
      <div className="container-padding">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">{t("portfolio.badge")}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">{t("portfolio.title")}</h2>
            <p className="text-muted-foreground mt-4 text-lg">
              {t("portfolio.description")}
            </p>
          </div>
        </div>

        {(!projects || projects.length === 0) ? (
          <div className="text-center py-12 border-2 border-dashed border-border rounded-xl">
            <p className="text-muted-foreground">{t("portfolio.loading")}</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <MotionSafeDiv
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col overflow-hidden border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group bg-card">
                  <CardHeader className="pb-2">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags?.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-[10px] uppercase tracking-wider font-bold">
                          {t(`portfolio.tags.${tag}`, tag)}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-sm font-medium text-primary/80">{project.shortDescription}</p>
                  </CardHeader>

                  <CardContent className="flex-1 space-y-4 pt-4">
                    <div className="space-y-4 text-sm">
                      <div>
                        <span className="font-semibold text-foreground/90 block mb-1">{t("portfolio.challenge")}</span>
                        <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground/90 block mb-1">{t("portfolio.context")}</span>
                        <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground/90 block mb-1">{t("portfolio.impact")}</span>
                        <p className="text-muted-foreground leading-relaxed">{project.result}</p>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-4 border-t border-border/50 bg-muted/5 h-16">
                    {project.tags?.includes("Confidencial") ? (
                      <span className="text-xs text-muted-foreground/60 italic flex items-center gap-2 ">
                        {t("portfolio.confidential")}
                      </span>
                    ) : (
                      <Button variant="ghost" className="w-full justify-between group-hover:text-primary text-xs" disabled>
                        {t("portfolio.details")}
                        <ExternalLink className="w-3 h-3 ml-2" />
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </MotionSafeDiv>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

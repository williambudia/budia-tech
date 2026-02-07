import { Rocket, Instagram, Linkedin, Facebook } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container-padding">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 font-display font-bold text-2xl mb-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground">
                BudiaTech
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6">
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t("footer.menuTitle")}</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#hero" className="hover:text-primary transition-colors">{t("navbar.home")}</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">{t("navbar.services")}</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">{t("navbar.portfolio")}</a></li>
              <li><a href="#process" className="hover:text-primary transition-colors">{t("navbar.process")}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t("footer.contactTitle")}</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>Sorriso, Mato Grosso</li>
              <li>contato@budiatech.com.br</li>
              <li>(66) 99687-0030</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} BudiaTech. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}

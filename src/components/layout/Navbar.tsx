import { useState, useEffect } from "react";
import { Menu, X, Rocket } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "../../components/ui/button";
import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Serviços", href: "#services" },
  { label: "Processo", href: "#process" },
  { label: "Portfólio", href: "#portfolio" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-border/50 shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-padding flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 font-display font-bold text-xl md:text-2xl cursor-pointer"
          onClick={() => scrollToSection('#hero')}
        >
          <div className="bg-primary/10 p-2 rounded-lg">
            <Rocket className="w-6 h-6 text-primary" />
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground">
            Budia Tech
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button 
            className="rounded-full px-6 font-semibold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
            onClick={() => window.open("https://wa.me/5566997150476", "_blank")}
          >
            Falar no WhatsApp
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left py-2 font-medium text-foreground hover:text-primary"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                className="w-full rounded-full"
                onClick={() => window.open("https://wa.me/5566997150476", "_blank")}
              >
                Falar no WhatsApp
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

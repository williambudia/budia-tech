import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { SEO } from "../components/layout/SEO";
import { Hero } from "../components/sections/Hero";
import { PromoBanner } from "../components/sections/PromoBanner";
import { MessageCircle } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { MotionSafeDiv } from "../components/motion/MotionSafeDiv";
import React, { Suspense } from "react";

const TargetAudience = React.lazy(() => import("../components/sections/TargetAudience"));
const Services = React.lazy(() => import("../components/sections/Services"));
const Process = React.lazy(() => import("../components/sections/Process"));
const Portfolio = React.lazy(() => import("../components/sections/Portfolio"));
const Contact = React.lazy(() => import("../components/sections/Contact"));
const FinalCTA = React.lazy(() => import("../components/sections/FinalCTA"));

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-primary/20">
      <SEO page="home" />

      {/* Scroll Progress Bar */}
      <MotionSafeDiv
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />

      <main>
        <Hero />
        <PromoBanner />
        <Suspense fallback={null}>
          <TargetAudience />
          <Services />
          <Process />
          <Portfolio />
          <Contact />
          <FinalCTA />
        </Suspense>
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/5566996870030"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow hover:shadow-xl transition-all hover:-translate-y-1"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </motion.a>
    </div>
  );
}

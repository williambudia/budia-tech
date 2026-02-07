import { Switch, Route } from "wouter";
import { LazyMotion, domAnimation } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import NotFound from "./pages/not-found";
import Home from "./pages/Home";
import Promotional from "./pages/Promotional";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import "./i18n";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/promocao" component={Promotional} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <LazyMotion features={domAnimation}>
        <ScrollToTop />
        <TooltipProvider>
          <Router />
          <Toaster />
        </TooltipProvider>
      </LazyMotion>
    </HelmetProvider>
  );
}

export default App;

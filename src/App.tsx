import { Switch, Route } from "wouter";
import { LazyMotion, domAnimation } from "framer-motion";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import NotFound from "./pages/not-found";
import Home from "./pages/Home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </LazyMotion>
  );
}

export default App;

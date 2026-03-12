import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Produtos from "@/pages/Produtos";
import Servicos from "@/pages/Servicos";
import Galeria from "@/pages/Galeria";
import Contacto from "@/pages/Contacto";
import Sobre from "@/pages/Sobre";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const queryClient = new QueryClient();

function Router() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/produtos" component={Produtos} />
        <Route path="/servicos" component={Servicos} />
        <Route path="/galeria" component={Galeria} />
        <Route path="/contacto" component={Contacto} />
        <Route path="/sobre" component={Sobre} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

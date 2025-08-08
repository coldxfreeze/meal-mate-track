import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CustomerLogin from "./pages/customer/Login";
import CustomerDashboard from "./pages/customer/Dashboard";
import CookerLogin from "./pages/cooker/Login";
import CookerDashboard from "./pages/cooker/Dashboard";
import DeliveryLogin from "./pages/delivery/Login";
import DeliveryDashboard from "./pages/delivery/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Customer Routes */}
          <Route path="/customer" element={<CustomerLogin />} />
          <Route path="/customer/dashboard" element={<CustomerDashboard />} />
          
          {/* Cooker Routes */}
          <Route path="/cooker" element={<CookerLogin />} />
          <Route path="/cooker/dashboard" element={<CookerDashboard />} />
          
          {/* Delivery Routes */}
          <Route path="/delivery" element={<DeliveryLogin />} />
          <Route path="/delivery/dashboard" element={<DeliveryDashboard />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import ThankYou from "./pages/ThankYou.tsx";
import NotFound from "./pages/NotFound.tsx";
import { getWebhookUrl, setWebhookUrl } from "@/lib/leadSubmit";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("setup") === "crm") {
      const current = getWebhookUrl() ?? "";
      const next = window.prompt(
        "Paste your CRM webhook URL (Zapier, Make, n8n, custom). Leave blank to clear.",
        current
      );
      if (next !== null) {
        setWebhookUrl(next.trim());
        window.alert(next.trim() ? "Webhook saved. Forms will now send leads here." : "Webhook cleared.");
      }
      params.delete("setup");
      const qs = params.toString();
      window.history.replaceState({}, "", window.location.pathname + (qs ? `?${qs}` : ""));
    }
  }, []);

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;

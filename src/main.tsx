import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { captureTrackingParams } from "@/lib/tracking";

captureTrackingParams();

createRoot(document.getElementById("root")!).render(<App />);

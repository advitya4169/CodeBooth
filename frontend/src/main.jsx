import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import ClerkTokenInterceptor from "./Components/ClerkTokenInterceptor.jsx";
import {BrowserRouter} from "react-router"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if(!PUBLISHABLE_KEY)
    throw new Error("Missing clerk publishableKey");
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <ClerkTokenInterceptor />
        <App />
      </ClerkProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

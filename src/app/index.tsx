"use client";

import "react-toastify/dist/ReactToastify.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer, ToastContainerProps } from "react-toastify";

import ContentHeader from "./components/ContentHeader";
import React from "react";
import { usePathname } from "next/navigation";

interface ProvidersProps extends ToastContainerProps {
  children: React.ReactNode;
}

function Providers({ children, ...toastProps }: ProvidersProps) {
  const [client] = React.useState(new QueryClient());
  const pathname = usePathname();
  return (
    <QueryClientProvider client={client}>
      <ToastContainer {...toastProps} />
      {pathname === "/" || pathname === "/auth/register" ? null : (
        <ContentHeader />
      )}

      {children}
    </QueryClientProvider>
  );
}

export default Providers;

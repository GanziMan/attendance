"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { ToastContainer, ToastContainerProps } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContentHeader from "./components/ContentHeader";
import { accessToken } from "./utils/common";
import { usePathname } from "next/navigation";

interface ProvidersProps extends ToastContainerProps {
  children: React.ReactNode;
}

function Providers({ children, ...toastProps }: ProvidersProps) {
  const [client] = React.useState(new QueryClient());
  const pathname = usePathname();
  return (
    <QueryClientProvider client={client}>
      <ReactQueryStreamedHydration>
        <ToastContainer {...toastProps} />
        {pathname === "/" || pathname === "/auth/register" ? null : (
          <ContentHeader />
        )}

        {children}
      </ReactQueryStreamedHydration>
    </QueryClientProvider>
  );
}

export default Providers;

"use client";
import Providers from ".";
import "./globals.css";
import { useEffect } from "react";
import { setInterceptor } from "@/libs/client/utils";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (token) {
      setInterceptor(token);
    }
  }, []);

  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

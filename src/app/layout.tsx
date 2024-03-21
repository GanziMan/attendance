"use client";

import "./globals.css";

import Cookies from "js-cookie";
import Providers from ".";
import { setInterceptor } from "@/libs/client/utils";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const token = Cookies.get("ACCESS_TOKEN");
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

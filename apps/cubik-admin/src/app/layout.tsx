"use client";
import { AuthProvider } from "@/context/user";
import WalletContext from "@/context/walletContext";
import { Provider } from "@/layouts/Provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useState } from "react";
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [client] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body className={`${jakarta.className}`}>
        <WalletContext>
          <AuthProvider>
            <QueryClientProvider client={client}>
              <Provider>{children}</Provider>
            </QueryClientProvider>
          </AuthProvider>
        </WalletContext>
      </body>
    </html>
  );
}

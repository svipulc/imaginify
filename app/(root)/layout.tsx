import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import React, { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayou({ children }: RootLayoutProps) {
  return (
    <main className="root">
      <Sidebar />
      <MobileNav />
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
      <Toaster />
    </main>
  );
}

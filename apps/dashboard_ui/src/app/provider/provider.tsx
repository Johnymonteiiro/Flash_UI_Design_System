"use client";

import Sidebar from "@/components/side/side-bar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Toaster } from "@/components/ui/toaster";
import StyledComponentsRegistry from "@/lib/registry";
import { store } from "@/redux/store/store";
import { NoriaProvider } from "@flash-ui/config";
import { Provider as ReduxProvider } from "react-redux";

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StyledComponentsRegistry>
      <ReduxProvider store={store}>
        <NoriaProvider>
          <main className="flex justify-between mx-auto h-screen container">
            <Toaster />
            <Sidebar />
            <ScrollArea className="w-[83.34%] px-4">{children}</ScrollArea>
          </main>
        </NoriaProvider>
      </ReduxProvider>
    </StyledComponentsRegistry>
  );
}

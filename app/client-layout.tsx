"use client";

import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <Sidebar />
      <main className="md:ml-72 p-6 space-y-6">
        <Header />
        {children}
      </main>
    </Provider>
  );
}

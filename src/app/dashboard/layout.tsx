// Admin Dashboard https://tailwindcomponents.com/component/dashboard-12

import { TopMenu, Sidebar } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard TODOS",
  description: "Dashboard TODOS",
};
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
        <TopMenu />
        <div className="px-6 pt-6">{children}</div>
      </div>
    </>
  );
}

import DashboardBreadCrumbs from "@/components/DashboardBreadCrumbs";
import DashboardNavMobile from "@/components/DashboardNavMobile";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-[calc(100vh-80px)] p-4">
      <DashboardBreadCrumbs />
      <div className="w-full h-[calc(100vh-140px)]">{children}</div>
      <DashboardNavMobile />
    </div>
  );
};

export default layout;

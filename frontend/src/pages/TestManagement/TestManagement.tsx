// TestManagement.tsx
import ManagementSideNav from "@/layouts/TestManagementLayouts/ManagementSideNav";
import { useState } from "react";
import { Outlet } from "react-router-dom";
function TestManagement() {
  const [activeMenu, setActiveMenu] = useState<string>("dashboard");

  return (
    <div className="flex w-full h-screen p-2 bg-[#E6F0FA]">
      <div className="w-[250px] fixed h-[calc(100vh-1rem)]">
        <ManagementSideNav
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />
      </div>
      <div className="ml-[250px] w-[calc(100%-250px)] h-[calc(100vh-1rem)] px-5 py-2 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default TestManagement;

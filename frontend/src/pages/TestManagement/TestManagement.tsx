import ManagementSideNav from "@/layouts/TestManagementLayouts/ManagementSideNav";
import RightPanel from "@/layouts/TestManagementLayouts/RightPanel";

function TestManagement() {
  return (
    <div className="flex w-full h-screen p-2 bg-[#E6F0FA] ">
      {/* side-navbar */}
      <div className="w-[250px] fixed h-[calc(100vh-1rem)]">
        <ManagementSideNav />
      </div>
      {/* right-panel */}
       <div className="ml-[250px] w-[calc(100%-250px)] h-[calc(100vh-1rem)]">
        <RightPanel />
      </div>
    </div>
  );
}

export default TestManagement;

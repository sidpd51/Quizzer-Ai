import { NavLink, useNavigate } from "react-router-dom";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { IoIosCreate } from "react-icons/io";
import { LuHistory } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";

interface ManagementSideNavProps {
  activeMenu: string;
  setActiveMenu: React.Dispatch<React.SetStateAction<string>>;
}

function ManagementSideNav({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  activeMenu,
  setActiveMenu,
}: ManagementSideNavProps) {
  const navigate = useNavigate();

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
  };

  return (
    <div className="w-full h-full bg-white rounded-xl flex flex-col gap-8 shadow-sm m-2">
      {/* heading */}
      <div className="h-2/12 flex items-center justify-center">
        <p className="text-3xl text-[#fb5d84]" id="heading-font">
          Quizzer Ai
        </p>
      </div>

      {/* test-menus */}
      <div className="flex-grow flex flex-col p-2 gap-5">
        <NavLink
          to="/test-management/dashboard"
          className={({ isActive }) =>
            `flex items-center pl-8 text-xl cursor-pointer p-2 rounded-full font-semibold ${isActive
              ? "text-black hover:bg-gray-800 hover:text-white"
              : "text-gray-600 hover:bg-gray-800 hover:text-white"
            }`
          }
          onClick={() => handleMenuClick("dashboard")}
        >
          <TbLayoutDashboardFilled className="mr-5 text-2xl" />
          Dashboard
        </NavLink>

        <NavLink
          to="/test-management/create-new"
          className={({ isActive }) =>
            `flex items-center pl-8 text-xl cursor-pointer p-2 rounded-full font-semibold ${isActive
              ? "text-black hover:bg-gray-800 hover:text-white"
              : "text-gray-600 hover:bg-gray-800 hover:text-white"
            }`
          }
          onClick={() => handleMenuClick("create-new")}
        >
          <IoIosCreate className="mr-5 text-2xl" />
          Create New
        </NavLink>

        <NavLink
          to="/test-management/tests"
          className={({ isActive }) =>
            `flex items-center pl-8 text-xl cursor-pointer p-2 rounded-full font-semibold ${isActive
              ? "text-black hover:bg-gray-800 hover:text-white"
              : "text-gray-600 hover:bg-gray-800 hover:text-white"
            }`
          }
          onClick={() => handleMenuClick("tests")}
        >
          <LuHistory className="mr-5 text-2xl" />
          Tests
        </NavLink>
      </div>

      <div
        className="h-2/12 flex items-center pl-8 text-2xl text-gray-300 cursor-pointer hover:text-[#fb5d84]"
        onClick={() => navigate("/signin")}
      >
        <LuLogOut className="mr-5" />
        Logout
      </div>
    </div>
  );
}

export default ManagementSideNav;

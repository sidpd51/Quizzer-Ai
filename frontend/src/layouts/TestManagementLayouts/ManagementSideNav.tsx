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
  activeMenu,
  setActiveMenu,
}: ManagementSideNavProps) {
  const navigate = useNavigate();

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
  };

  return (
    <div className="w-full h-full bg-[#2e697d] rounded-xl flex flex-col gap-8">
      {/* heading */}
      <div className="h-2/12 flex items-center justify-center">
        <p className="text-3xl text-gray-100" id="heading-font">
          Quizzer Ai
        </p>
      </div>

      {/* test-menus */}
      <div className="flex-grow flex flex-col p-2 gap-5">
        <NavLink
          to="/test-management/dashboard"
          className={({ isActive }) =>
            `flex items-center pl-8 text-xl cursor-pointer p-2 rounded-xl ${
              isActive
                ? "bg-gray-800 text-gray-200"
                : "text-gray-300 hover:bg-gray-800 hover:text-gray-200"
            }`
          }
          onClick={() => handleMenuClick("dashboard")}
        >
          <TbLayoutDashboardFilled className="mr-5 text-2xl" />
          Dashboard
        </NavLink>

        <NavLink
          to="/test-management/create-test"
          className={({ isActive }) =>
            `flex items-center pl-8 text-xl cursor-pointer p-2 rounded-xl ${
              isActive
                ? "bg-gray-800 text-gray-200"
                : "text-gray-300 hover:bg-gray-800 hover:text-gray-200"
            }`
          }
          onClick={() => handleMenuClick("create-test")}
        >
          <IoIosCreate className="mr-5 text-2xl" />
          Create Test
        </NavLink>

        <NavLink
          to="/test-management/all-tests"
          className={({ isActive }) =>
            `flex items-center pl-8 text-xl cursor-pointer p-2 rounded-xl ${
              isActive
                ? "bg-gray-800 text-gray-200"
                : "text-gray-300 hover:bg-gray-800 hover:text-gray-200"
            }`
          }
          onClick={() => handleMenuClick("all-tests")}
        >
          <LuHistory className="mr-5 text-2xl" />
          All Tests
        </NavLink>
      </div>

      <div
        className="h-2/12 flex items-center pl-8 text-2xl text-gray-300 cursor-pointer hover:text-red-400"
        onClick={() => navigate("/signin")}
      >
        <LuLogOut className="mr-5 text-2xl" />
        logout
      </div>
    </div>
  );
}

export default ManagementSideNav;

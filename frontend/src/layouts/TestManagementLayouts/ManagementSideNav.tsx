import { TbLayoutDashboardFilled } from "react-icons/tb";
import { IoIosCreate } from "react-icons/io";
import { LuHistory } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";


function ManagementSideNav() {
  return (
    <div className="w-full h-full bg-[#2e697d] rounded-xl flex flex-col gap-8">
      {/* heading */}
      <div className="h-2/12 flex items-center justify-center">
        <p className="text-3xl text-gray-100" id="heading-font">
          Quizzer Ai
        </p>
      </div>

      {/* test-menus */}
      <div className="flex-grow flex flex-col p-2 gap-7">
        <div className="flex items-center pl-8 text-xl text-gray-300 cursor-pointer p-2 rounded-xl hover:bg-gray-800 hover:text-gray-200 ">
          <TbLayoutDashboardFilled className="mr-5 text-2xl" />
          Dashboard
        </div>

        <div className="flex items-center pl-8 text-xl text-gray-300 cursor-pointer p-2 rounded-xl hover:bg-gray-800 hover:text-gray-200">
          <IoIosCreate className="mr-5 text-2xl" />
          Create Test
        </div>

        <div className="flex items-center pl-8 text-xl text-gray-300 cursor-pointer p-2 rounded-xl hover:bg-gray-800 hover:text-gray-200">
          <LuHistory className="mr-5 text-2xl" />
          All Tests
        </div>
      </div>

      <div className="h-2/12 flex items-center pl-8 text-2xl text-gray-300 cursor-pointer hover:text-red-400 ">
        <LuLogOut className="mr-5 text-2xl" />
        logout
      </div>
    </div>
  );
}

export default ManagementSideNav;

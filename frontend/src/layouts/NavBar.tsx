import { CiMenuBurger } from "react-icons/ci";

import { RxCross2 } from "react-icons/rx";

type NavBarProps = {
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileMenuOpen: boolean;
};

function NavBar({setIsMobileMenuOpen, isMobileMenuOpen}:NavBarProps) {
 

  return (
    <div className="w-full h-[80px] shadow-md flex justify-between items-center px-5 z-50">
      {/* company logo */}
      <div>
        <button
          id="heading-font"
          className="text-center font-semibold  text-3xl text-[#fb6f92]"
        >
          QUIZZER AI
        </button>
      </div>

      {/* nav-menu */}
      <div className="w-4/12 lg:flex hidden justify-around">
        <button className="text-lg hover:underline hover:scale-105">
          Dashboard
        </button>
        <button className="text-lg hover:underline hover:scale-105">
          Create Test
        </button>
      </div>

      {/* Auth */}
      <div className="lg:flex hidden ">
        {/* <button className="text-lg hover:underline">Logout</button> */}
        <button className="mr-4 text-lg hover:scale-105">Login</button>
        <button className="px-3 py-2 bg-[#100c08] text-white rounded-md hover:scale-105">
          Sign Up
        </button>
      </div>

      <div className="lg:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <RxCross2 className="text-4xl p-2 border rounded-md" />
          ) : (
            <CiMenuBurger className="text-4xl p-2 border rounded-md" />
          )}
        </button>
      </div>
    </div>
  );
}

export default NavBar;

import { Link } from "react-router";

function SignUpPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen sm:p-5  bg-neutral-300">
      <div className="w-full h-screen sm:h-auto sm:w-7/12 lg:w-5/12 flex flex-col items-center justify-center px-5 py-10 sm:rounded-lg bg-white shadow-lg">
        <div className="flex " id="heading">
          <h1 className="text-4xl md:text-6xl text-[#fb6f92]" id="heading-font">
            QUIZZER AI
          </h1>
        </div>

        <div className="mt-8 md:mt-20 flex flex-col w-11/12 ">
          {/* <p className="text-xl md:text-2xl mb-2 font-semibold pl-2">Create an account</p> */}
          <input
            type="text"
            placeholder="Name"
            className=" text-sm md:text-xl lg:text-base p-2 my-2 border-b border-gray-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="text-sm md:text-xl lg:text-base p-2 my-2 border-b border-gray-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="text-sm md:text-xl lg:text-base p-2 my-2 border-b border-gray-300"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="text-sm md:text-xl lg:text-base p-2 my-2 border-b border-gray-300"
          />
          <Link className="text-sm text-blue-700 cursor-pointer mt-5 underline hover:text-blue-900" to="/signin">
            Already have an account?
          </Link>
          <button className="w-full md:text-3xl lg:text-base mt-4 p-2 rounded-md bg-[#151E3D] hover:bg-[#2d344b] text-white">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;

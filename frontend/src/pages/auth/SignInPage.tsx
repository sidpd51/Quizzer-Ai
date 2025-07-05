
export const SignInPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen p-5 bg-[#F8f8ff]">
      <div className="flex " id="heading">
        <h1 className="text-4xl md:text-6xl text-[#fb6f92]" id="heading-font">
          QUIZZER AI
        </h1>
      </div>

      <div className="mt-8 md:mt-20 flex flex-col w-full md:w-9/12 lg:w-4/12">
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

        <p className="text-sm text-blue-700 cursor-pointer mt-5 underline">Don't have an account? create one</p>

        <button className="w-full md:text-3xl lg:text-base mt-4 p-2 rounded-md bg-[#151E3D] hover:bg-[#2d344b] text-white">
          Sign In
        </button>
      </div>
    </div>
  )
}

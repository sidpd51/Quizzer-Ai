function HomeHero() {
  return (
    <div className="absolute w-full h-[screen-80px] flex flex-col items-center p-5 mt-10 ">
      <p className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#fb6f92] mt-20 lg:w-10/12 text-start md:text-center lg:text-center">
        Smarter Exams Start Here. AI-Generated Quizzes in Seconds.
      </p>

      <p className="mt-20 text-start md:text-center lg:text-center text-lg md:text-xl lg:text-2xl text-gray-500">
        Create, take, and grade intelligent MCQ tests — powered by AI.
        <br />
        Perfect for students, teachers, and institutions.
      </p>

      <div className="mt-20">
        <button className="px-3 py-2 p-2 rounded-md bg-[#151E3D] hover:bg-[#2d344b] text-2xl text-white">Create Test</button>
      </div>
    </div>
  );
}

export default HomeHero;

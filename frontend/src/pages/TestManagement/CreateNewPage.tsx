const CreateNewPage = () => {
  return (
    <div className="text-lg w-full bg-white flex flex-col p-4 rounded-xl">
      {/* subject name */}
      <p className="text-3xl text-gray-800 font-semibold">Create Test</p>
      <hr></hr>
      <label className="text-gray-800 mt-6 italic">Add Subject Name</label>
      <input
        type="text"
        placeholder="Physics, Chemistry, Biology etc."
        className="border border-gray-300 rounded-md p-2 mt-2 bg-[#f8f8ff] mb-5"
      />

      {/* test-details */}
      <label className="text-gray-800 italic">Add Test Details</label>
      <textarea
        rows={15}
        placeholder="Explain the test in detail ..."
        className="border border-gray-300 rounded-md p-2 mt-2 bg-[#f8f8ff] mb-5 resize-none"
      />

      {/* question-quantity */}
      <label className="text-gray-800 italic">
        Select Number of Questions
      </label>
      <select className="w-5/12 border border-gray-300 rounded-md p-2 mt-2 bg-[#f8f8ff] mb-5">
        <option value="">Select</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="50">50</option>
      </select>

      {/* question-difficulty */}
      <label className="text-gray-800 italic">
        Select Difficulty of Questions
      </label>
      <select className="w-5/12 border border-gray-300 rounded-md p-2 mt-2 bg-[#f8f8ff] mb-5 italic">
        <option value="">Select</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      {/* tags */}
      <label className="text-gray-800">Add Tags/Keywords</label>
      <input
        type="text"
        placeholder="motion, gravity, intertia etc."
        className="border border-gray-300 rounded-md p-2 mt-2 bg-[#f8f8ff] mb-5"
      />

      <div className="flex justify-center mt-5">
        <button className="px-5 py-2 bg-[#100c08] text-white rounded-md hover:bg-[#211f1e] hover:scale-105">Create</button>
      </div>
    </div>
  );
};

export default CreateNewPage;

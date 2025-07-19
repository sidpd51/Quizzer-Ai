import { TestSchema, type TestType } from "@/schemas/test.type";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const CreateNewPage = () => {

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<TestType>({
    resolver: zodResolver(TestSchema)
  });

  const onSubmit: SubmitHandler<TestType> = async (data) => {
    try {
      const { questionCount, ...rest } = data;
      const newPayload = { ...rest, questionCount: parseInt(questionCount) }
      console.log(newPayload);
      const response = await fetch('http://localhost:3542/api/v1/tests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPayload),
        credentials: 'include' // if you're using cookies/session
      });
      await response.json();
      toast.success("Your test has been created successfully");
      navigate("/test-management/tests")
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error("Something went wrong")
      } else {
        toast.error("Unexpected error")
      }
    }
  }

  return (
    <form className="text-lg w-full bg-white flex flex-col p-4 rounded-xl" onSubmit={handleSubmit(onSubmit)}>
      {/* subject name */}
      <p className="text-3xl text-gray-800 font-semibold">Create Test</p>
      <hr></hr>
      <label className="text-gray-800 mt-6 italic">Add Subject Name</label>
      <input
        type="text"
        {...register("subject")}
        placeholder="Physics, Chemistry, Biology etc."
        className="border border-gray-300 rounded-md p-2 mt-2 bg-[#f8f8ff] mb-5"
      />
      {errors.subject && <div className="text-xs text-red-400">{errors.subject.message}</div>}
      {/* test-details */}
      <label className="text-gray-800 italic">Add Test Details</label>
      <textarea
        rows={15}
        {...register("description")}
        placeholder="Explain the test in detail ..."
        className="border border-gray-300 rounded-md p-2 mt-2 bg-[#f8f8ff] mb-5 resize-none"
      />
      {errors.description && <div className="text-xs text-red-400">{errors.description.message}</div>}

      {/* question-quantity */}
      <label className="text-gray-800 italic">
        Select Number of Questions
      </label>
      <select
        {...register("questionCount")} className="w-5/12 border border-gray-300 rounded-md p-2 mt-2 bg-[#f8f8ff] mb-5">
        <option value="">Select</option>
        <option value="10">10</option>
        <option value="30">30</option>
        <option value="50">50</option>
      </select>
      {errors.questionCount && <div className="text-xs text-red-400">{errors.questionCount.message}</div>}
      {/* question-difficulty */}
      <label className="text-gray-800 italic">
        Select Difficulty of Questions
      </label>
      <select {...register("difficulty")} className="w-5/12 border border-gray-300 rounded-md p-2 mt-2 bg-[#f8f8ff] mb-5 italic">
        <option value="">Select</option>
        <option value="EASY">Easy</option>
        <option value="NORMAL">Normal</option>
        <option value="HARD">Hard</option>
      </select>
      {errors.difficulty && <div className="text-xs text-red-400">{errors.difficulty.message}</div>}

      {/* tags */}
      <label className="text-gray-800">Add Tags/Keywords</label>
      <input
        type="text"
        {...register("tags")}
        placeholder="motion, gravity, intertia etc."
        className="border border-gray-300 rounded-md p-2 mt-2 bg-[#f8f8ff] mb-5"
      />
      {errors.tags && <div className="text-xs text-red-400">{errors.tags.message}</div>}

      <div className="flex justify-center mt-5">
        <button type="submit" disabled={isSubmitting} className="px-5 py-2 bg-[#100c08] text-white rounded-md hover:bg-[#211f1e] hover:scale-105">{isSubmitting ? "Creating..." : "Create"}</button>
      </div>
    </form>
  );
};

export default CreateNewPage;

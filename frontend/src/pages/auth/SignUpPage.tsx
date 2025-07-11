import { signUpSchema, type SignUpFormType } from "@/schemas/auth.type";
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from 'sonner';

function SignUpPage() {
  const navigate = useNavigate();
  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<SignUpFormType>({
    resolver: zodResolver(signUpSchema)
  });

  const onSubmit: SubmitHandler<SignUpFormType> = async (data) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...restAttributes } = data;
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3542/api/v1/signup',
        data: restAttributes
      });
      toast.success(response.data.message);
      setTimeout(() => {
        navigate('/signin');
      }, 800);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 409) {
        console.log(error)
        setError("email", {
          message: error.response?.data?.message.split('.')[0]
        });
      } else {
        console.error('Unexpected error:', error);
      }
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen sm:p-5  bg-neutral-300">
      <div className="w-full h-screen sm:h-auto sm:w-7/12 lg:w-5/12 flex flex-col items-center justify-center px-5 py-10 sm:rounded-lg bg-white shadow-lg">
        <div className="flex " id="heading">
          <h1 className="text-4xl md:text-6xl text-[#fb6f92]" id="heading-font">
            QUIZZER AI
          </h1>
        </div>
        <form className="mt-8 md:mt-20 flex flex-col w-11/12 " onSubmit={handleSubmit(onSubmit)}>
          {/* <p className="text-xl md:text-2xl mb-2 font-semibold pl-2">Create an account</p> */}
          <input
            {...register("name")}
            type="text"
            placeholder="Name"
            className=" text-sm md:text-xl lg:text-base p-2 my-2 border-b border-gray-300"
          />
          {errors.name && <div className="text-xs text-red-400">{errors.name.message}</div>}
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="text-sm md:text-xl lg:text-base p-2 my-2 border-b border-gray-300"
          />
          {errors.email && <div className="text-xs text-red-400">{errors.email.message}</div>}
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="text-sm md:text-xl lg:text-base p-2 my-2 border-b border-gray-300"
          />
          {errors.password && <div className="text-xs text-red-400">{errors.password.message}</div>}
          <input
            {...register("confirmPassword")}
            type="password"
            placeholder="Confirm Password"
            className="text-sm md:text-xl lg:text-base p-2 my-2 border-b border-gray-300"
          />
          {errors.confirmPassword && <div className="text-xs text-red-400">{errors.confirmPassword.message}</div>}
          <Link className="text-sm text-blue-700 cursor-pointer mt-5 underline hover:text-blue-900" to="/signin">
            Already have an account?
          </Link>
          <button disabled={isSubmitting} type="submit" className="w-full md:text-3xl lg:text-base mt-4 p-2 rounded-md bg-[#151E3D] hover:bg-[#2d344b] text-white">
            {isSubmitting ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;

import { useAuth } from "@/context/AuthContext";
import { useApi } from "@/lib/api";
import { signInSchema, type SignInFormType } from "@/schemas/auth.type";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

export const SignInPage = () => {
  const navigate = useNavigate();
  const api = useApi()
  const { setAccessToken } = useAuth();

  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<SignInFormType>({
    resolver: zodResolver(signInSchema)
  });

  const onSubmit: SubmitHandler<SignInFormType> = async (data) => {
    try {
      const res = await api({
        method: 'post',
        url: 'http://localhost:3542/api/v1/signin',
        data: data,
        withCredentials: true,
      });
      const token = res.data.accessToken;
      if (token) {
        setAccessToken(token);
        toast.success("Successfully logged In");
        navigate("/");
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        setError("password", {
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
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 md:mt-20 flex flex-col w-11/12">
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
          <p className="text-sm text-blue-700 mt-5">
            Don't have an account?{' '}
            <Link to="/signup" className="underline hover:text-blue-900">
              Create one
            </Link>
          </p>
          <button type="submit" disabled={isSubmitting} className="w-full md:text-3xl lg:text-base mt-4 p-2 rounded-md bg-[#151E3D] hover:bg-[#2d344b] text-white">
            {isSubmitting ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

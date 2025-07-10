import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      return setError("Please fill in all fields.");
    }

    if (password !== confirmPassword) {
      return setError("Passwords do not match.");
    }

    try {
      const res = await axios.post("http://localhost:3000/api/v1/signup", {
        name,
        email,
        password,
      });

      // Success: redirect to SignIn
      navigate("/signin");
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Registration failed. Try again.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen sm:p-5 bg-neutral-300">
      <div className="w-full h-screen sm:h-auto sm:w-7/12 lg:w-5/12 flex flex-col items-center justify-center px-5 py-10 sm:rounded-lg bg-white shadow-lg">
        <div className="flex" id="heading">
          <h1 className="text-4xl md:text-6xl text-[#fb6f92]" id="heading-font">
            QUIZZER AI
          </h1>
        </div>

        <form className="mt-8 md:mt-20 flex flex-col w-11/12" onSubmit={handleSubmit}>
          {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="text-sm md:text-xl lg:text-base p-2 my-2 border-b border-gray-300"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="text-sm md:text-xl lg:text-base p-2 my-2 border-b border-gray-300"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="text-sm md:text-xl lg:text-base p-2 my-2 border-b border-gray-300"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="text-sm md:text-xl lg:text-base p-2 my-2 border-b border-gray-300"
          />

          <Link
            className="text-sm text-blue-700 cursor-pointer mt-5 underline hover:text-blue-900"
            to="/signin"
          >
            Already have an account?
          </Link>

          <button
            type="submit"
            className="w-full md:text-3xl lg:text-base mt-4 p-2 rounded-md bg-[#151E3D] hover:bg-[#2d344b] text-white"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;

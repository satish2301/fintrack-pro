import React, { useState } from 'react'
import Sign_up from "../static/assets/Sign-up.gif"
import Logo from "../static/assets/bull.png";
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import WebRoutes from '../routes';
const Register = () => {
  const navigate = useNavigate();
  const [hideShowPassword, setHideShowPassword] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/dashboard");
  }
  return (
    <div className="h-screen overflow-hidden bg-gray-100 flex items-center justify-center px-2 sm:px-4 py-4">
      <div className="w-full max-w-6xl h-full md:h-auto bg-white rounded-lg shadow-lg overflow-hidden">

        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {/* Left Image Section */}

          <div className="flex items-center justify-center p-2 sm:p-10">
            <div className="w-full max-w-md">
              <img src={Logo} alt="logo" className="w-30 mb-1 mx-auto" />
              <p className="text-gray-600 mb-6 text-center bg-gray-50 p-3 rounded-2xl text-sm sm:text-base">
                Welcome back! Please Sign up to your account.
              </p>

              <form className="flex flex-col">

                <div className="mb-3">
                  <label className="mb-1 block text-sm">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>

                <div className="mb-3">
                  <label className="mb-1 block text-sm">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>

                <div className="relative mb-4">
                  <label className="mb-1 block text-sm">Password</label>
                  <input
                    type={hideShowPassword ? "password" : "text"}
                    placeholder="Enter your password"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                  <div
                    className="absolute right-3 top-9 cursor-pointer"
                    onClick={() => setHideShowPassword(!hideShowPassword)}
                  >
                    {hideShowPassword ? <FaEye /> : <FaEyeSlash />}
                  </div>
                </div>

                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="bg-blue-500 text-white p-2 mt-1 rounded hover:bg-blue-600"
                >
                  Register
                </button>

                <p className="text-center text-gray-500 text-sm mt-3">
                  Already have an account?
                  <a
                    href={WebRoutes.LOGIN}
                    className="text-blue-500 hover:underline"
                  >
                    Login
                  </a>
                </p>
              </form>
            </div>
          </div>

          <div className="hidden md:block h-[90%] m-auto">
            <img
              src={Sign_up}
              alt="login"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
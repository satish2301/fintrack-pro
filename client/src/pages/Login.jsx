import React, { useState } from 'react'
import LoginImage from "../static/assets/login-image.gif"
import Logo from "../static/assets/bull.png";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Navigate, useNavigate } from 'react-router-dom';
import WebRoutes from '../routes';

const Login = () => {
    const navigate = useNavigate();
    const [hideShowPassword, setHideShowPassword] = useState(true);
    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(WebRoutes.DASHBOARD);
    }
    return (
        <div className="h-screen overflow-hidden bg-gray-100 flex items-center justify-center px-2 sm:px-4 py-4">
            <div className="w-full max-w-6xl h-full md:h-auto bg-white rounded-lg shadow-lg overflow-hidden">

                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                    {/* Left Image Section */}
                    <div className="hidden md:block h-[90%] m-auto">
                        <img
                            src={LoginImage}
                            alt="login"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Right Login Form Section */}
                    <div className="flex items-center justify-center p-2 sm:p-10">
                        <div className="w-full max-w-md">
                            <img src={Logo} alt="logo" className="w-30 mb-1 mx-auto" />
                            <p className="text-gray-600 mb-6 text-center bg-gray-50 p-3 rounded-2xl text-sm sm:text-base">
                                Welcome back! Please login to your account.
                            </p>

                            <form className="flex flex-col">
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
                                    className="bg-blue-500 cursor-pointer text-white p-2 mt-1 rounded hover:bg-blue-600"
                                >
                                    Login
                                </button>

                                <p className="text-center text-gray-500 text-sm mt-3">
                                    Don&apos;t have an account?{" "}
                                    <a href=''
                                        onClick={() => navigate("/register")}
                                        className="text-blue-500 hover:underline"
                                    >
                                        Register
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Login
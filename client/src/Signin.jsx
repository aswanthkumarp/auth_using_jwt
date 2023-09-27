import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import axios from "axios";

const Signin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/signin",
        formData
      );
      console.log("Login successful:", response.data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Registration error:", error);
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred. Please try again later");
      }
    }
  };

  const redirectToHomepage = () => {
    navigate("/");
  };

  return (
    <div className="flex h-screen bg-primary">
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 flex flex-col items-center justify-center p-8">
        <div className="mb-6 cursor-pointer" onClick={redirectToHomepage}>
        
        </div>

        <div className="max-w-md w-full">
          <h2 className="text-3xl font-semibold text-center text-cyan-500 mb-6">Sign In</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label className="block text-gray-600 font-medium">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border rounded-md px-3 py-2 mt-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-600 font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full border rounded-md pl-3 px-3 py-2 mt-2 focus:outline-none focus:border-blue-500"
                  placeholder="Enter your password"
                  required
                />
                <span
                  className="absolute top-2 right-3 cursor-pointer mt-1"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </span>
              </div>
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white rounded-md py-2 font-semibold hover:bg-blue-600 transition duration-300"
              >
                Sign In
              </button>
            </div>
            {error && <p className="text-red-600 text-center mb-2">{error}</p>}
            <p className="text-gray-600 text-center">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>

      <div className="hidden sm:block w-1/2 mt-11 ml-8">
     
      </div>
    </div>
  );
};

export default Signin;

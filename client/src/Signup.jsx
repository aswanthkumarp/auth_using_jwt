import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";


const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const redirectToHomepage = () => {
    navigate("/");
  };


  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/signup",
        formData
      );

      console.log("Registration successful:", response.data);
      alert("Registration Successful");
      navigate("/");
      setErrors("");
    } catch (error) {
      console.error("Registration error:", error);

      if (error.response) {
        setErrors(error.response.data.message);
      } else {
        setErrors("An error occurred. Please try again later");
      }
    }
  };

  return (
    <div className="flex h-screen bg-primary">
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 flex flex-col items-center justify-center p-8">
        <div className="mb-2 cursor-pointer" onClick={redirectToHomepage}>
         
        </div>
        <h2 className="text-3xl font-semibold text-cyan-500 mb-6">Sign Up</h2>
        <form onSubmit={handleFormSubmit} className="max-w-md w-full">
          <div className="mb-4">
            <label className="block text-gray-600 font-medium">
              Username
            </label>
            <input
              type="text"
              className="w-full border rounded-md px-3 py-2 mt-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter your username"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 font-medium">
              Email Address
            </label>
            <input
              type="email"
              className="w-full border rounded-md px-3 py-2 mt-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
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
                className="w-full border rounded-md pl-3 px-3 py-2 mt-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
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

          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded-md py-2 font-semibold hover:bg-blue-600 transition duration-300"
            >
              Sign Up
            </button>
          </div>
          {errors && (
            <p className="text-red-600 text-center mb-2">{errors}</p>
          )}
          <p className="text-gray-600 text-center">
            Already have an account?{" "}
            <Link to="/" className="text-blue-500 hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden sm:block w-1/2 mt-11 ml-8">
        {/* Your image goes here */}
       
      </div>
    </div>
  );
};

export default Signup;

import React, { useState } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous error message

    try {
      const csrfToken = sessionStorage.getItem('csrfToken');
      const response = await fetch("http://localhost:8000/web/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'X-CSRF-TOKEN': csrfToken,
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include'
      });
  
      const data = await response.json();
      if (response.ok) {
        switch (data.role) {
          case 'admin':
              window.location.href = '/Registrations';
              break;
          case 'reviewer':
              window.location.href = '/ReviewingPage';
              break;
          case 'attendee':
            window.location.href = '/attendeePage';
            break;
          case 'volunteer':
              window.location.href = '/volunteer';
              break;
          case 'presenter':
              window.location.href = '/Student';
              break;
          default:
              window.location.href = '/'; 
              break;
        }
      } else {
        setErrorMessage(data.message || 'Invalid email or password');
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="w-full bg-white absolute top-0 left-0">
      <div className="flex h-screen justify-center items-center">
        <div className="flex w-full h-full m-auto">
          <div className="leftLogin flex-[1.5] bg-gray-100 p-10">
            <div className="max-w-md m-auto">
              <h2 className="text-center text-3xl font-bold mb-10">
                Sign in to the system
              </h2>
              {errorMessage && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-5" role="alert">
                  <span className="block sm:inline">{errorMessage}</span>
                </div>
              )}
              <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col">
                  <label htmlFor="yourEmail" className="mb-2 font-semibold">YOUR EMAIL</label>
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="yourEmail"
                    className="p-3 border rounded"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="password" className="mb-2 font-semibold">PASSWORD</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      name="password"
                      className="p-3 border rounded w-full"
                      required
                    />
                    <div
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                  </div>
                </div>
                <div className="text-center mt-5">
                  <button
                    className="w-full text-xl py-3 rounded bg-purple-600 text-white hover:bg-purple-700 transition duration-300"
                    type="submit"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="rightLogin flex-[1.1] bg-purple-600 hidden md:block"></div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

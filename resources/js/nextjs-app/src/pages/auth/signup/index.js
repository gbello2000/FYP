import React, { useState } from "react";
import Link from "next/link";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirmPassword] = useState("");
  const [role, setRole] = useState("presenter");
  const [errorMessage, setErrorMessage] = useState("");
  const [csrfToken, setCsrfToken] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== password_confirmation) {
      setErrorMessage("Passwords do not match.");
      return; 
    }

    try {
      const csrfToken = sessionStorage.getItem('csrfToken');
      const response = await fetch("http://localhost:8000/web/auth/signup", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              'X-CSRF-TOKEN': csrfToken,
          },
          body: JSON.stringify({ username, email, password, password_confirmation, role }),
          credentials: 'include'
      });

      if (!response.ok) {
          const errorMes = `Network response was not ok: ${response.status} ${response.statusText}`;
          setErrorMessage(errorMes);
          throw new Error(errorMes);
      }
      if (response.ok) {
        window.location.href = '/auth/signin';
      }
      
      setErrorMessage(""); 
      
      console.log("Signup successful!");

    } catch (error) {
      console.error("Fetch error:", error.message);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="w-full bg-white absolute top-0 left-0">
      <div className="flex justify-center items-center h-screen">
        <div className="flex w-full m-auto">
          <div className="leftLogin1 flex-[1.1] flex justify-center items-center bg-purple-600">
            <div className="bg-white p-[50px] rounded-[10px] text-center shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Welcome</h2>
              <p className="mb-4">Already have an account?</p>
              <button className="w-[140px] rounded-[5px] text-white h-[40px] mt-[20px] bg-purple-500 hover:bg-purple-600 transition duration-300">
                <Link href="/auth/signin">Sign In</Link>
              </button>
            </div>
          </div>
          <div className="rightLogin1 flex-[1.5] bg-gray-100">
            <div className="p-[40px]">
              <h2 className="text-center text-3xl font-bold mt-[50px] mb-[50px]">
                Sign Up to Student Spring Symposium
              </h2>
              <form
                className="flex flex-col w-[60%] m-auto gap-[10px]"
                onSubmit={handleSubmit}
              >
                {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}
                <div className="inp">
                  <label htmlFor="yourName" className="block font-semibold mb-2">YOUR NAME</label>
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    name="yourName"
                    className="p-3 border rounded w-full"
                    required
                  />
                </div>
                <div className="inp">
                  <label htmlFor="yourEmail" className="block font-semibold mb-2">YOUR EMAIL</label>
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="yourEmail"
                    className="p-3 border rounded w-full"
                    required
                  />
                </div>
                <div className="inp">
                  <label htmlFor="password" className="block font-semibold mb-2">PASSWORD</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    className="p-3 border rounded w-full"
                    required
                  />
                </div>
                <div className="inp">
                  <label htmlFor="confirmPassword" className="block font-semibold mb-2">CONFIRM PASSWORD</label>
                  <input
                    type="password"
                    placeholder="Enter your password again"
                    value={password_confirmation}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    name="confirmPassword"
                    className="p-3 border rounded w-full"
                    required
                  />
                </div>
                <div className="inp">
                  <label htmlFor="role" className="block font-semibold mb-2">ROLE</label>
                  <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="p-3 border rounded w-full"
                  >
                    <option value="presenter">Presenter</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="attendee">Attendee</option>
                  </select>
                </div>
                <div className="text-center mt-5">
                  <button
                    className="w-full text-xl py-3 rounded bg-purple-600 text-white hover:bg-purple-700 transition duration-300"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

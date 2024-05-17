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
          body: JSON.stringify({ username, email, password,password_confirmation, role }),
          credentials: 'include'
      });
      //if(response.ok){window.location.href='/auth/signin'}

      if (!response.ok) {
          const errorMes = `Network response was not ok: ${response.status} ${response.statusText}`;
          setErrorMessage(errorMes);
          throw new Error(errorMes);
      }
      if (response.ok) {
        
        window.location.href='/auth/signin';
    }

      
      setErrorMessage(""); 
      
      console.log("Signup successful!");

    } catch (error) {
      console.error("Fetch error:", error.message);
      console.error("Fetch error:", error);
    }
  };

  return (
    <div className="w-[100%] bg-[#ffffff] absolute top-0 left-0">
      <div className="flex justify-center items-center">
        <div className="signup flex w-[100%] m-auto">
          <div className="leftLogin1 flex-[1.1] flex justify-center items-center">
            <div className="bg-[#ffffffcc] backdrop-blur-sm p-[50px] rounded-[10px] text-center">
              <h2 className="text-[30px]">Welcome</h2>
              <button className="w-[140px] rounded-[5px] text-[white] h-[40px] mt-[20px] bg-[#7848f4]">
                <Link href="/auth/signin">Sign In</Link>
              </button>
            </div>
          </div>
          <div className="rightLogin1 flex-[1.5] bg-[#f8f8fa]">
            <div className="paddingLogin p-[40px]">
              <h2 className="text-center text-[30px] mt-[50px] mb-[50px]">
                Sign Up to Student Spring Symposium
              </h2>
              <form
                className="rightLg p-[30px] flex flex-col w-[60%] m-auto gap-[10px]"
                onSubmit={handleSubmit}
              >
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                <div className="inp">
                  <label id="yourName">YOUR NAME</label>
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    name="yourName"
                  />
                </div>
                <div className="inp">
                  <label id="yourEmail">YOUR EMAIL</label>
                  <input
                    type="text"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="yourEmail"
                  />
                </div>
                <div className="inp">
                  <label id="password">PASSWORD</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                  />
                </div>
                <div className="inp">
                  <label id="confirmPassword">CONFIRM PASSWORD</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password_confirmation}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    name="confirmPassword"
                  />
                </div>
                <div className="inp">
                  <label id="role">Role</label>
                  <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="bg-[white]  flex justify-center items-center h-[60px] text-[#aaaaaa]"
                  >
                    <option value="presenter">Presenter</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="atendee">Atendee</option>
                    
                  </select>
                </div>
                <div className="text-center mt-[20px]">
                  <button
                    className="w-[280px] text-[19px]  m-auto text-center rounded-[5px] text-[white] h-[50px] mt-[20px] bg-[#7848f4]"
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

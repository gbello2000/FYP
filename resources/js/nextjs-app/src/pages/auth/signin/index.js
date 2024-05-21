import React, { useState } from "react";
import Link from "next/link";



function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [csrfToken, setCsrfToken] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    //const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    //setCsrfToken(token);
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
        throw new Error(data.message);
    }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  return (
    <div className="w-[100%]  bg-[#ffffff] absolute top-0 left-0">
      <div className="flex h-[100vh] justify-center items-center ">
        <div className="flex w-[100%] h-[100vh] m-auto  ">
          <div className="leftLogin flex-[1.5] bg-[#f8f8fa]  ">
            <div className="p-[40px] ">
              <h2 className="text-center text-[30px] mt-[50px] mb-[50px]">
                Sign in to the system
              </h2>
              <form
                className="rightLg p-[30px] flex flex-col gap-[10px] w-[60%] m-auto "
                onSubmit={handleSubmit}
              >
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
                <div className="text-center mt-[20px]">
                  <button
                    className="w-[280px] text-[19px]  m-auto text-center rounded-[5px] text-[white] h-[50px] mt-[20px] bg-[#7848f4]"
                    type="submit"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="rightLogin flex-[1.1]  bg-[#7848f4]"></div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

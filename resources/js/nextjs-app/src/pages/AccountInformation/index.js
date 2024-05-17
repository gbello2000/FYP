import React, { useState, useEffect } from "react"; // Uvoz useEffect zajedno sa useState
import Footer from "../components/Footer/Footer";

export default function AccountInformation() {
  const [showAccountInfo, setShowAccountInfo] = useState(false);
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const [csrfToken, setCsrfToken] = useState('');
  const [email,setEmail]=useState('') // Ako planirate da koristite csrfToken, morate ga prvo definisati

  useEffect(() => {
    fetch('http://localhost:8000/web/session-data', {
      credentials: 'include' // Ovo omogućava slanje cookies, što je bitno za sesije
    })
    .then(response => response.json())
    .then(data => {
      setUsername(data.username || 'Guest');
      setRole(data.role || 'No role assigned');
      setCsrfToken(data.csrfToken);
      setEmail(data.email); // Ovo će postaviti csrfToken ako je došao sa servera
    })
    .catch(error => console.error('Error fetching session data:', error));
  }, []);

  return (
    <div>
      <div className="mb-[90px] p-[38px]">
        <div className="lg:w-[50%]  sm:w-[80%] md:w-[80%]  m-auto ">
          {/* Student Spring Symposium  */}
          <h2 className="text-center text-[30px]">Account Information</h2>
          <form className="p-[30px] flex flex-col gap-[10px]">
            <div className="inp">
              <label id="studentName">Username</label>
              <div className="w-[100%] h-[60px] rounded-[5px] flex pl-[10px] items-center bg-[white]">
              <label className="text-[#9d9c9c]">{username}</label>
              </div>
            </div>
            <div className="inp">
              <label id="email">Email</label>
              <div className="w-[100%] h-[60px] rounded-[5px] flex pl-[10px] items-center bg-[white]">
              <label className="text-[#9d9c9c]">{email}</label>
              </div>
              
            </div>

            <div className="inp">
              <label id="role">Role</label>
              <div className="w-[100%] h-[60px] rounded-[5px] flex pl-[10px] items-center bg-[white]">
              <label className="text-[#9d9c9c]">{role}</label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

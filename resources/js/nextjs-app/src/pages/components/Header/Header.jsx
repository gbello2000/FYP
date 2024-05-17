import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Users from './../../../../public/photo/users.webp';
import { IoIosLogOut } from 'react-icons/io';
import Link from 'next/link';
import Logo from './../../../../public/photo/Logo.png';



function Header() {
  const [showAccountInfo, setShowAccountInfo] = useState(false);
  const [username, setUsername] = useState('');
  const [csrfToken, setCsrfToken] = useState('Guest');

  useEffect(() => {
    //const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        //setCsrfToken(token);
    fetch('http://localhost:8000/web/session-data', {
      credentials: 'include' // Ovo omogućava slanje cookies, što je bitno za sesije
    })
    .then(response => response.json())
    .then(data => {
      setUsername(data.username || 'Guest');
      setCsrfToken(data.csrfToken);
    })
    .catch(error => console.error('Error fetching session data:', error));
  }, []);


  const handleProfileMouseEnter = () => {
    setShowAccountInfo(true);
  };

  const handleProfileMouseLeave = () => {
    setShowAccountInfo(false);
  };

  const handleAccountInfoMouseEnter = () => {
    setShowAccountInfo(true);
  };

  const handleAccountInfoMouseLeave = () => {
    setShowAccountInfo(false);
  };

  const handleAccountInfoClick = () => {
    setShowAccountInfo(!showAccountInfo);
  };
  
  const handleLogout = async () => {
    try {
      

    // Opciono: Pozovemo backend da se takođe izvrši logout na serveru
    const response = await fetch('http://localhost:8000/web/logout', {
      method: 'POST',
      credentials: 'include', // Da bismo uključili cookies u zahtev
      headers: {
        'Content-Type': 'application/json',
        
    'X-CSRF-TOKEN': csrfToken // Neophodno ako je CSRF zaštita aktivna na ovom endpointu
      }
    });
    if (response.ok) {
      // Osvežavanje stranice nakon uspešnog logout-a
      window.location.href='/';
    } else {
      // Ako odgovor nije OK, obradite greške
      const errorData = await response.json();
      console.error('Logout failed:', errorData);
    }
  } catch (error) {
    console.error('Logout error:', error);
  }
  };
  
  
  

  return (
    <div className="bg-[#ffffff]">
      <div className="w-[98%] p-[20px] flex m-auto justify-between items-center">
        <div className="text-[25px]">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width={100}
              className="logo object-cover"
            />
          </Link>
        </div>
        <div className="flex gap-[18px]">
          {/* Profile Button */}
          <div
            className="relative"
            onMouseEnter={handleProfileMouseEnter}
            onMouseLeave={handleProfileMouseLeave}
          >
            <button className="flex text-[#151515] justify-center gap-2 cursor-pointer items-center w-[147px] rounded-[5px] h-[50px] hover:bg-[#f4f4f6]">
              <Image
                src={Users}
                alt="users"
                width={50}
                height={50}
                className="rounded-[50px] w-[39px] h-[39px] object-cover border-[2px] border-[#bdbdbd]"
              />
               <Link href="/AccountInformation"><span className="text-[16px]">{username}</span></Link>
              
            </button>
            {showAccountInfo && (
              <div
                className="absolute z-[25] w-[179px] mt-[10px] h-[40px] shadow-lg bg-[#ffffff] rounded-[5px] flex justify-center items-center"
                onMouseEnter={handleAccountInfoMouseEnter}
                onMouseLeave={handleAccountInfoMouseLeave}
              >
                <Link
                  href="/AccountInformation"
                  onClick={handleAccountInfoClick}
                >
                  Account Information
                </Link>
              </div>
            )}
          </div>
          {/* Logout Button - Conditionally Rendered */}
          {username !== 'Guest' && (
            <div className="flex items-center justify-center">
              <button className="flex items-center w-[120px] rounded-[5px] h-[50px] justify-center gap-2 bg-[#ff5c81] text-[white] hover:bg-[#e93c64]"
                      onClick={handleLogout}>
                <IoIosLogOut />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;

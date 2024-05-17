import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MdSpaceDashboard } from "react-icons/md";
import { BsCalendar4Event } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { IoSchoolOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { useRouter } from "next/router";
import { IoCalendarOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";

function LeftNav() {
  const router = useRouter();
  const [username, setUsername] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/web/session-data', {
      credentials: 'include' // Ovo omogućava slanje cookies, što je bitno za sesije
    })
    .then(response => response.json())
    .then(data => {
      setUsername(data.username);
      setRole(data.role || 'Guest');
      
    }
  )
    
    .catch(error => console.error('Error fetching session data:', error));
  }, []);

  useEffect(() => {
    if (role) { // Provera da role nije null ili undefined
      console.log('Updated role in state:', role); // Loguje ažuriranu ulogu
    }
  }, [role]);

  return (
    <div>
      <div>
        <ul className="flex flex-col gap-[8px]">

        {role === 'Guest' && (
            <>
            
            <NavLink href="/Profile" router={router}>
            <CiUser className="navLogo" />
            <span>Profile</span>
          </NavLink>
          <NavLink href="/Sponsors" router={router}>
            <FaUsers className="navLogo" />
            <span>Sponsors</span>
          </NavLink>
          <NavLink href="/Event" router={router}>
            <BsCalendar4Event className="navLogo" />
            <span>Events</span>
          </NavLink>
          
          
          <NavLink href="/College" router={router}>
            <IoSchoolOutline className="navLogo" />
            <span>College</span>
          </NavLink>

            </>
          )}

        {role === 'admin' && (
            <>
             <NavLink href="/Registrations" router={router}>
            <IoCalendarOutline className="navLogo" />
            <span>Registrations </span>
          </NavLink>
            
            <NavLink href="/Dashboard" router={router}>
            <MdSpaceDashboard className="navLogo" />
            <span>Dashboard</span>
          </NavLink>
              <NavLink href="/Reviewers" router={router}>
                <CiUser className="navLogo" />
                <span>Reviewers</span>
              </NavLink>
              <NavLink href="/Volunteers" router={router}>
                <FaUsers className="navLogo" />
                <span>Volunteers</span>
              </NavLink>
              <NavLink href="/Attendance" router={router}>
                <FaUsers className="navLogo" />
                <span>Attendance</span>
              </NavLink>
              <NavLink href="/GuestSpeakers" router={router}>
                <FaUsers className="navLogo" />
                <span>Guest Speakers</span>
              </NavLink>
              <NavLink href="/Sponsor" router={router}>
                <FaUsers className="navLogo" />
                <span>Guest Speakers</span>
              </NavLink>
              <NavLink href="/Calendar" router={router}>
            <IoCalendarOutline className="navLogo" />
            <span>Calendar </span>
          </NavLink>
            </>
          )}
          {role === 'reviewer' && (
            <>
            <NavLink href="/ReviewingPage" router={router}>
            <RxDashboard className="navLogo" />
            <span>Reviewing home page </span>
          </NavLink>
            
              <NavLink href="/ReviewProject" router={router}>
            <MdOutlineRateReview className="navLogo" />
            <span>Review Projects</span>
          </NavLink>
            </>
          )}

          {role === 'presenter' && (
            <>
            
            <NavLink href="/Student" router={router}>
            <BsCalendar4Event className="navLogo" />
            <span>Home Page</span>
          </NavLink>

          <NavLink href="/Calendar" router={router}>
            <IoCalendarOutline className="navLogo" />
            <span>Event Schedule </span>
          </NavLink>
            </>
          )}

          {role === 'volunteer' && (
            <>
            
            <NavLink href="/volunteer" router={router}>
            <BsCalendar4Event className="navLogo" />
            <span>Volunteer Home Page </span>
            
          </NavLink>

          <NavLink href="/Calendar" router={router}>
            <IoCalendarOutline className="navLogo" />
            <span>Event Schedule </span>
          </NavLink>
            </>
          )}

          {role === 'attendee' && (
            <>
            
            <NavLink href="/attendeePage" router={router}>
            <BsCalendar4Event className="navLogo" />
            <span>Attendee Home Page</span>
          </NavLink>
          
          <NavLink href="/Calendar" router={router}>
            <IoCalendarOutline className="navLogo" />
            <span>Event Schedule </span>
          </NavLink>
            </>
          )}

          


          
          
          
          
        </ul>
      </div>
    </div>
  );
}

const NavLink = ({ href, router, children }) => {
  const isActive = router.pathname === href;

  return (
    <Link href={href}>
      <li className={`link ${isActive ? "active" : ""}`}>{children}</li>
    </Link>
  );
};

export default LeftNav;

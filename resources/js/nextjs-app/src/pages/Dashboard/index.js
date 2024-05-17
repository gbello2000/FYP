import React from "react";
import Link from "next/link";
function Dashboard() {
  return (
    <div className="mb-[130px] ">
      <div className="lg:p-[38px] md:p-[20px] sm:p-[20px]">
        {/* hero section collage */}
        <div className="heroSectionBackgroundDashboard"></div>
        {/* content */}
        <div className="text-[21px] w-[80%] m-auto">
          <h2 className="lg:text-[25px] ">
            Student Spring Symposium Managment System
          </h2>
          <h2 className="lg:text-[25px]  mb-[28px] underline ">
            <Link href="https://sites.google.com/york.citycollege.eu/sss2023/venue">
              {" "}
              CITY College, University of York Europe Campus
            </Link>
          </h2>
          <p>
            A student spring symposium is a vibrant and dynamic event that
            celebrates the academic achievements, creativity, and scholarly
            pursuits of students within a particular educational institution or
            academic community. Usually held during the spring season, this
            symposium serves as a platform for students to showcase their
            research, projects, artistic endeavors, and innovative ideas. The
            symposium typically features a diverse range of presentations,
            exhibits, performances, and interactive sessions across various
            disciplines such as science, technology, engineering, arts,
            humanities, social sciences, and more. Its a collaborative and
            inclusive space where students from different fields come together
            to share their work, exchange ideas, and engage in intellectual
            discourse.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

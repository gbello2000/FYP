import React, { useState } from "react";

import Footer from "../components/Footer/Footer";
import StudentModal from "../components/Modals/StudentModal";

function Student() {
  const [showModal4, setShowModal4] = useState(false);
  return (
    <div>
      <div className="mb-[90px] p-[38px]">
        {/* hero section collage */}
        <div className="student mb-[10px]"></div>
        {/* content */}
        <div className="text-[21px] w-[80%] m-auto mt-[20px]">
          <p className="mt-[60px] ">
            Welcome to our Spring Student Symposium—an electrifying platform for
            students to showcase their brilliance and innovative spirit! With a
            spectrum of presentations, engaging discussions, and collaborative
            opportunities, this event promises to be an inspiring celebration of
            academic achievement and creativity. Now is the time to secure your
            spot! Register today to participate, present your work, and immerse
            yourself in a melting pot of ideas from diverse disciplines. Join us
            in this intellectual journey where your contributions matter. Dont
            miss out—reserve your place now and become part of an enriching
            experience at our Student Spring Symposium!
          </p>

          <div className="flex w-[85%] mt-[50px] justify-center">
            <button
              onClick={() => setShowModal4(true)}
              className="w-[160px] rounded-[35px] mt-[20px]  text-[20px]  h-[58px] bg-[#7848f4] text-[white] "
            >
              Apply
            </button>
            <StudentModal
              isVisible4={showModal4}
              onClose4={() => setShowModal4(false)}
            />
          </div>
        </div>
      </div>
      <div className="relative">
        <Footer />
      </div>
    </div>
  );
}

export default Student;

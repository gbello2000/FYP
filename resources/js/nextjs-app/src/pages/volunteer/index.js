import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import VolunteersModal from "../components/Modals/VolunteersModal";

function Volunteer() {
  const [showModal3, setShowModal3] = useState(false);

  return (
    <div>
      <div className="mb-[90px] p-[38px]">
        {/* hero section collage */}
        <div className="volunteerBg mb-[10px]"></div>
        {/* content */}
        <div className="text-[21px] w-[80%] m-auto mt-[20px]">
          <p className="mt-[60px] ">
            As a volunteer at our symposium, you're stepping into a vibrant
            community dedicated to fostering knowledge, facilitating
            connections, and ensuring a seamless experience for all
            participants. Your dedication and skills are what make this event
            possible, transforming it from a mere gathering into a landmark
            occasion in our academic and professional landscapes.
          </p>
          <div className="flex w-[85%] mt-[50px] justify-center">
            <button
              onClick={() => setShowModal3(true)}
              className="w-[160px] rounded-[5px] mt-[20px] text-[20px] h-[58px] bg-[#7848f4] text-[white]"
            >
              Register
            </button>
            <VolunteersModal
              isVisible3={showModal3}
              onClose3={() => setShowModal3(false)}
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

export default Volunteer;

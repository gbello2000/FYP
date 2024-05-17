import React, { useState } from "react";
import AttendeePagesModal from "../components/Modals/AttendeePagesModal";
import Footer from "../components/Footer/Footer";

function AttendeePage() {
  const [showModal1, setShowModal1] = useState(false);
  return (
    <div>
      <div className="mb-[90px] p-[38px]">
        {/* hero section collage */}
        <div className="attendeePage mb-[10px]"></div>
        {/* content */}
        <div className="text-[21px] w-[80%] m-auto mt-[20px]">
          <p className="mt-[60px] ">
            As an attendee of our symposium, youre about to embark on a journey
            of discovery, surrounded by the brightest minds and the latest
            advancements in our field. This event is more than just a
            conference; its a beacon for scholars, professionals, and
            enthusiasts alike, offering unparalleled opportunities to learn,
            share, and network.
          </p>

          <div className="flex w-[85%] mt-[50px] justify-center">
            <button
              onClick={() => setShowModal1(true)}
              className="w-[160px] rounded-[5px] mt-[20px]  text-[20px]  h-[58px] bg-[#7848f4] text-[white] "
            >
              Apply
            </button>
            <AttendeePagesModal
              isVisible1={showModal1}
              onClose1={() => setShowModal1(false)}
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

export default AttendeePage;

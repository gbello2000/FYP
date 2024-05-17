import React from "react";
import { IoMdClose } from "react-icons/io";

export default function AttendeePagesModal({ isVisible1, onClose1 }) {
  if (!isVisible1) {
    return null;
  }
  return (
    <div className="top-0 left-0 w-[100%] h-[100vh] blur-0 bg-[#1d1c1c32] fixed backdrop-blur-sm z-[800]">
      <div className="SponsorModal p-[20px] rounded-[5px] ">
        <div className="flex justify-end">
          <h2 onClick={() => onClose1()}>
            <IoMdClose className="cursor-pointer" />
          </h2>
        </div>
        {/* Student Spring Symposium  */}
        <h2 className="text-center text-[30px]">Apply to attend the SSS</h2>
        <form className="p-[30px] flex flex-col gap-[10px]">
          <div className="inp">
            <label id="studentName">Student Name</label>

            <input type="text" placeholder="Name" name="studentName" />
          </div>

          <div className="inp">
            <label id="date">Date of ateending</label>
            <input
              type="date"
              placeholder="text"
              name="date"
              className="text-[#aaaaaa]"
            />
          </div>

          <div className="flex gap-[20px]">
            <button
              type="submit"
              className="w-[140px] rounded-[5px] text-[white] h-[40px] mt-[20px] bg-[#7848f4]"
            >
              Accept
            </button>
            <button className="w-[140px] rounded-[5px] text-[white] h-[40px] mt-[20px] bg-[#f44848]">
              Decline
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

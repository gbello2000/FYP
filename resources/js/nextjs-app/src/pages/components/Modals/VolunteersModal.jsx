import React from "react";
import { IoMdClose } from "react-icons/io";

export default function VolunteersModal({ isVisible3, onClose3 }) {
  if (!isVisible3) {
    return null;
  }
  return (
    <div className="top-0 left-0 w-[100%] h-[100vh] blur-0 bg-[#1d1c1c32] fixed backdrop-blur-sm z-[800]">
      <div className="SponsorModal p-[20px] rounded-[5px] ">
        <div className="flex justify-end">
          <h2 onClick={() => onClose3()}>
            <IoMdClose className="cursor-pointer" />
          </h2>
        </div>
        {/* Student Spring Symposium  */}
        <h2 className="text-center text-[30px]">Registration Form</h2>
        <form className="p-[30px] flex flex-col gap-[10px]">
          <div className="inp">
            <label id="studentName">Student Name</label>

            <input type="text" placeholder="Name" name="studentName" />
          </div>

          <div className="inp">
            <label id="Position">Position</label>

            <select
              id="Position"
              className="bg-[white]  flex justify-center items-center h-[60px] text-[#aaaaaa]"
            >
              <option value="Platinum">Taking Attendance</option>
              <option>IT Team</option>
            </select>
          </div>

          <div className="flex gap-[20px]">
            <button
              type="submit"
              className="w-[140px] rounded-[5px] text-[white] h-[40px] mt-[20px] bg-[#7848f4]"
            >
              Done
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

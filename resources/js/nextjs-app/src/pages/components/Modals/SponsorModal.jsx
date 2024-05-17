import React from "react";
import { IoMdClose } from "react-icons/io";

export default function SponsorModal({ isVisible, onClose }) {
  if (!isVisible) {
    return null;
  }
  return (
    <div className="top-0 left-0 w-[100%] h-[100vh] blur-0 bg-[#1d1c1c32] fixed backdrop-blur-sm z-[800]">
      <div className="SponsorModal p-[20px] rounded-[5px] ">
        <div className="flex justify-end">
          <h2 onClick={() => onClose()}>
            <IoMdClose className="cursor-pointer" />
          </h2>
        </div>
        {/* Student Spring Symposium  */}
        <h2 className="text-center text-[30px]">Apply as a Sponsor</h2>
        <form className="p-[30px] flex flex-col gap-[10px]">
          <div className="inp">
            <label id="companyName">Company Name</label>
            <input type="text" placeholder="Company Name" name="companyName" />
          </div>
          <div className="inp">
            <label id="sponsorshipLevel">Sponsorship Level</label>

            <select
              id="sponsorshipLevel"
              className="bg-[white]  flex justify-center items-center h-[60px] text-[#aaaaaa]"
            >
              <option value="Sponsorship">Sponsorship Level</option>
              <option>Sponsorship Level</option>
            </select>
          </div>
          <div className="inp">
            <label id="details">Details in what way you want to sponsor</label>

            <input type="text" placeholder="sponsor" name="sponsor" />
          </div>
          <div className="inp">
            <label id="images">Image of a Company</label>

            <input
              type="file"
              className="bg-[white] h-[40px] text-[#aaaaaa]"
              placeholder="text"
              name="images"
            />
          </div>
          <div className="inp">
            <label id="date">Date to meet for the agreement</label>

            <input
              type="date"
              placeholder="text"
              name="date"
              className="text-[#aaaaaa]"
            />
          </div>
          <div className="inp">
            <label id="email">Email</label>

            <input type="email" placeholder="Email" name="email" />
          </div>
          <button
            type="submit"
            className="w-[140px] rounded-[5px] text-[white] h-[40px] mt-[20px] bg-[#7848f4]"
          >
            Done
          </button>
        </form>
      </div>
    </div>
  );
}

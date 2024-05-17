import React, { useState } from "react";

export default function ReviewProject() {
  const [originality, setOriginality] = useState("");
  const [quality, setQuality] = useState("");
  const [methodology, setMethodology] = useState("");

  const handleChange = (event, setValue) => {
    const inputValue = parseInt(event.target.value);
    if (!isNaN(inputValue) && inputValue >= 1 && inputValue <= 10) {
      setValue(inputValue);
    } else if (isNaN(inputValue)) {
      setValue("");
    } else if (inputValue > 10) {
      setValue(10);
      f;
    } else {
      setValue(1);
    }
  };
  return (
    <div className="mb-[90px] p-[38px]">
      <div className="lg:w-[50%]  sm:w-[80%] md:w-[80%]  m-auto ">
        {/* Student Spring Symposium  */}
        <h2 className="text-center text-[30px]">Reviewing Page</h2>
        <form className="p-[30px] flex flex-col gap-[10px]">
          <div className="inp">
            <label id="studentName">Student Name</label>
            <div className="w-[100%] h-[60px] rounded-[5px] flex pl-[10px] items-center bg-[white]">
              <span className="text-[#9d9c9c]">Name</span>
            </div>
          </div>

          <div className="inp">
            <label id="projectTitle">Project Title</label>
            <div className="w-[100%] h-[60px] rounded-[5px] flex pl-[10px] items-center bg-[white]">
              <span className="text-[#9d9c9c]">Potizo Managment System</span>
            </div>
          </div>
          <div className="inp">
            <label id="prefereddate">Prefered date of presenting</label>
            <div className="w-[100%] h-[60px] rounded-[5px] flex pl-[10px] items-center bg-[white]">
              <span className="text-[#9d9c9c]">dd /</span>
              <span className="text-[#9d9c9c]">mm /</span>
              <span className="text-[#9d9c9c]">yy</span>
            </div>
          </div>
          <div className="inp">
            <label id="Originality">Originality and Innovation</label>
            <input
              type="number"
              placeholder="0/10"
              min="1"
              max="10"
              name="Originality"
              value={originality}
              onChange={(e) => handleChange(e, setOriginality)}
            />
          </div>
          <div className="inp">
            <label id="Quality">Quality and Clarity</label>
            <input
              type="number"
              placeholder="0/10"
              min="1"
              max="10"
              name="Quality"
              value={quality}
              onChange={(e) => handleChange(e, setQuality)}
            />
          </div>
          <div className="inp">
            <label id="Methodology">Methodology and Rigor</label>
            <input
              type="number"
              placeholder="0/10"
              min="1"
              max="10"
              name="Methodology"
              value={methodology}
              onChange={(e) => handleChange(e, setMethodology)}
            />
          </div>
          {/*here a box called Status will change the color (if the avg score is more than 7 the presentation will be accepted and the color will be green  if not will be declined)
           */}
          <div className="w-[150px]  m-auto mt-[20px] h-[150px] border-[2px] border-dashed border-[#939393]"></div>
          <button
            type="submit"
            className="w-[140px] rounded-[5px] m-auto text-[white] h-[40px] mt-[20px] bg-[#7848f4]"
          >
            Done
          </button>
        </form>
      </div>
    </div>
  );
}

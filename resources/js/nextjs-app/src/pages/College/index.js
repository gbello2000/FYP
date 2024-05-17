import React from "react";
import Image from "next/image";
import Collage from "../../../public/photo/collage.jpg";
function College() {
  return (
    <div className=" mb-[180px]">
      <div className="flex flex-col justify-center lg:p-[38px] md:p-[20px] sm:p-[20px]">
        {/* Images Of School */}
        <div className="m-auto text-center ">
          <Image
            src={Collage}
            width={400}
            alt="sss"
            className="rounded-[10px] shadow-2xl"
          />
        </div>
        {/* Content */}
        <div className="text-[18px] w-[80%] m-auto">
          <h2 className="mb-[28px] mt-[28px] text-[28px] font-bold">
            City College
          </h2>
          <p>
            CITY College, University of York Europe Campus is part of the
            University of York community. This international institution is
            based in Greece with satellite activities in 8 countries. Throughout
            its 30-year history, CITY College has continued to connect the UK
            with the whole region, Europe, and the world. CITY College,
            University of York Europe Campus embraces internationalisation while
            maintaining the same standards, curricula, and traditions of the
            British institution of the same name. There is a dynamic
            international environment across CITYs educational bases comprising
            students and faculty members from more than 60 countries, who speak
            over 20 languages. This provides students with the opportunity to
            benefit from different perspectives and gain a greater understanding
            of the wider world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default College;

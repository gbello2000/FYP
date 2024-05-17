import React from "react";
import Image from "next/image";
import Users from "../../../../public/photo/users.webp";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";
function EventBoxMap() {
  return (
    <div>
      <div className="box shadow-2xl w-[400px] mt-[40px] rounded-[8px]">
        <div className="p-[15px]">
          <div className="image relative w-[100] ">
            <div>
              <Image src={Users} className="rounded-[10px]" alt="sss" />
            </div>
            <div className="save flex justify-center items-center text-[25px] w-[45px] h-[45px] bg-[#fffdfd] rounded-[50px] absolute top-[10px] right-[10px]">
              <CiHeart />
            </div>
            {/* Information */}
            <div>
              <div className="flex justify-between items-center mt-[28px]">
                <h2 className="font-bold text-[20px]">Day 1</h2>
                <div className="flex relative">
                  <Image
                    src={Users}
                    width={50}
                    alt="sss"
                    height={50}
                    className="w-[40px] h-[40px] object-cover rounded-[40px] border-[2px] border-[#efeeee] relative z-[8] left-[40px]"
                  />
                  <Image
                    src={Users}
                    width={50}
                    height={50}
                    alt="sss"
                    className="w-[40px]  h-[40px] object-cover rounded-[40px] border-[2px] border-[#efeeee] relative z-[8] left-[28px]"
                  />
                  <Image
                    src={Users}
                    width={50}
                    height={50}
                    alt="sss"
                    className="w-[40px] h-[40px] object-cover rounded-[40px] border-[2px] border-[#efeeee] relative z-[8] left-[10px]"
                  />
                  <div className="w-[40px] relative h-[40px] bg-[#e0e5f5]  flex justify-center items-center text-[14px] z-[10] border-[#efeeee] border-[2] rounded-[40px]">
                    20+
                  </div>
                </div>
              </div>
              <p className="text-[#6b6a6a]">By City College</p>
              {/*Button */}
              <div className="flex justify-end cursor-pointer mt-[20px]">
                <Link href="/">
                  <button className="w-[100px] rounded-[5px] h-[38px] bg-[#7848f4] text-[white]">
                    Register
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventBoxMap;

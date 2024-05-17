import React from "react";
import Image from "next/image";
import CartoonImage from "./../../../../public/photo/cartoon.svg";
import Spotify from "./../../../../public/photo/spotify.webp";
import Google from "./../../../../public/photo/google.png";
import stripe from "./../../../../public/photo/stripe.png";
import youtube from "./../../../../public/photo/youtube.png";
import miscrosoft from "./../../../../public/photo/miscrosoft.png";
function Footer() {
  return (
    <div>
      <div className="mt-[80px] w-[100%] m-auto mb-[28px] ">
        <div className="">
          <div className="ft w-[100%] h-[311.5px] bg-[#7848f4] relative">
            <Image
              className="relative bottom-[20px] "
              src={CartoonImage}
              alt="sss"
              width={600}
              height={200}
            />
          </div>
        </div>
      </div>
      <div className="LogoSponsor w-[80%] m-auto flex mb-[120px] justify-center items-center gap-[20px] flex-wrap mt-[90px]">
        <Image src={Spotify} width={200} height={200} alt="sss" />
        <Image src={Google} width={200} height={200} alt="sss" />
        <Image src={stripe} width={200} height={200} alt="sss" />
        <Image src={youtube} width={200} height={200} alt="sss" />
        <Image src={miscrosoft} width={200} height={200} alt="sss" />
        <Image src={Google} width={200} height={200} alt="sss" />
        <Image src={Google} width={200} height={200} alt="sss" />
        <Image src={Google} width={200} height={200} alt="sss" />
      </div>
    </div>
  );
}

export default Footer;

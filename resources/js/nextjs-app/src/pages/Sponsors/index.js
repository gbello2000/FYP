import React, { useState } from "react";
import SponsorModal from "../components/Modals/SponsorModal";

function Sponsors() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className=" mb-[140px] lg:p-[38px] md:p-[20px] sm:p-[20px] ">
      <div>
        {/* Hero Section */}
        <div className="Sponsor flex justify-center items-center "></div>
        {/* Content */}
        <div className="mt-[50px] text-[18px] w-[80%] m-auto">
          <p>
            Join us in fostering the next generation of innovators, thinkers,
            and leaders by becoming a sponsor for our upcoming Student Spring
            Symposium. This vibrant event is a celebration of academic
            excellence, creativity, and the pursuit of knowledge, providing
            students from various disciplines an opportunity to showcase their
            research, projects, and achievements.
          </p>
          <h2 className="mb-[28px] mt-[28px] text-[28px] font-bold">
            Why Sponsor?
          </h2>
          <ul className="list-disc flex flex-col gap-[10px] mb-[25px] ml-[35px]">
            <li>
              Visibility: Enhance your organizations visibility among a dynamic
              group of students, faculty, and attendees from diverse academic
              backgrounds. Your brand will be prominently featured in event
              materials, presentations, and promotional campaigns, providing
              significant exposure.
            </li>
            <li>
              Community Engagement: Demonstrate your commitment to education and
              community development by supporting an event that encourages
              academic excellence, innovation, and professional growth among
              students.
            </li>
            <li>
              Networking Opportunities: Connect with leading academics, talented
              students, and other organizations. The symposium is a perfect
              venue for networking, discovering potential collaborations, and
              identifying emerging talents.
            </li>
            <li>
              Brand Alignment: Align your brand with innovation, education, and
              excellence. By sponsoring the symposium, you highlight your
              organizations commitment to supporting the development of future
              leaders and innovators.
            </li>
          </ul>
          {/*Sponsorship Levels */}
          <h2 className="mb-[15px] mt-[15px] text-[28px] font-bold">
            Sponsorship Levels
          </h2>
          <p>
            We offer a variety of sponsorship levels, each with its own set of
            benefits, including branding opportunities, speaking slots, exhibit
            space, and more. Whether you are a small business, a large
            corporation, or an individual contributor, we have a sponsorship
            package that will suit your goals and budget.
          </p>
          <ul className="list-disc mt-[28px] ml-[35px] gap-[10px] flex flex-col">
            <li>Platinum Sponsor</li>
            <li>Gold Sponsor</li>
            <li>Silver Sponsor</li>
            <li>Bronze Sponsor</li>
            <li>Supporter</li>
          </ul>
        </div>
        {/* Button Apply */}
        <div className="flex w-[85%] justify-end">
          <button
            onClick={() => setShowModal(true)}
            className="w-[160px] rounded-[5px] mt-[20px]  text-[20px]  h-[58px] bg-[#7848f4] text-[white] "
          >
            Apply
          </button>
          <SponsorModal
            isVisible={showModal}
            onClose={() => setShowModal(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default Sponsors;

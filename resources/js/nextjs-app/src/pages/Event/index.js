import React from "react";
import EventBoxMap from "../components/EventBox/EventBoxMap";

function Event() {
  return (
    <div className="mb-[150px]">
      <div className="lg:p-[38px] md:p-[20px] sm:p-[20px]">
        {/* HeroSectoio */}
        <div className="w-[100%] flex bg-[#7848f4] rounded-[5px] p-[50px] justify-between">
          <div className="flex-1">
            <p className="text-[white] text-[20px]">
              Welcome to our Spring Student Symposium—an inspiring showcase of
              student talent and innovation! This symposium is a platform for
              you to share your research, projects, and creative endeavors with
              our academic community. Join us to present your work, engage in
              intellectual discussions, and connect with peers and mentors from
              various disciplines. Register now to reserve your spot and be part
              of a dynamic celebration of academic achievement and collaborative
              learning!
            </p>
          </div>
          <div className="leftSideEvent flex-1"></div>
        </div>
        {/*Event Map() Function  */}
        <div>
          <h2 className="font-bold text-[28px] mt-[40px]">Events</h2>
        </div>

        {/* Map box */}
        <div className="flex gap-[20px] flex-wrap">
          <EventBoxMap />
          <EventBoxMap />
        </div>
        {/* */}
      </div>
    </div>
  );
}

export default Event;

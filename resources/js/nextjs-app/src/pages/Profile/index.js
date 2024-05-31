import React from "react";
import Link from "next/link";
function Profile() {
  return (
    <div>
      <div className="lg:p-[38px] md:p-[20px] sm:p-[20px] mb-[180px]">
        <div className="mt-[50px] text-[21px] w-[80%] m-auto">
          {/* Content */}
          <p>
            Ready to showcase your academic prowess and innovative projects?
            Secure your spot at our Spring Student Symposium by signing up
            today! Whether you have groundbreaking research, artistic creations,
            or inspiring ideas to share, this is your chance to shine. Join
            fellow students in presenting your work, engaging in insightful
            discussions, and networking across diverse fields of study. Dont
            miss this opportunity to be part of a vibrant celebration of student
            excellence. Register now to reserve your spot and share your passion
            with our academic community!
          </p>
        </div>
        {/*buttons */}
        <div className="flex justify-between w-[80%] gap-[20px] m-auto flex-wrap mt-[120px] items-center">
          <button className="buttonRegister">
            <Link href="/auth/signup">Sign Up</Link>
          </button>
          <p className=" text-[20px] text-[#969696]">or</p>
          <button className="buttonRegister">
            {" "}
            <Link href="/auth/signin">Sign In</Link>{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
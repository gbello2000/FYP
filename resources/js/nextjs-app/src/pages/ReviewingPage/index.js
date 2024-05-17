import React from "react";
import Footer from "../components/Footer/Footer";

function ReviewingPage() {
  return (
    <div>
      <div className="mb-[90px] p-[38px]">
        {/* hero section collage */}
        <div className="reviewingPage mb-[10px]"></div>
        {/* content */}
        <div className="text-[21px] w-[80%] m-auto mt-[20px]">
          <p className="mt-[60px] ">
            Your responsibilities will involve evaluating submissions with
            fairness and expertise, providing constructive feedback to help
            presenters refine their work, and ensuring the overall quality of
            the symposium presentations. This role offers a chance to contribute
            to the academic community, stay abreast of cutting-edge research,
            and support the growth and development of emerging scholars.
          </p>
        </div>
      </div>
      <div className="relative">
        <Footer />
      </div>
    </div>
  );
}

export default ReviewingPage;

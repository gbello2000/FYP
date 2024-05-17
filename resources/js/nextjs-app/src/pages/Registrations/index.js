import Footer from "../components/Footer/Footer";
import { FaRegCheckCircle } from "react-icons/fa";

export default function Registrations() {
  return (
    <div>
      <div className="mb-[90px] lg:p-[38px] md:p-[20px] sm:p-[20px]">
        <div className="lg:w-[50%]  sm:w-[80%] md:w-[80%]  m-auto ">
          {/* Student Spring Symposium  */}
          <h2 className="text-center text-[30px]">Registrations</h2>
          <form className="p-[30px] flex flex-col gap-[10px]">
            <div className="inp">
              <label id="StudentName">Student Name</label>
              <input type="text" placeholder="Name" name="StudentName" />
            </div>
            <div className="inp">
              <label id="ProjectTitle">Project Title</label>
              <input
                type="text"
                placeholder="Project Name"
                name="ProjectTitle"
              />
            </div>
            <div className="inp">
              <label id="date">Date of presenting</label>

              <input
                type="date"
                placeholder="text"
                name="date"
                className="text-[#aaaaaa]"
              />
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
              <label id="Status">Status</label>
              <div className="w-[100%] flex justify-between  h-[60px] rounded-[5px]  pl-[10px] items-center bg-[white]">
                <span className="text-[#9d9c9c]">Approved</span>
                <span className="text-[#9d9c9c]">
                  <FaRegCheckCircle className="text-[20px] mr-[18px]" />
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="w-[140px] rounded-[5px] m-auto text-[white] h-[40px] mt-[20px] bg-[#7848f4]"
            >
              Save
            </button>
          </form>

          {/* ---------------------- Default Form  ------------------------------ */}

          <div>
            <form className="p-[30px] flex flex-col gap-[10px]">
              <div className="inp">
                <label id="StudentName">Student Name</label>
                <input type="text" placeholder="Ben" name="StudentName" />
              </div>
              <div className="inp">
                <label id="ProjectTitle">Project Title</label>
                <input
                  type="text"
                  placeholder="Potizo Managment System"
                  name="ProjectTitle"
                />
              </div>
              <div className="inp">
                <label id="date">Date of presenting</label>

                <input
                  type="date"
                  placeholder="text"
                  name="date"
                  className="text-[#aaaaaa]"
                />
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
                <label id="Status">Status</label>
                <div className="w-[100%] flex justify-between  h-[60px] rounded-[5px]  pl-[10px] items-center bg-[white]">
                  <span className="text-[#9d9c9c]">In review</span>
                  <span className="text-[#9d9c9c]">
                    <FaRegCheckCircle className="text-[20px] mr-[18px]" />
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

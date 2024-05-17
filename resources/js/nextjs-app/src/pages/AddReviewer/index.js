import Footer from "../components/Footer/Footer";
import { FaRegCheckCircle } from "react-icons/fa";

export default function AddReviewer() {
  return (
    <div>
      <div className="mb-[90px] lg:p-[38px] md:p-[20px] sm:p-[20px]">
        <div className="lg:w-[50%]  sm:w-[80%] md:w-[80%]  m-auto ">
          {/*Filter */}
          <div className="flex justify-between items-center p-[10px]">
            <div>0</div>
            <div className="flex gap-[10px] items-center">
              <h3>Filter</h3>
              <select id="filter" className="bg-[#ffffff] p-[10px] ">
                <option>Review 1</option>
                <option>Review 1</option>
                <option>Review 1</option>
              </select>
            </div>
          </div>
          {/* Student Spring Symposium  */}
          <h2 className="text-center text-[30px]">ADD Reviewer</h2>
          <form className="p-[30px] flex flex-col gap-[10px]">
            <div className="inp">
              <label id="reviewerName">Reviewer Name</label>
              <input type="text" placeholder="Name" name="reviewerName" />
            </div>

            <div className="inp">
              <label id="bio">Bio and Expertise:</label>
              <input type="text" placeholder="text" name="bio" />
            </div>

            <div className="inp">
              <label id="email">Contact Information</label>
              <input type="email" placeholder="text" name="email" />
            </div>

            <div className="flex gap-[14px] items-center ">
              <button
                type="submit"
                className="w-[140px] rounded-[5px]  text-[white] h-[40px] mt-[20px] bg-[#7848f4]"
              >
                Add
              </button>
            </div>
          </form>
          {/* --------------  Delete Reviewer --------------------- */}
          <div className="mt-[100px]">
            <h2 className="text-center text-[30px]">Delete Reviewer</h2>
            <form className="p-[30px] flex flex-col gap-[10px]">
              <div className="inp">
                <label id="reviewerName">Reviewer Name</label>
                <input type="text" placeholder="Name" name="reviewerName" />
              </div>

              <div className="inp">
                <label id="bio">Bio and Expertise:</label>
                <input type="text" placeholder="text" name="bio" />
              </div>

              <div className="inp">
                <label id="email">Contact Information</label>
                <input type="email" placeholder="text" name="email" />
              </div>

              <div className="flex gap-[14px] items-center ">
                <button
                  type="submit"
                  className="w-[140px] rounded-[5px]  text-[white] h-[40px] mt-[20px] bg-[#ff5c81]"
                >
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

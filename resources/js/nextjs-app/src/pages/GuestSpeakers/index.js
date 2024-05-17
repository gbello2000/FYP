import Footer from "../components/Footer/Footer";

export default function GuestSpeakers() {
  return (
    <div>
      <div className="mb-[90px] p-[38px]">
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
          <h2 className="text-center text-[30px]">Guest Speakers</h2>
          <form className="p-[30px] flex flex-col gap-[10px]">
            <div className="inp">
              <label id="guest">Guest Name</label>
              <input type="text" placeholder="Ben" name="guest" />
            </div>

            <div className="inp">
              <label id="date">Date of Presenting</label>

              <input
                type="date"
                placeholder="text"
                name="date"
                className="text-[#aaaaaa]"
              />
            </div>

            <div className="inp">
              <label id="sponsorshipLevel">Position</label>

              <select
                id="sponsorshipLevel"
                className="bg-[white]  flex justify-center items-center h-[60px] text-[#aaaaaa]"
              >
                <option value="Position">Position 1</option>
                <option>Position</option>
              </select>
            </div>

            <div className="inp">
              <label id="Files">Files</label>

              <input
                type="file"
                className="bg-[white] h-[40px] text-[#aaaaaa]"
                placeholder="Files"
                name="Files"
              />
            </div>

            <div className="flex gap-[14px] items-center ">
              <button
                type="submit"
                className="w-[140px] rounded-[5px]  text-[white] h-[40px] mt-[20px] bg-[#7848f4]"
              >
                Add
              </button>
              <button
                type="submit"
                className="w-[140px] rounded-[5px]  text-[#838282] h-[40px] mt-[20px] bg-[#e1e1e1]"
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

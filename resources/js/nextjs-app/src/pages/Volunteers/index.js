import Footer from "../components/Footer/Footer";

export default function Volunteers() {
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
          <h2 className="text-center text-[30px]">Volunteers</h2>
          <form className="p-[30px] flex flex-col gap-[10px]">
            <div className="inp">
              <label id="studentName">Student Name</label>
              <input type="text" placeholder="Name" name="studentName" />
            </div>

            <div className="inp">
              <label id="studentName">Date of volunteering</label>
              <input type="text" placeholder="dd/mm/yy" name="studentName" />
            </div>

            <div className="inp">
              <label id="sponsorshipLevel">Position</label>

              <select
                id="sponsorshipLevel"
                className="bg-[white]  flex justify-center items-center h-[60px] text-[#aaaaaa]"
              >
                <option value="Platinum">Position 1</option>
                <option>Position 1</option>
              </select>
            </div>
            <div className="flex gap-[14px] items-center "></div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

import Footer from "../components/Footer/Footer";

export default function Attendance() {
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
          <h2 className="text-center text-[30px]">Attendance</h2>
          <form className="p-[30px] flex flex-col gap-[10px]">
            <div className="inp">
              <label id="studentName">Student Name</label>
              <input type="text" placeholder="Name" name="studentName" />
            </div>

            <div className="inp">
              <label id="date">Date of ateending</label>

              <input
                type="date"
                placeholder="text"
                name="date"
                className="text-[#aaaaaa]"
              />
            </div>
            <div className="flex gap-[14px] items-center "></div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

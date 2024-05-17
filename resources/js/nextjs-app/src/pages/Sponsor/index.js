import Footer from "../components/Footer/Footer";

export default function Sponsor() {
  return (
    <div>
      <div className="mb-[90px] p-[38px]">
        <div className="lg:w-[50%]  sm:w-[80%] md:w-[80%]  m-auto ">
          {/*Filter */}
          <div className="flex justify-between items-center">
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
          <h2 className="text-center text-[30px]">Sponsors</h2>
          <form className="p-[30px] flex flex-col gap-[10px]">
            <div className="inp">
              <label id="guest">Guest Name</label>
              <input type="text" placeholder="Name" name="guest" />
            </div>
            <div className="inp">
              <label id="sponsorshipLevel">Sponsorship Level</label>

              <select
                id="sponsorshipLevel"
                className="bg-[white]  flex justify-center items-center h-[60px] text-[#aaaaaa]"
              >
                <option value="Platinum">Platinum</option>
                <option>Platinum</option>
              </select>
            </div>
            <div className="inp">
              <label id="guest">Details </label>
              <input type="text" placeholder="Text" name="guest" />
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
              <label id="email">Email</label>

              <input type="email" placeholder="Email" name="email" />
            </div>
            <div className="flex gap-[14px] items-center ">
              <button
                type="submit"
                className="w-[140px] rounded-[5px]  text-[white] h-[40px] mt-[20px] bg-[#7848f4]"
              >
                Accept
              </button>
              <button
                type="submit"
                className="w-[140px] rounded-[5px]  text-[#ffffff] h-[40px] mt-[20px] bg-[#ff5c81]"
              >
                Decline
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

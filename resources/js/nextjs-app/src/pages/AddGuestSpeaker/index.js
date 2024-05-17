import Footer from "../components/Footer/Footer";

export default function AddGuestSpeaker() {
  return (
    <div>
      <div className="mb-[90px] p-[38px]">
        <div className="lg:w-[50%]  sm:w-[80%] md:w-[80%]  m-auto ">
          {/*Filter */}
          <div className="flex justify-between items-center">
            <div>0</div>
            <div className="flex gap-[10px] items-center p-[10px]">
              <h3>Filter</h3>
              <select id="filter" className="bg-[#ffffff] p-[10px] ">
                <option>Review 1</option>
                <option>Review 1</option>
                <option>Review 1</option>
              </select>
            </div>
          </div>
          {/* Add Guest Speaker */}

          <form className="p-[30px] flex flex-col gap-[10px]">
            <h2 className="text-center text-[30px]">Add Guest Speaker</h2>

            <div className="inp">
              <label id="GuestName">Guest Name</label>
              <input type="text" placeholder="Name" name="GuestName" />
            </div>

            <div className="inp">
              <label id="date">Date </label>

              <input
                type="date"
                placeholder="text"
                name="date"
                className="text-[#aaaaaa]"
              />
            </div>

            <div className="inp">
              <label id="email">Contact Information</label>

              <input type="email" placeholder="Email" name="email" />
            </div>

            <div className="inp">
              <label id="files">Files</label>

              <input
                type="file"
                className="bg-[white] h-[40px] text-[#aaaaaa]"
                placeholder="Files"
                name="files"
              />
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
          {/* --------------  Delete Guest Speaker --------------------- */}

          <div className="mt-[100px]">
            <h2 className="text-center text-[30px]">Delete Guest Speaker</h2>
            <form className="p-[30px] flex flex-col gap-[10px]">
              <div className="inp">
                <label id="GuestName">Guest Name</label>
                <input type="text" placeholder="Name" name="GuestName" />
              </div>
              <div className="inp">
                <label id="email">Contact Information</label>

                <input type="email" placeholder="Email" name="email" />
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

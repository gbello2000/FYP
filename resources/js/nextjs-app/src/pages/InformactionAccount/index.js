import Footer from "../components/Footer/Footer";

export default function InformactionAccount() {
  return (
    <div>
      <div className="mb-[90px] lg:p-[38px] md:p-[20px] sm:p-[20px]">
        <div className="lg:w-[50%]  sm:w-[80%] md:w-[80%]  m-auto ">
          {/* Student Spring Symposium  */}
          <h2 className="text-center text-[30px]">Account Information</h2>
          <form className="p-[30px] flex flex-col gap-[10px]">
            <div className="inp">
              <label id="studentName">Student Name</label>
              <div className="w-[100%] h-[60px] rounded-[5px] flex pl-[10px] items-center bg-[white]">
                <span className="text-[#9d9c9c]">Ben</span>
              </div>
            </div>
            <div className="inp">
              <label id="email">Email</label>

              <input type="email" placeholder="Email" name="email" />
            </div>

            <button
              type="submit"
              className="w-[140px] rounded-[5px] m-auto text-[white] h-[40px] mt-[20px] bg-[#7848f4]"
            >
              Save
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

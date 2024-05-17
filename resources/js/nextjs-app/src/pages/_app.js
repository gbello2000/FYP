import "@/styles/globals.css";
import Header from "./components/Header/Header";
import LeftNav from "./components/Header/LeftNav";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <div className="border-[#e2e0e0] border-b-[1px]  ">
        <Header />
      </div>
      <div className="flex ">
        <div className="leftM h-[100vh] overflow-hidden border-r-[1px] border-[#e2e0e0] w-[348px] p-[25px]">
          <LeftNav />
        </div>
        <div className=" w-[100%] h-[100vh] overflow-scroll bg-[#f8f8fa] ">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}

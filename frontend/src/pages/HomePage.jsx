import CountDownTimer from "../components/CountDownTimer.jsx";
import MapCard from "../components/MapCard.jsx";
import Layout from "../layout/Layout.jsx";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <Layout>
      <div className="px-4 md:p-0 relative min-h-screen">
        <div className="absolute inset-0 bg-[image:var(--background-image-hero)] min-h-screen bg-cover bg-center bg-no-repeat "></div>
        <div className="absolute inset-0 bg-violet-950 opacity-70"></div>

        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative top-10 z-10 flex flex-col gap-4 items-center pt-50 min-h-screen text-white">
          {/* <h1 className="text-3xl md:text-8xl font-bold">Byte_Craze'25</h1> */}
          <img src="/logo.png" alt="" className="lg:h-40 " />
          <p className="font-jost text-center text-sm md:text-xl md:w-200">
            Welcome to BytCraze 2025 – the premier{" "}
            <span className="font-bold">
              National Level Technical Symposium
            </span>{" "}
            organized by the Department of Computer Science and Engineering, Loyola Institute of Technology and Science.
          </p>
          <Link
            to={"/register"}
            className=" border-2 border-yellow-400 text-white px-10 py-3 hover:bg-yellow-400 transition-all duration-300 ease-in hover:text-black rounded-md"
          >
            Regiter Now
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100"></div>
      <div className="flex flex-col items-center gap-3  bg-black bg-no-repeat bg-cover text-white min-h-screen">
        <h1 className="text-lg md:text-2xl">The Event Starts In</h1>
        <CountDownTimer />
        <h1>October 09 , 10:00 AM</h1>

        <MapCard />
      </div>
    </Layout>
  );
};

export default HomePage;

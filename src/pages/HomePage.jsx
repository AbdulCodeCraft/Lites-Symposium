import CountTownTimer from "../components/CountDownTimer.jsx";
import MapCard from "../components/MapCard.jsx";
import Layout from "../layout/Layout.jsx";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <Layout>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-[image:var(--background-image-hero)] min-h-screen bg-cover bg-center bg-no-repeat "></div>
        <div className="absolute inset-0 bg-violet-950 opacity-70"></div>

        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative top-10 z-10 flex flex-col gap-4 items-center pt-50 min-h-screen text-white">
          <h1 className="text-8xl font-bold">Heroic_Coders'25</h1>
          <p className=" text-center text-xl w-200">
            Welcome to Heroic Coders 2025 – the premier symposium for
            developers, innovators, and tech enthusiasts. Dive into the latest
            breakthroughs in [Mention 1-2 specific tech areas, e.g., AI,
            cybersecurity, blockchain, cloud native development], refine your
            skills, and connect with the industry's brightest minds. This is
            where the future of code is shaped.
          </p>
          <Link to={"/register"} className=" border-2 border-yellow-400 text-white px-10 py-3 hover:bg-yellow-400 transition-all duration-300 ease-in hover:text-black rounded-md">
            Regiter Now
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100"></div>
      <div className="flex flex-col items-center gap-3  bg-black bg-no-repeat bg-cover text-white min-h-screen">
        <h1 className="text-2xl">The Event Starts In</h1>
        <CountTownTimer duration={2 * 24 * 60 * 60 * 1000} />
        <h1>October 15 , 9:00 PM</h1>

      <MapCard/>
      </div>
    </Layout>
  );
};

export default HomePage;

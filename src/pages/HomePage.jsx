
import CountTownTimer from "../components/CountTownTimer.jsx";
import Layout from "../layout/Layout.jsx";

const HomePage = () => {
  return (
    <Layout>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-[image:var(--background-image-hero)] min-h-screen bg-cover bg-center bg-no-repeat "></div>
        <div className="absolute inset-0 bg-violet-950 opacity-70"></div>

        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col gap-4 items-center pt-50 min-h-screen text-white">
          <h1 className="text-8xl font-bold">Heroic_Coders'25</h1>
          <p className=" text-center text-xl w-200">
            Welcome to Heroic Coders 2025 – the premier symposium for
            developers, innovators, and tech enthusiasts. Dive into the latest
            breakthroughs in [Mention 1-2 specific tech areas, e.g., AI,
            cybersecurity, blockchain, cloud native development], refine your
            skills, and connect with the industry's brightest minds. This is
            where the future of code is shaped.
          </p>
          <button className=" border-2 border-yellow-400 text-white px-10 py-3 hover:bg-yellow-400 transition-all duration-300 ease-in hover:text-black rounded-md">
            Regiter Now
          </button>
        </div>
      </div>
      
      <div className="bg-black/50 min-h-screen">
        <CountTownTimer/>
        
      </div>
    </Layout>
  );
};

export default HomePage;

import RingLoader from "react-spinners/RingLoader";

const Loader = () => {
  return (
    <div className="flex bg-black justify-center items-center min-h-screen">
      <RingLoader size={100} color="#FFFF" />
    </div>
  );
};

export default Loader;

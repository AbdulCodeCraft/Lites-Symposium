
const MapCard = () => {
  return (
    <div className='flex flex-col gap-4 border-1 border-gray-400  lg:w-250 m-3 md:mt-10 lg:h-120 p-5 md:p-10 overflow-hidden rounded-xl'>
      <h1 className="text-center text-2xl md:text-4xl font-semibold">Our Event Venue</h1>
      <div className="md:flex bg-gray-700 rounded-md">
        <div className="md:w-[50%]">
            <img className='rounded-md' src="/images/college.jpg" alt="" />
        </div>
        <div className="flex flex-col justify-center gap-2 items-start md:w-1/2 p-5">
            <h1 className="text-xl md:text-3xl font-semibold text-yellow-200">Loyola Institute of Technology and Science</h1>
            <p className="text-sm md:text-lg">Thovalai,Kanyakumari</p>
            <p className="text-sm md:text-lg">India - 644345</p>
            <small className="text-md text-gray-100">Explore the vibrant campus where innovation thrives</small>
            <a href="https://maps.app.goo.gl/WqJ5Q8B9EfovTJVJ8" target="_blank" className=" border-2 border-yellow-400 text-white px-5 md:px-10 py-2 md:py-3 hover:bg-yellow-400 transition-all duration-300 ease-in hover:text-black rounded-md">View on Map</a>
        </div>
      </div>

    </div>
  )
}

export default MapCard

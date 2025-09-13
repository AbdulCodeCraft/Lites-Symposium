import { Link } from "react-router-dom";

const EventCard = ({ title, events }) => {
  return (
    <div className="pb-10">
      <h1 className="text-xl md:text-3xl font-semibold my-6">{title}</h1>
      <div className="flex flex-wrap lg:flex-nowrap justify-evenly pb-5 lg:pb-0 gap-5 space-y-3">
        {events.map((event, index) => {
          return (
            <div
              className="group relative w-60 h-80 md:w-100 rounded-lg space-y-2 md:h-90"
              key={index}
            >
              <div className="w-full h-3/4 overflow-hidden rounded-lg">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src={event.image}
                  alt=""
                />
              </div>

              <div className="absolute inset-0 transition-opacity duration-300 rounded-lg group-hover:bg-black/50">
                <Link
                  to={"/events/" + event.id}
                  className="absolute inset-0 px-4 py-2 m-auto w-fit h-fit rounded-md shadow-2xl transition-opacity duration-300 bg-violet-500 opacity-0 group-hover:opacity-100"
                >
                  View Details
                </Link>
              </div>

              <div className="space-y-1">
                <h1 className="text-lg md:text-xl font-semibold">
                  {event.event_name}
                </h1>
                <p className="line-clamp-2 text-sm md:text-md">
                  {event.event_description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventCard;

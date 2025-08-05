import { Link } from "react-router-dom";

const EventCard = ({ title, events }) => {
  return (
    <div>
      <h1 className="text-xl md:text-3xl font-semibold my-6">{title}</h1>
      <div className="flex flex-wrap justify-evenly gap-3 space-y-3">
        {events.map((event, index) => {
          return (
            <div
              className="group relative w-60 h-80 md:w-100 rounded-lg space-y-2  overflow-hidden md:h-90"
              key={index}
            >
              <img
                className="h-3/4 group-hover:scale-105 transition-transform duration-300 object-cover rounded-lg w-full"
                src={event.image}
                alt=""
              />
              <div className="absolute inset-0  transition-opacity duration-300 rounded-lg group-hover:bg-black/50">
                <Link
                  to={"/events/" + event.id}
                  className="absolute inset-0 px-4 py-2 m-auto w-fit h-fit rounded-md shadow-2xl transition-opacity duration-300 bg-yellow-500 opacity-0 group-hover:opacity-100"
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

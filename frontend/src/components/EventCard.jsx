import { Link } from "react-router-dom";

const EventCard = ({ title, events }) => {
  return (
    <div className="pb-10">
      <h1 className="text-xl md:text-3xl font-semibold my-6">{title}</h1>
      <div className="flex flex-wrap lg:flex-nowrap justify-evenly pb-5 lg:pb-0 gap-5 space-y-3">
        {events.map((event, index) => {
          return (
            <Link
              to={`/events/${event.id}`}
              key={index}
              className="group relative w-60 h-80 md:w-100 rounded-lg space-y-2 md:h-90 block"
            >
              <div className="w-full h-3/4 overflow-hidden rounded-lg">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src={event.image}
                  alt={event.event_name}
                />
              </div>

      
              <div className="absolute inset-0 transition-opacity duration-300 rounded-lg group-hover:bg-black/40" />

             
              <div className="space-y-1 relative z-10 px-2">
                <h1 className="text-lg md:text-xl font-semibold">
                  {event.event_name}
                </h1>
                <p className="line-clamp-2 text-sm md:text-md">
                  {event.event_description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default EventCard;

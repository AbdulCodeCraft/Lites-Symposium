import EventCard from "../components/EventCard";
import Layout from "../layout/Layout";

const techEventDetails = [
  {
    id: 1,
    image: "/images/event-card-1.png",
    event_name: "Paper Presentation",
    event_discription:
      "Discover an exciting lineup of Technical and Non-Technical events. Participate, compete, and connect with peers and industry experts.",
  },
  {
    id: 2,
    image: "/images/event-card-3.png",
    event_name: "Paper Presentation",
    event_discription:
      "Discover an exciting lineup of Technical and Non-Technical events. Participate, compete, and connect with peers and industry experts.",
  },
  {
    id: 3,
    image: "/images/event-card-1.png",
    event_name: "Paper Presentation",
    event_discription:
      "Discover an exciting lineup of Technical and Non-Technical events. Participate, compete, and connect with peers and industry experts.",
  },
  {
    id: 4,
    image: "/images/event-card-1.png",
    event_name: "Paper Presentation",
    event_discription:
      "Discover an exciting lineup of Technical and Non-Technical events. Participate, compete, and connect with peers and industry experts.",
  },
  {
    id: 5,
    image: "/images/event-card-1.png",
    event_name: "Paper Presentation",
    event_discription:
      "Discover an exciting lineup of Technical and Non-Technical events. Participate, compete, and connect with peers and industry experts.",
  },
  {
    id: 6,
    image: "/images/event-card-1.png",
    event_name: "Paper Presentation",
    event_discription:
      "Discover an exciting lineup of Technical and Non-Technical events. Participate, compete, and connect with peers and industry experts.",
  },
];


const EventPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-black pt-25 pb-10 px-20 text-white">
        <div className="space-y-4">
          <h1 className="text-center text-5xl font-semibold  ">
            Symposium Events Lineup
          </h1>
          <p className="text-center text-gray-400">
            Engage in thrilling technical and fun non-technical events crafted
            for every enthusiast.
          </p>
        </div>
        <EventCard title="Technical Events" events={techEventDetails}/>
        <EventCard title="Non-Technical Events" events={techEventDetails}/>
      </div>
    </Layout>
  );
};

export default EventPage;

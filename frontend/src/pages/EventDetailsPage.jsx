import Layout from "../layout/Layout";
import { Link, useParams } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const techEventDetails = [
  {
    id: 1,
    image: "/images/event-card-1.png",
    event_name: "Paper Presentation",
    event_description:
      "Showcase your innovative ideas and research in front of a technical jury.",
    full_description:
      "Participants are invited to present their technical papers on recent trends in technology. Each team can have a maximum of 2 members. Presentations must be original and not previously published.",
    rules: [
      "Maximum of 2 members per team.",
      "Time limit: 8 minutes for presentation + 2 minutes for Q&A.",
      "Plagiarism will lead to disqualification.",
      "Bring your college ID card.",
    ],
    coordinator: {
      name: "John Doe",
      phone: "9876543210",
      email: "john@example.com",
    },
  },
  {
    id: 2,
    image: "/images/event-card-2.png",
    event_name: "Debugging Challenge",
    event_description: "Test your debugging skills under pressure.",
    full_description:
      "Participants will be provided with faulty code snippets and are expected to fix them within the time limit. Languages include C, C++, and JavaScript.",
    rules: [
      "Individual participation only.",
      "Time limit: 30 minutes.",
      "Use of external resources is not allowed.",
      "Top 3 with the highest score win.",
    ],
    coordinator: {
      name: "Jane Smith",
      phone: "9876501234",
      email: "jane@example.com",
    },
  },
];

const EventDetailsPage = () => {
  const { id } = useParams();
  const event = techEventDetails.find((e) => e.id == parseInt(id));
  if (!event) {
    return (
      <Layout>
        <div>No event Found</div>
      </Layout>
    );
  }
  return (
    <Layout>
      
      <div className="min-h-screen space-y-7 bg-black pt-15 px-2    md:pt-25 md:pb-10 md:px-30 text-white">
        <Link to={"/events"}><IoArrowBackCircleOutline size={40} className=" hover:text-yellow-400 transition-all duration-300"/></Link>  
        <div className="space-y-3">
          <h1 className="text-2xl md:text-6xl font-semibold">{event.event_name}</h1>
          <p className="text-gray-400 text-sm md:text-md">{event.event_description}</p>
        </div>
        <div className="space-y-3">
          <h1 className="text-xl md:text-3xl font-semibold">Discription</h1>
          <p className="text-gray-300 text-sm md:text-md">{event.full_description}</p>
        </div>
        <div className="space-y-3">
          <h1 className="text-xl md:text-3xl font-semibold">Rules and Guidelines</h1>
          <p className="text-gray-300 text-sm md:text-md">{event.rules}</p>
        </div>

        <Link to={'/coardinators'} className="border-2 bottom-10 border-yellow-400 px-2 py-2 md:px-4 md:py-3 hover:bg-yellow-400 hover:text-black transition-all rounded-md duration-300">
          Contact Coardinator
        </Link>
      </div>
    </Layout>
  );
};

export default EventDetailsPage;

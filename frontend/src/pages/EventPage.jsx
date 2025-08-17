import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import Layout from "../layout/Layout";
import axios from "axios";
import RingLoader from "react-spinners/RingLoader";

const EventPage = () => {
  const [technicalEvents, setTechnicalEvents] = useState([]);
  const [nonTechnicalEvents, setNonTechnicalEvents] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = "http://localhost:3000/api/events";

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(API_URL);
        const data = response.data;

        if (data.success) {
          setNonTechnicalEvents(data.nonTechnicalEvents);
          setTechnicalEvents(data.technicalEvents);
          setLoading(false);
        } else {
          throw new error(data.error);
        }
      } catch (error) {
        setError(error.response.data);
        console.log(`Error Response ${error.response.data}`);
        console.log(`Error Status ${error.response.status}`);
        setError(error.request.data);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return (
    <Layout>
      {loading && (
        <div className="flex bg-black justify-center items-center min-h-screen">
          <RingLoader size={150} color="#FFFF" />
        </div>
      )}

      {!loading && (
        <div className="min-h-screen bg-black pt-23 px-2 md:pt-25 P`pb-10 md:px-20 text-white">
          <div className="space-y-4">
            <h1 className="text-center text-2xl md:text-5xl font-semibold  ">
              Symposium Events Lineup
            </h1>
            <p className="text-center text-sm md:text-md text-gray-400">
              Engage in thrilling technical and fun non-technical events crafted
              for every enthusiast.
            </p>
          </div>
          <EventCard title="Technical Events" events={technicalEvents} />
          <EventCard title="Non-Technical Events" events={nonTechnicalEvents} />
        </div>
      )}
    </Layout>
  );
};

export default EventPage;

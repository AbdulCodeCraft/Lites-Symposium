import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import EventTable from "../../components/EventTable";

const headings = ["Event Name","Description","Types","Actions"]

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "http://localhost:3000/api/events";

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(API_URL);
        const data = response.data;

        if (data.success) {
          const combined = [
            ...data.technicalEvents,
            ...data.nonTechnicalEvents,
          ];
          setEvents(combined);
        }
      } catch (error) {
        console.error("Error while fetching coordinators: " + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }
  console.log(events);
  
  return (
    <div className="space-y-7">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-semibold">Event Management</h1>
        <Link
          to={"/admin/events/add-event"}
          className="bg-gray-900 px-2 py-2 rounded-md"
        >
          Add Event
        </Link>
      </div>

      <div>
        <EventTable events={events} headings={headings}/>
      </div>
    </div>
  );
};

export default Events;

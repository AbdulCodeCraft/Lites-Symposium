import Layout from "../layout/Layout";
import { Link, useParams } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from 'axios'; 

const EventDetailsPage = () => {
  const { id } = useParams();

  const [techEventDetails, setTechEventDetails] = useState(null); 
  
  const API_URL = `http://localhost:3000/api/events/${id}`;

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(API_URL);
        const data = response.data;
        

        
        if (data.success && data.event) {
          
          setTechEventDetails(data.event); 
        } else {
    
          console.error("API response indicated failure or missing event data:", data.error);
          setTechEventDetails(null);
        }
      } catch (error) {
      
        console.error(`Error fetching event details:`, error);
        console.error(`Error Response Data:`, error.response?.data);
        console.error(`Error Status:`, error.response?.status);
        setTechEventDetails(null); 
      }
    };
    
    fetchDetails();
  }, [id]); 

  console.log("Current techEventDetails state:", techEventDetails);

  
  if (!techEventDetails) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
          <p>No event Found or loading...</p> 
        </div>
      </Layout>
    );
  }
  
  
  return (
    <Layout>
      <div className="min-h-screen space-y-7 bg-black pt-15 px-2 md:pt-25 md:pb-10 md:px-30 text-white">
        <Link to={"/events"}>
          <IoArrowBackCircleOutline
            size={40}
            className=" hover:text-yellow-400 transition-all duration-300"
          />
        </Link>
        <div className="space-y-3">
          <h1 className="text-2xl md:text-6xl font-semibold">
            {techEventDetails.eventName} 
          </h1>
          <p className="text-gray-400 text-sm md:text-md">
            {techEventDetails.eventDescription}
          </p>
        </div>
        <div className="space-y-3">
          <h1 className="text-xl md:text-3xl font-semibold">Description</h1>
          <p className="text-gray-300 text-sm md:text-md">
            {techEventDetails.fullDescription}
          </p>
        </div>
        <div className="space-y-3">
          <h1 className="text-xl md:text-3xl font-semibold">
            Rules and Guidelines
          </h1>
          
          <ul className="list-disc list-inside text-gray-300 text-sm md:text-md">
            {techEventDetails.rules && techEventDetails.rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>

        <Link
          to={"/coardinators"}
          className="border-2 bottom-10 border-yellow-400 px-2 py-2 md:px-4 md:py-3 hover:bg-yellow-400 hover:text-black transition-all rounded-md duration-300"
        >
          Contact Coordinator
        </Link>
      </div>
    </Layout>
  );
};

export default EventDetailsPage;
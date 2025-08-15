import { Link } from "react-router-dom";
import CoordinatorTable from "../../components/CoordinatorTable.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

const headings = ["Name", "Contact Number", "Type", "Role"];
const Coordinator = () => {
  const [coordinatorDetails, setCoordinatorDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "http://localhost:3000/api/coordinators";

  useEffect(() => {
    const fetchCoordinators = async () => {
      try {
        const response = await axios.get(API_URL);
        const data = response.data;

        if (data.success) {
          const combined = [
            ...data.overall,
            ...data.technicalEvents,
            ...data.nonTechnicalEvents,
          ];
          setCoordinatorDetails(combined);
        }
      } catch (error) {
        console.error("Error while fetching coordinators: " + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCoordinators();
  }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }
  console.log(coordinatorDetails);

  return (
    <div className="space-y-7">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-semibold">Coordinator Management</h1>
        <Link className="bg-gray-900 px-2 py-2 rounded-md">
          Add Coordinators
        </Link>
      </div>

      <CoordinatorTable headings={headings} datas={coordinatorDetails} />
    </div>
  );
};

export default Coordinator;

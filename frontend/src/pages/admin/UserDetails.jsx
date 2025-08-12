import React, { useEffect, useState } from "react";
import UserDetailsSections from "../../components/UserDetailsSections";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/user/${id}`
        );
        const data = response.data;

        if (data.success) {
          setUser(data.user);
        }
      } catch (error) {
        console.error("Error while fetching user: " + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (!user) {
    return <p className="text-white">Loading...</p>;
  }

  return (
    <div className="space-y-7">
      <div className="flex justify-between">
        {/* <h1 className="text-4xl font-semibold">User Details</h1> */}
        <Link to={'/admin/users'} className="px-4 py-2 rounded-lg outline-none bg-gray-900">
          Back
        </Link>
      </div>

     
      <div>
        <h1 className="text-2xl font-semibold">{user.fullName}</h1>
        <p className="text-sm text-gray-500 font-semibold">Registered User</p>
      </div>

     
      <UserDetailsSections
        heading="Personal Information"
        data={[
          {
            label1: "Full Name",
            value1: user.fullName,
            label2: "Email",
            value2: user.email,
          },
          {
            label1: "Mobile Number",
            value1: user.mobileNumber,
            label2: "Gender",
            value2: user.gender,
          },
        ]}
      />

      <UserDetailsSections
        heading="Academic Information"
        data={[
          {
            label1: "College",
            value1: user.college,
            label2: "Department",
            value2: user.department,
          },
          {
            label1: "Year of Study",
            value1: user.yearOfStudy,
            label2: "",
            value2: "",
          },
        ]}
      />

      <UserDetailsSections
        heading="Event Registrations"
        data={[
          {
            label1: "Technical Events",
            value1: user.technicalEvents.join(", "),
            label2: "Non-Technical Events",
            value2: user.nonTechnicalEvents.join(", "),
          },
        ]}
      />

      <UserDetailsSections
        heading="Additional Information"
        data={[
          {
            label1: "How Did You Know",
            value1: user.howDidYouKnow,
            label2: "Food Preferences",
            value2: user.foodPreferences,
          },
        ]}
      />
    </div>
  );
};

export default UserDetails;

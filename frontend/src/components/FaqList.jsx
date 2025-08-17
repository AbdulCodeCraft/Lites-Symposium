import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FaqList = ({onDelete , faqs}) => {
  // const [faqs, setFaqs] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const API_URL = "http://localhost:3000/api/faq";

  // useEffect(() => {
  //   const fetchFaq = async () => {
  //     try {
  //       const response = await axios.get(API_URL);
  //       const data = response.data;

  //       if (data.success) {
  //         const combined = [
  //           ...(data.registration ),
  //           ...(data.events ),
  //           ...(data.food_and_breverages),
  //         ];
  //         setFaqs(combined);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching FAQs:", error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchFaq();
  // }, []);

  // if (loading) return <p>Loading FAQs...</p>;

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq._id}
            className=" rounded-lg flex justify-between items-center"
          >
            <div>
              <h2 className="font-medium">{faq.question}</h2>
              <p className="text-gray-500">{faq.answer}</p>
            </div>
            <div className="flex gap-2">
              
              <Link
                to={`/admin/edit-faq/${faq._id}`}
                className="bg-blue-500 text-white px-3 py-1 rounded-md"
              >
                Edit
              </Link>

              <button onClick={() => onDelete(faq._id)} className="bg-red-500 text-white px-3 py-1 rounded-md">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqList;

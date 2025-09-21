  import FaqDropDown from "../components/FaqDropDown";
  import Layout from "../layout/Layout";
  import { useState, useEffect } from "react";
  import axios from "axios";
  import RingLoader from "react-spinners/RingLoader";

  const FaqPage = () => {
    const [faq, setFaq] = useState([]);
    const [loading, setLoading] = useState(true);
    
    
    
    const API_URL = `${import.meta.env.VITE_APP_BACKEND_URL}/api/faq/`;
    useEffect(() => {
      const fetchFaq = async () => {
        try {
          const respose = await axios.get(API_URL);
          const data = respose.data;

          if (data.success) {
            setLoading(false);
            setFaq(data);
          }
        } catch (error) {
          console.log(error);
        }
      };

      fetchFaq();
    }, []);

    

    return (
      <div>
        <Layout>
          {loading && (
            <div className="flex bg-black justify-center items-center min-h-screen">
              <RingLoader size={150} color="#FFFF" />
            </div>
          )}

          {!loading && (
            <div className="min-h-screen bg-black pt-15 px-2 md:pt-25 text-white  pb-2 md:pb-10 md:px-30">
              <h1 className="md:text-5xl text-2xl font-semibold">
                Frequently Asked Questions
              </h1>
              <FaqDropDown title="Registration" events={faq.registration} />
              <FaqDropDown title="Events" events={faq.events} />
              <FaqDropDown
                title="Food And Beverages"
                events={faq.food_and_breverages}
              />
            </div>
          )}
        </Layout>
      </div>
    );
  };

  export default FaqPage;

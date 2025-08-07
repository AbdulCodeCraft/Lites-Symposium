import { useState } from "react";
import Table from "../components/Table.jsx";
import Layout from "../layout/Layout.jsx";
import axios from 'axios';
import { useEffect } from "react";
import Loading from "../components/Loading.jsx";


const Coardinator = () => {

  const [overall,setOverall] = useState([]);
  const [technicalEvents,setTechnicalEvents] = useState([]);
  const [nonTechnicalEvents,setNonTechnicalEvents] = useState([]);

  const[loading,setLoading] = useState(true);
  const[error,setError] = useState(null)

  useEffect(()=>{
    const API_URL = "https://lites-symposium.onrender.com/api/coordinators";

    const fetchCoardinator = async() =>{
      try {
        const response = await axios.get(API_URL);
        const data = response.data;
       
        if(data.success){
          setOverall(data.overall),
          setTechnicalEvents(data.technicalEvents)
          setNonTechnicalEvents(data.nonTechnicalEvents)
        }else{
          throw new error(data.error)
        }
      } catch (error) {
        setError(error.response.data)
        console.log(`Error Response ${error.response.data}`);
        console.log(`Error Status ${error.response.status}`);
        setError(error.request.data)
        
      }
      finally{
        setLoading(false)
      }
    };
    fetchCoardinator();
  },[])
  return (
    <Layout>
      {loading && (
        <div>
          <Loading/>
        </div>
      )}
     {error && (
        <div className="min-h-screen">

          {error}
        </div>
      )
     }
      
      
      {!error && <div className="min-h-screen bg-black pt-15 px-2 md:pt-25 pb-10 md:px-60">
        <h1 className="text-white font-bold text-2xl md:text-7xl">Coardinators</h1>
        <Table title="Overall" tableDatas={overall} overallCoardinator />
        <Table title="Technical Events" tableDatas={technicalEvents} />
        <Table title="Non-Technical Events" tableDatas={nonTechnicalEvents} />
      </div>}
    </Layout>
  );
};

export default Coardinator;

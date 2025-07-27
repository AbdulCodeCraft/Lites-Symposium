import Table from "../components/Table.jsx";
import Layout from "../layout/Layout.jsx";

const tech = [
  {
    event_name :"Paper Presentatio",
    coardinator_name : "Abdul Rahman",
    contact_number :7448682797
  
  },
  {
    event_name :"Paper Presentatio",
    coardinator_name : "Abdul Rahman",
    contact_number :7448682797
  
  },
  {
    event_name :"Paper Presentatio",
    coardinator_name : "Abdul Rahman",
    contact_number :7448682797
  
  },
]

const Coardinator = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-black pt-20 px-30">
        <h1 className="text-white font-bold text-4xl">Coardinators</h1>

       <Table title="Technical Events" tableDatas={tech}/>
      </div>
    </Layout>
  );
};

export default Coardinator;

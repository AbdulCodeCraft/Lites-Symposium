import Table from "../components/Table.jsx";
import Layout from "../layout/Layout.jsx";

const overall = [
  {
    contact_number: 7448682797,
    coardinator_name: "Abdul Rahman",
    role: "Student Coardinator",
  },
  {
    contact_number: 7448682797,
    coardinator_name: "Abdul Rahman",
    role: "Student Coardinator",
  },
 
];
const tech = [
  {
    event_name: "Paper Presentatio",
    coardinator_name: "Abdul Rahman",
    contact_number: 7448682797,
  },
  {
    event_name: "Paper Presentatio",
    coardinator_name: "Abdul Rahman",
    contact_number: 7448682797,
  },
  {
    event_name: "Paper Presentatio",
    coardinator_name: "Abdul Rahman",
    contact_number: 7448682797,
  },
];
const nonTech = [
  {
    event_name: "Paper Presentatio",
    coardinator_name: "Abdul Rahman",
    contact_number: 7448682797,
  },
  {
    event_name: "Paper Presentatio",
    coardinator_name: "Abdul Rahman",
    contact_number: 7448682797,
  },
  {
    event_name: "Paper Presentatio",
    coardinator_name: "Abdul Rahman",
    contact_number: 7448682797,
  },
];

const Coardinator = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-black pt-25 pb-10 px-60">
        <h1 className="text-white font-bold text-7xl">Coardinators</h1>
        <Table title="Overall" tableDatas={overall} overallCoardinator />
        <Table title="Technical Events" tableDatas={tech} />
        <Table title="Non-Technical Events" tableDatas={nonTech} />
      </div>
    </Layout>
  );
};

export default Coardinator;

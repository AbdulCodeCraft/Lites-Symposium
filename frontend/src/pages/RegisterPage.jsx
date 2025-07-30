import CheckList from "../components/CheckList";
import Input from "../components/Input";
import Options from "../components/Options";
import Layout from "../layout/Layout";

const food = ["", "Vegetarian", "Non-Vegetarian"];
const year = ["", "4th Year", "3rd Year", "2nd Year", "1st Year"];
const know = ["", "Friends", "College", "Instagram", "LinkedIn"];
const gender = ["", "Male", "Female"];
const technicalEvents = [
  "Paper Presentation",
  "Web Design",
  "Code Relay",
  "Code Debugging",
];
const RegisterPage = () => {
  return (
    <Layout>
      <div className="min-h-screen text-white bg-black pt-17 px-3 md:pt-25 pb-6 md:pb-10 md:px-60">
        <div className="space-y-3 ">
          <h1 className="text-2xl md:text-5xl  font-semibold">Registration</h1>
          <p className="text-gray-400 text-sm ms:text-md">
            Register for Tech Symposium and participate in exciting technical
            and non-tecnical events.
          </p>
        </div>
        <Input placeholder="Enter your full name" label="Full Name" />
        <Input placeholder="Enter your e-mail Address" label="E-mail" />
        <Input placeholder="Enter your mobile number" label="Mobile Number" />
        <Input placeholder="Enter your college name" label="College  " />
        <Input placeholder="Enter your department" label="Department" />
        <Options label="Year of study" options={year} />
        <CheckList title="Technical Event" lists={technicalEvents}/>
        <CheckList title="Non-Technical Event" lists={technicalEvents}/>
        <Options label="How did you know about the event?" options={know} />
        <Options label="Food Preferences" options={food} />
        <Options label="Gender" options={gender} />
        <button className="md:w-1/2 bg-blue-400 md:py-2  md:px-0 px-3  py-2 rounded-lg hover:bg-blue-600 transition-all duration-300">Submit Registration</button>
      </div>
    </Layout>
  );
};

export default RegisterPage;

import { use, useState } from "react";
import AboutContact from "../components/AboutContact.jsx";
import OrganizerCard from "../components/OrganizerCard.jsx";
import Layout from "../layout/Layout.jsx";

const AboutPage = () => {
  const[loading,setLoading] = useState(true);
  return (
    <Layout>
      <div className="relative min-h-screen bg-black text-white">
        <div className="flex pt-13  md:pt-0 flex-col w-full items-center gap-4 justify-center ">
          <div className="relative">
            <img
              className=" rounded-md  "
              src="/images/about-bg.jpg"
              onLoad={() => setLoading(false)}
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <h1 className="absolute lg:text-9xl text-white/40 flex justify-center w-full bottom-30 text-3xl md:bottom-120">
              OUR CSE FAMILY
            </h1>
          </div>
        </div>
        <div className="md:p-10 p-4 space-y-6 text-center">
          <div className=" space-y-5">
            <h1 className="text-xl md:text-3xl font-semibold ">Our Vision</h1>
            <p className="text-sm md:text-lg">
              To be a reputed center producing socially committed Computer
              Engineers with leadership qualities to serve the rural society
            </p>
          </div>
          <div className=" space-y-5 ">
            <h1 className="text-xl md:text-3xl font-semibold">Our Mission</h1>
           
              <ul className="space-y-4">
                <li>
                  {" "}
                  DM1: To build Computer Engineers with professional ethics and
                  entrepreneurship skills.
                </li>
                <li>
                  DM2: To inculcate problem solving and team building skills to
                  promote lifelong learning with the sense of social
                  responsibilities.{" "}
                </li>
                <li>
                  DM3: To produce effective Computer Engineers with exposure to
                  current industrial advancements through higher education and
                  serve the common people through their expertise
                </li>
              </ul>
          
          </div>
        </div>
        <div className="md:p-10 p-4 flex justify-center items-center ">
          <div className="relative md:w-3/4 md:h-150 rounded-md flex gap-1 md:gap-2 overflow-hidden">
            <div className="w-1/3 md:h-full">
              <img
                src="/images/about-card-1.jpg"
                className="object-cover h-full"
                alt=""
              />
            </div>
            <div className=" w-2/3 h-full  flex flex-col gap-1 md:gap-2 ">
              <div className="h-1/2   flex items-center justify-center overflow-hidden">
                <img
                  src="/images/about-card-2.jpg"
                  alt=""
                  className="object-cover"
                />
              </div>
              <div className="h-1/2   flex items-center justify-center overflow-hidden">
                <img
                  src="/images/about-card-3.jpg"
                  alt=""
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="md:p-10 p-4 space-y-6 text-center">
          <h1 className="text-xl md:text-3xl font-semibold">Organizers</h1>
          <p className="text-sm md:text-lg">
            BytCraze 2025, organized by the Department of Computer Science and
            Engineering, Loyola Institute of Technology and Science (LITES), is
            powered by our dedicated faculty and student coordinators. With
            their passion and teamwork, we are excited to bring you an engaging
            and memorable symposium experience next month.
          </p>

          <div className="flex items-center justify-center space-x-3 md:space-x-16">
            <OrganizerCard
              image="/images/abdul.jpeg"
              name="Abdul Rahman A"
              role="Student Coardinator"
            />
            <OrganizerCard
              image="/images/suji.jpg"
              name="Suji Andreas M"
              role="Staff Coardinator"
            />
            <OrganizerCard
              image="/images/ida.jpg"
              name="Merry Ida A"
              role="The Convenor"
            />
            <OrganizerCard
              image="/images/keerthika.jpg"
              name="Keerthika K"
              role="Student Coardinator"
            />
          </div>
        </div>
        <div className="md:p-10 p-4">
          <AboutContact />
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;

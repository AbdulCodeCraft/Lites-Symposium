import AboutContact from "../components/AboutContact.jsx";
import OrganizerCard from "../components/OrganizerCard.jsx";
import Layout from "../layout/Layout.jsx";

const AboutPage = () => {
  return (
    <Layout>
      <div className="relative min-h-screen bg-black text-white">
        <div className="flex pt-13  md:pt-0 flex-col w-full items-center gap-4 justify-center ">
          <div className="relative">
            <img className=" rounded-md  " src="/images/about-bg.jpg" alt="" />
            <div className="absolute inset-0 bg-black/50"></div>
            <h1 className="absolute lg:text-9xl text-white/40 flex justify-center w-full bottom-30 text-3xl md:bottom-120">
              Our CSE Family
            </h1>
          </div>
        </div>
        <div className="md:p-10 p-4 space-y-6">
          <div className=" space-y-5">
            <h1 className="text-xl md:text-3xl font-semibold">Our Vision</h1>
            <p className="text-sm md:text-lg">
              The department aims to enlighten rural students by providing them
              with access to quality technical education that fosters societal
              development and encourages entrepreneurship. In addition, it is
              committed to nurturing interpersonal skills and shaping students
              into responsible leaders who are dedicated to serving the society.
            </p>
          </div>
          <div className=" space-y-5 ">
            <h1 className="text-xl md:text-3xl font-semibold">Our Mission</h1>
            <p className="text-sm md:text-lg">
              The department strives to build competent Computer Engineers
              equipped with strong professional ethics and entrepreneurial
              skills. It focuses on inculcating problem-solving abilities and
              team-building qualities to promote lifelong learning and a deep
              sense of social responsibility. Additionally, the department aims
              to produce effective engineers who stay abreast of current
              industrial advancements through higher education and utilize their
              expertise to serve the common people.
            </p>
          </div>
        </div>
        <div className="md:p-10 p-4 flex justify-center items-center">
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
        <div className="md:p-10 p-4 space-y-6">
          <h1 className="text-xl md:text-3xl font-semibold">Organizers</h1>
          <p className="text-sm md:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Obcaecati, consequatur
            nemo! Recusandae repellat quaerat aut. Iure eligendi rem, nesciunt
            placeat, odit similique modi tempora corrupti sunt dignissimos fuga
            repudiandae ipsa! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ipsa, sit tempora? Architecto unde quae ea perspiciatis
            maiores commodi, consequuntur ratione itaque expedita veritatis
            recusandae dolor, suscipit quibusdam officia nihil. Rem!.
            Consequuntur dolorem mollitia numquam laborum odio? Fugit nisi
            suscipit, iusto, nesciunt nostrum nobis ex vel temporibus a omnis
            ratione neque ab tempore?
          </p>

          <div className="flex items-center justify-center space-x-3 md:space-x-16">
            <OrganizerCard image="/images/abdul.jpeg" name="Abdul Rahman A" role="Student Coardinator"/>
            <OrganizerCard image="/images/suji.png" name="Suji Andreas" role="Staff Coardinator"/>
            <OrganizerCard image="/images/keerthika.jpg" name="Keerthika K" role="Student Coardinator"/>
          </div>
        </div>
        <div className="md:p-10 p-4">
          <AboutContact/>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;

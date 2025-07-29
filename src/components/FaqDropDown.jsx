import { useState } from "react";
import { FaChevronDown,FaChevronUp} from "react-icons/fa";

const faqs = [
  {
    question: "How do I register for the symposium?",
    answer:
      "You can register through the official event website under the Registration section.",
  },
  {
    question: "What is the registration fee?",
    answer: "The registration fee is ₹200, which covers access to all events.",
  },
  {
    question: "Can I register for individual events?",
    answer:
      "Yes, you can choose to participate in specific events during registration.",
  },
];

const FaqDropDown = ({ title }) => {
  if (faqs.length === 0) {
    return <div>No Items Availble</div>;
  }
  const [openIndex, setOpenIndex] = useState();

  const handleClick = (index) => {
    setOpenIndex(openIndex == index ? null : index)
  };

  return (
    <div className="my-10">
      <h1 className="text-3xl font-semibold">{title}</h1>

  
        {faqs.map((faq, index) => {
          return (
            <div className="mt-5" key={index}>
              <div onClick={()=>{handleClick(index)}} className="  flex flex-col justify-between p-4 space-y-4 w-full bg-gray-800  rounded-md">
                <div  className="flex justify-between  ">
                  <h1 className="text-lg font-semibold ">{faq.question}</h1>
                  {openIndex == index ? <FaChevronDown size={20} /> : <FaChevronUp size={20} />  }
                  
                  
                </div>
                {openIndex == index && <div className="text-gray-400">{faq.answer}</div>}
              </div>
            </div>
          );
        })}
      </div>

  );
};

export default FaqDropDown;

import { useState } from "react";
import FaqDropDown from "../components/FaqDropDown";
import Layout from "../layout/Layout";



const FaqPage = () => {
  const [openIndex,setOpenIndex] = useState(null);

  const toggle = (index) =>{
    setOpenIndex()
  }
  return (
    <div>
      <Layout>
        <div className="min-h-screen bg-black pt-25 text-white pb-10 px-30">
          <h1 className="text-5xl font-semibold">Frequently Asked Questions</h1>
          <FaqDropDown title="Registration"/>
          <FaqDropDown title="Events"/>
          <FaqDropDown title="Food And Breverages"/>
        </div>
      </Layout>
    </div>
  )
}

export default FaqPage

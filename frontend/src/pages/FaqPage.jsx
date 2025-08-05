import FaqDropDown from "../components/FaqDropDown";
import Layout from "../layout/Layout";



const FaqPage = () => {
  
  return (
    <div>
      <Layout>
        <div className="min-h-screen bg-black pt-15 px-2 md:pt-25 text-white  pb-2 md:pb-10 md:px-30">
          <h1 className="md:text-5xl text-2xl font-semibold">Frequently Asked Questions</h1>
          <FaqDropDown title="Registration"/>
          <FaqDropDown title="Events"/>
          <FaqDropDown title="Food And Breverages"/>
        </div>
      </Layout>
    </div>
  )
}

export default FaqPage

import React, { useRef, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./app.css";
import Header from "./layout/Header";
import GetStarted from "./GetStarted";
import Thankyou from "./Thankyou";
import Enterprise from "./pages/Enterprise";
import EnterprisePricing from "./enterprise/Pricing";
import Business from "./pages/Business";
import BusinessPricing from "./business/Pricing";
import Education from "./pages/Education";
import EducationPricing from "./education/Pricing";
import Individual from "./pages/Individual";
import IndividualPricing from "./individual/Pricing";
import Iteam from "./pages/products/Iteam";
import Hr360 from "./pages/products/Hr360";
import LeadKonnekt from "./pages/products/LeadKonnekt";
import EasyForms from "./pages/products/EasyForms";
import Ischool from "./pages/products/Ischool";
import Ischoolforme from "./pages/products/IschoolForMe";
import Ischoolforu from "./pages/products/IschoolForU";
import EasyFee from "./pages/products/EasyFee";
import OBrain from "./pages/OBrain";
import TakeYourSchoolOnline from "./pages/TakeYourSchoolOnline";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import BlogsArchive from "./pages/BlogsArchive";
import DynamicPricing from "./components/Pricing/DynamicPricing";
import FAQs from "./pages/FAQs";
import ContactSupport from "./pages/ContactSupport";
import CustomDevelopment from "./pages/Custom-Development";
import BecomePartner from "./pages/BecomePartner";
import ContactUs from "./pages/ContactUs";
import SubmitTicket from "./pages/SubmitATicket";
import Hosting from "./pages/Hosting";
import OurCompany from "./pages/OurCompany";
import Pricing from "./testing/Pricing";
import Footer from "./layout/Footer";
import CostSaving from "./pages/CostSaving";
import OBrainForWork from "./pages/OBrainForWork";
import 'aos/dist/aos.css';
import Aos from 'aos';
import Introduction from './pages/Introduction'
import AMS from "./pages/products/AMS";

const App = () => {
  const sectionPlansRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    Aos.init({ duration: 600, easing: 'ease-in-out' });
  }, []);
  return (
    <>
      <Header sectionPlansRef={sectionPlansRef} />
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/enterprise" element={<Enterprise sectionPlansRef={sectionPlansRef} />} />
        <Route path="/business" element={<Business />} />
        <Route path="/education" element={<Education />} />
        <Route path="/individual" element={<Individual />} />
        <Route path="/enterprisepricing" element={<EnterprisePricing />} />
        <Route path="/businesspricing" element={<BusinessPricing />} />
        <Route path="/educationpricing" element={<EducationPricing />} />
        <Route path="/individualpricing" element={<IndividualPricing />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/iteam" element={<Iteam />} />
        <Route path="/hr360" element={<Hr360 />} />
        <Route path="/ams" element={<AMS />} />
        <Route path="/leadkonnekt" element={<LeadKonnekt />} />
        <Route path="/easyforms" element={<EasyForms />} />
        <Route path="/ischool" element={<Ischool />} />
        <Route path="/ischoolforme" element={<Ischoolforme />} />
        <Route path="/ischoolforu" element={<Ischoolforu />} />
        <Route path="/easyfee" element={<EasyFee />} />
        <Route path="/obrain" element={<OBrain />} />
        <Route path="/obrain-for-work" element={<OBrainForWork />} />
        <Route path="/take-your-school-online" element={<TakeYourSchoolOnline />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/blogs" element={<BlogsArchive />} />
        <Route path="/pricing" element={<DynamicPricing />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact-support" element={<ContactSupport />} />
        <Route path="/custom-development" element={<CustomDevelopment />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/become-partner" element={<BecomePartner />} />
        <Route path="/submit-a-ticket" element={<SubmitTicket />} />
        <Route path="/submit-a-ticket" element={<SubmitTicket />} />
        <Route path="/hosting" element={<Hosting />} />
        <Route path="/our-company" element={<OurCompany />} />
        <Route path="/cost-saving" element={<CostSaving />} />
        <Route path="/pricingtest" element={<Pricing />} />
      </Routes>
      {/* <Navbar /> */}
      <Footer />
    </>
  );
};

export default App;

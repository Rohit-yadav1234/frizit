import About from "./About";
import ChooseServicesLink from "./ChooseServicesLink";
import Footer from "./common/Footer";
import GooglePlay from "./common/Google_play";
import Navbar from "./common/Navbar";
import ContactUs from "./ContactUs";
import Franchise from "./Franchise";
import Herosection from "./Herosection";
import OurIndustry from "./OurIndustry";
import OurServices from "./OurServices";
import Why from "./WhyUs";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Herosection />
      <ChooseServicesLink />
      <About />
      <OurIndustry />
      <Why />
      <OurServices/>
      <Franchise />
      <GooglePlay />
      <ContactUs />
      <Footer />
    </>
  );
};

export default HomePage;

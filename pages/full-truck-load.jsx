import ChoosePart from "@/components/common/Choose_part";
import Footer from "@/components/common/Footer";
import GooglePlay from "@/components/common/Google_play";
import { choose_card2, logisticCards2 } from "@/components/common/Helper";
import LogisticMap from "@/components/common/LogisticMap";
import LogisticService from "@/components/common/LogisticService";
import Navbar from "@/components/common/Navbar";
import Unlock from "@/components/common/Unlock";
import WhyChoose from "@/components/common/WhyChoose";

const FullruckLoad = () => {
  return (
    <>
      <Navbar />
      <Unlock />
      <ChoosePart Chooseservice="Why choose full load service?" />
      <WhyChoose data={choose_card2} />
      <GooglePlay />
      <LogisticService />
      <LogisticMap data2={logisticCards2} />
      <Footer />
    </>
  );
};

export default FullruckLoad;

import ChoosePart from "@/components/common/Choose_part";
import Footer from "@/components/common/Footer";
import GooglePlay from "@/components/common/Google_play";
import { choose_card, logisticCards } from "@/components/common/Helper";
import LogisticMap from "@/components/common/LogisticMap";
import LogisticService from "@/components/common/LogisticService";
import Navbar from "@/components/common/Navbar";
import Unlock from "@/components/common/Unlock";
import WhyChoose from "@/components/common/WhyChoose";

const PartLoad = () => {
  return (
    <>
      <Navbar />
      <Unlock/>
      <ChoosePart Chooseservice="Why choose part load service?" />
      <WhyChoose data={choose_card} />
      <GooglePlay />
      <LogisticService />
      <LogisticMap data2={logisticCards} />
      <Footer />
    </>
  );
};

export default PartLoad;

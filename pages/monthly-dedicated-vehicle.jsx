import ChoosePart from "@/components/common/Choose_part";
import Footer from "@/components/common/Footer";
import GooglePlay from "@/components/common/Google_play";
import { choose_card3, logisticCards3 } from "@/components/common/Helper";
import LogisticMap from "@/components/common/LogisticMap";
import LogisticService from "@/components/common/LogisticService";
import Navbar from "@/components/common/Navbar";
import Unlock from "@/components/common/Unlock";
import WhyChoose from "@/components/common/WhyChoose";
import React from "react";

const MonthlyDedicatedVehicle = () => {
  return (
    <>
      <Navbar />
      <Unlock />
      <ChoosePart Chooseservice="Why choose monthly dedicated vehicle service?" />
      <WhyChoose data={choose_card3} />
      <GooglePlay />
      <LogisticService />
      <LogisticMap data2={logisticCards3} />
      <Footer />
    </>
  );
};

export default MonthlyDedicatedVehicle;

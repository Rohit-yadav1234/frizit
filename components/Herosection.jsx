import Image from "next/image";
import React from "react";

const Herosection = () => {
  return (
    <div className="bg-[url(/img/hero-bg.png)] lg:bg-center bg-cover bg-no-repeat  w-full  sm:px-4 px-3 lg:pb-[9px]  max-lg:pt-[21px]">
      <div className="max-w-[1296px] w-full mx-auto  flex flex-col lg:flex-row items-center justify-between ">
        <div className="flex flex-col items-center xl:gap-[43px] lg:gap-[20px] ms:gap-[15px]  gap-2  xl:max-w-[628px] lg:max-w-[525px]  w-full">
          <p className="lg:text-[36px] md:text-[32px] sm:text-[24px] text-xl font-bold xl:leading-[56px] leading-[115%] max-md:text-center  tracking-[1px] text-white font-poppins  ">
            Cold Chain Service now just a Click away
          </p>

          <p className="text-white md:text-lg sm:text-base text-sm md:font-bold  font-medium  xl:leading-[30px]  font-poppins max-lg:text-center ">
            We provide a Plug'n'Play model for temperature-sensitive products,
            empowering our customers with the essential tools to expand their
            business while we ensure the preservation and transportation of
            perishable goods.
          </p>
        </div>

        <Image
          src="/img/hero-banner.png"
          width="526"
          height="350"
          alt="hero-banner.png"
        />
      </div>
    </div>
  );
};

export default Herosection;

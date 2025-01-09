import Image from "next/image";
import React from "react";
import { Door } from "./Icon";
import { choose_card } from "./Helper";

const ChoosePart = ({ Chooseservice }) => {
  return (
    <div className="bg-[#F8F8F8] px-4 pt-0 md:pt-[150px] lg:pt-[215px] pb-8 sm:pb-10">
      <div className="max-w-[1320px] w-full mx-auto ">
        <p className="text-[rgba(71,162,218,0.10)] font-poppins text-center text-[54px] md:text-[130px] font-bold leading-[126.1%] tracking-[1px] whitespace-nowrap overflow-hidden">
          Why Choose Frizit
        </p>
        <div className="flex flex-col gap-[11px] mt-[-24px] md:mt-[-100px]">
          <p className="text-[#1777D0] font-poppins text-[25px] text-center md:text-start md:text-[48px] font-bold leading-[120%] ">
            {Chooseservice}
          </p>
          <Image src="/img/line.png" alt="line-img" width={218} height={7} />
        </div>
      </div>
    </div>
  );
};

export default ChoosePart;

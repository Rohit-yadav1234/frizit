import React, { useState } from "react";
import { serviceData, serviceData2, serviceData3 } from "./common/Helper";
import Image from "next/image";
import { RightarrowIcon } from "./common/Icon";
import Link from "next/link";

const ChooseServicesLink = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-[#F2F2F2] relative pt-[47px] pb-[34px] px-3">
      <p className="text-[rgba(71,162,218,0.10)] absolute top-0 font-poppins right-1 md:right-[100px] xl:right-[300px] 2xl:right-[515px] text-5xl sm:text-8xl md:text-[100px] xl:text-[130px] font-bold leading-[107%] tracking-[10px] md:tracking-[37px]">
        Services
      </p>
      <div className="flex flex-col max-w-none md:max-w-[1296px] w-full mx-auto font-poppins">
        <div className="flex flex-col gap-[11px]">
          <p className="text-[#1777D0]  text-3xl md:text-5xl font-bold leading-[110%]">
            Choose Services
          </p>
          <Image width={218} height={7} src="/img/line.png" alt="png" />
        </div>

        <div className="flex flex-col gap-[30px] px-[10px] mt-[41px]">
          {/* ServiceData Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[20px] gap-y-5">
            {serviceData.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                }} // Set active index on click
                className={`group cursor-pointer border-[1px] rounded-lg py-3  px-1 sm:p-[18px] max-w-none md:max-w-[412px] w-full duration-300 hover:bg-[#38B6FF] hover:border-[#38B6FF]
                  ${
                    activeIndex === index
                      ? "bg-[#38B6FF] border-[#38B6FF]"
                      : "bg-white border-[#ccc]"
                  }`}
              >
                <div className="flex items-center gap-2 sm:gap-[24px]">
                  <div
                    className={`rounded-md flex items-center justify-center py-1 sm:py-3 relative px-[10px] duration-300 ${
                      activeIndex === index ? "" : "bg-[#38B6FF]"
                    }`}
                  >
                    {item.svg}
                  </div>
                  <div className="flex flex-col gap-[7.5px]">
                    <p
                      className={`text-base sm:text-[24px] font-bold leading-[120%] group-hover:text-white  ${
                        activeIndex === index ? "text-white" : "text-[#333]"
                      }`}
                    >
                      {item.text1}
                    </p>
                    <p
                      className={`text-sm sm:text-[18px] leading-[150%] group-hover:text-white xl:whitespace-nowrap ${
                        activeIndex === index ? "text-white" : "text-[#555]"
                      }`}
                    >
                      {item.text2}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Conditional Rendering for serviceData2 and serviceData3 */}
          {(activeIndex === 0 || activeIndex === 2) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[20px] gap-y-5">
              {serviceData2.map((item, index) => (
                <Link
                  href={item.url}
                  key={index}
                  className="group cursor-pointer justify-between items-center py-2 px-3 sm:px-[21px] rounded-lg flex gap-5max-w-none md:max-w-[412px] bg-white w-full duration-300 hover:bg-[#38B6FF] hover:border-[#38B6FF] border border-[rgba(0,0,0,0.20)]"
                >
                  <div className="flex flex-col gap-2 max-md:justify-center">
                    <div className="rounded-full mr-auto bg-[#38B6FF] self-center p-1">
                      {item.svg}
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="flex gap-[1.5px] group-hover:text-white text-sm justify-center items-center text-black sm:text-lg font-bold leading-[111%]">
                        {item.text}
                        <RightarrowIcon />
                      </p>
                    </div>
                  </div>
                  <div>{item.svg2}</div>
                </Link>
              ))}
            </div>
          )}

          {activeIndex === 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 max-w-[860px] w-full mx-auto gap-x-[20px] gap-y-5">
              {serviceData3.map((item, index) => (
                <div
                  key={index}
                  className="group cursor-pointer mx-auto justify-between pt-[9px] pb-[11px] px-[21px] rounded-lg flex gap-5 max-w-none md:max-w-[412px] bg-white w-full duration-300 hover:bg-[#38B6FF] hover:border-[#38B6FF] border border-[rgba(0,0,0,0.20)]"
                >
                  <div className="flex flex-col gap-2 pt-0 sm:pt-[25px] pb-0 sm:pb-[27px]">
                    <div className="rounded-full mr-auto bg-[#38B6FF] self-center p-2">
                      {item.svg}
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="flex gap-[1.5px] justify-center items-center text-black text-sm sm:text-lg font-bold leading-[111%]">
                        {item.text}
                        <RightarrowIcon />
                      </p>
                    </div>
                  </div>
                  <div>{item.svg2}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChooseServicesLink;

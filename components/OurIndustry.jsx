import Image from "next/image";
import { Features } from "./common/Helper";
export default function OurIndustry() {
  return (
    <div className=" px-4 pt-5 bg-[#f2faff] w-full">
      <div className="max-w-[1320px] w-full mx-auto flex flex-col lg:flex-row  justify-between gap-8">
        {/* card */}
        <div className=" flex flex-col max-lg:items-center">
          <h2 className="text-2xl md:text-3xl text-[#1777D0] leading-[31px] font-bold font-poppins  mb-[25px] md:mb-[61px]">
            Our industry-explicit competence
          </h2>
          <div className="lg:max-w-[660px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-6">
            {Features.map((feature, index) => (
              <div
                key={index}
                className="lg:max-w-[196px] w-full flex flex-col md:pt-[26px] md:pb-[35px] md:pr-[24px] md:pl-[25px] p-[10px] items-center justify-center border-[2px] border-blue-600 bg-white rounded-xl gap-[3px]"
              >
                <div className=" flex items-center justify-center rounded-full mb-3">
                  <Image
                    className="w-[60px] h-[60px]"
                    src={feature.icon}
                    width={60}
                    height={60}
                    alt="image"
                  />
                </div>
                <h3 className="text-[#223C99] font-poppins text-center text-[18px] md:text-[22px] font-bold leading-[24px] md:leading-[26.4px]">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/*  map */}
        <div className="flex justify-center">
          <Image
            src="/img/map.png"
            width={445}
            height={440}
            alt="map"
            className="mt-[50px] mb-5"
          />
        </div>
      </div>
    </div>
  );
}

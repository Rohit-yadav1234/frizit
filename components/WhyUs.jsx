import Image from "next/image";
import { tick } from "./common/Helper";

const WhyUs = () => {
  return (
    <div id="whyus">
      <div className="max-w-[1056px] w-full mx-auto px-4 max-md:pb-[40px] max-sm:pb-[30px] pb-[50px] overflow-hidden">
        <p className="text-[#E9EBEC] text-[130px] max-md:text-[130px] max-sm:text-[55px]  font-poppins font-bold leading-[107.6%] tracking-[10px] text-center whitespace-nowrap overflow-hidden  mr-[-100px] max-sm:mr-[0px]">
          WhyUs?
        </p>

        <div className="mt-[-100px] max-sm:mt-[-50px] flex flex-col gap-[11px]">
          <p className="text-[#1777D0] font-poppins text-[48px]  font-bold leading-[120%] ">
            Why Us?
          </p>
          <Image src="/img/line.png" width={218} height={7} alt="line-img" />
        </div>
      </div>
      <div className="flex   max-lg:flex-col  ">
        <div className=" bg-[#00A1FF]  w-full pl-[112px] max-xl:pl-[75px] max-lg:pl-[80px] max-md:pl-[50px]  max-sm:pl-[30px] pr-[17px]">
          <div>
            {tick.map((itmes, index) => (
              <div
                key={index}
                className="flex gap-[10px] itmes-center pt-[30px] max-md:pt-[12px]"
              >
                <Image
                  className="min-w-6 sm:min-w-9 max-w-6 sm:max-w-9 w-full h-6 sm:h-9"
                  src="/img/tick.png"
                  width={36}
                  height={36}
                  alt="tick"
                />
                <p className="max-w-[900px] w-full text-[#fff] font-poppins text-base font-light">
                  <span className="text-[#fff] font-poppins text-[16px]  font-bold ">
                    {itmes.span}
                  </span>
                  {itmes.p}
                </p>
              </div>
            ))}
            ;
          </div>
        </div>

        <div className="bg-[url(/img/Backg.png)] max-w-[806px] max-lg:max-w-full w-full  bg-no-repeat bg-cover bg-center flex justify-center items-center">
          <Image
            className=" px-10 max-lg:pt-[10px]"
            src="/img/bear.png"
            width={613}
            height={434}
            alt="tick"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

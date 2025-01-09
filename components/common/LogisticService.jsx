import Image from "next/image";
import { logisticCards } from "./Helper";

const LogisticService = () => {
  return (
    <div className="bg-[rgba(23,119,208,0.10)]  w-full">
      <div className="px-4">
        <div className="max-w-[1320px] w-full mx-auto">
          <p className="text-[white] text-center font-poppins text-[54px] md:text-[130px] font-bold leading-[126.1%] tracking-[1px] whitespace-nowrap overflow-hidden">
            Other services
          </p>

          <div className="flex flex-col gap-8 sm:gap-[50px]">
            <div className="flex flex-col gap-[11px] mt-[-35px] md:mt-[-95px]">
              <p className="text-[#1777D0] font-poppins  text-[24px] sm:text-[32px] md:text-[48px] font-bold leading-[120%]">
                Other logistics services
              </p>
              <Image
                src="/img/line.png"
                alt="line-img"
                width={218}
                height={7}
              />
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticService;

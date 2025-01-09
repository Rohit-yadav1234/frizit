import Image from "next/image";
import React from "react";
import Qutations from "./Qutations";
import Qutation2 from "./Qutation2";
import { usePathname } from "next/navigation";

const Unlock = () => {
  const pathname = usePathname();

  // Conditional Rendering based on Pathname
  const RenderComponent = () => {
    if (pathname === "/monthly-dedicated-vehicle") {
      return (
        <Qutation2 partfreight="On the monthly dedicated vehicle freight quotations" />
      );
    } else {
      return <Qutations partfreight="On the part load freight quotations"/>;
    }
  };

  return (
    <div className="bg-[url(/img/mainbg.png)] bg-cover bg-center">
      <div className="flex flex-col max-w-[1070px] xl:max-w-[1320px] mx-auto pt-[58.5px] relative pb-[103px]">
        <div className="flex max-md:flex-col gap-5 sm:gap-10 px-3 font-poppins items-center">
          <div className="flex flex-col gap-[9px] mb-4 sm:mb-14">
            <p className="text-white text-2xl sm:text-4xl lg:text-[42px] font-bold leading-[114%]">
              Unlock your growth potential with our services
            </p>
            <p className="text-white text-lg sm:text-xl leading-[150%]">
              Cold Chain is now just a CLICK away
            </p>
          </div>
          <div>
            <Image
              className=" h-[180px] sm:h-[270px] md:h-[330px] lg:h-[403px] max-w-[250px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[526px]"
              width={526}
              height={403}
              src="/img/unloading.png"
              alt="unloading.png"
            />
          </div>
        </div>

        {/* Conditional Rendering */}
        <div className="px-3">{RenderComponent()}</div>
      </div>
    </div>
  );
};

export default Unlock;

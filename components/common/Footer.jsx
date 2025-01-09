import Image from "next/image";
import Link from "next/link";
import React from "react";
import { About, mail } from "./Helper";
const Footer = () => {
  return (
    <div>
      <div className="bg-[#1777D0] px-4 w-full">
        <div className=" max-w-[1296px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pb-[50px] max-sm:pt-5 max-sm:pb-5 lg:gap-[50px] md:gap-[30px] gap-[20px] jusitfy-end pt-[45px]">
          <div>
            <Image src="/img/frizit.png" width={180} height={60} alt="frizit" />
            <p
              className="text-[#FFF] font-poppins sm:text-[18px] text-base sm:leading-[166%] lg:pt-[55px]
             md:pt-[30px] pt-[20px] max-sm:pt-[8px] max-w-[345px] w-full "
            >
              We serve you Cold. Cold Chain service now just a click away,
              Frizit now.
            </p>
          </div>

          {/* link section */}
          <div className="flex flex-col sm:items-center">
            <p className="text-[#FFF] font-poppins md:text-[22px] text-lg font-bold leading-[120%] ">
              Links
            </p>
            {About.map((items, index) => (
              <div key={index} className="flex flex-col">
                <Link
                  className="text-[#FFF] font-poppins ms:text-base text-sm font-bold md:leading-[150%] 
                  lg:pt-[34px] md:pt-[20px] pt-2 "
                  href="#"
                >
                  {items.p}
                </Link>
              </div>
            ))}
          </div>
          {/* section get */}
          <div className="max-w-[500px] w-full ">
            <p className="text-[#fff] font-poppins md:text-[22px] text-lg font-bold leading-[120%]">
              Get In Touch
            </p>
            {mail.map((items, index) => (
              <div
                key={index}
                className="flex gap-[10px] lg:pt-[31px] md:pt-[20px] pt-2  "
              >
                <Image src={items.imga} width={24} height={24} alt="img" />
                <Link
                  className="text-[#FFf]  font-poppins leading-[120%] d:text-[19px] text-[14px] "
                  href={`${items.p}`}
                >
                  {items.p}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#3E96E8] w-full">
        <p className="text-[#fff] text-center font-roboto text-[15px] leading-[120%] md:py-[26px] sm:py-[15px] py-2 max-lg:px-4 ">
          ©2024. All Rights Reserved Frizit(coldserveinnovations pvt ltd)
        </p>
      </div>
    </div>
  );
};
export default Footer;

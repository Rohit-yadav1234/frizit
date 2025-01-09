import Image from "next/image";
import { Ourservices, Ourservices2, Ourservices3 } from "./common/Helper";


const OurServices = () => {
  return (
    <div id="ourservices" className="max-w-[1370px] w-full mx-auto pb-[25px] px-4 max-sm:pt-4">
      <p className="text-[#E9EBEC] xl:text-[130px] max-sm:hidden lg:text-[80px] text-[60px] font-poppins font-bold leading-[107.6%] tracking-[2px] text-center whitespace-nowrap overflow-hidden">
        Our Services
      </p>

      <div className="xl:mt-[-100px] sm:mt-[-60px] flex flex-col lg:gap-[11px] gap-[4px] ">
        <p className="text-[#1777D0] font-poppins lg:text-[48px] md:text-[41px] sm:text-[35px] text-[31px] font-bold leading-[120%] ">
          Our Services
        </p>
        <Image src="/img/line.png" width={218} height={7} alt="line-img" />
      </div>
      <p className="max-w-[496px] w-full  font-poppins xl:text-5xl lg:text-4xl sm:text-2xl text-xl font-bold leading-[115%] lg:mt-[43px] md:mt-[38px] sm:mt-[34px] mt-[28px] ">
        We offer the highest quality services
      </p>
      <p className="text-[#212529] font-poppins lg:text-[28px] text-[24px] font-bold leading-[111%] lg:mt-[53px] md:mt-10 mt-5 ">
        Reefer transport
      </p>
      <p className="text-[#595959] md:text-[17px] ms:text-sm text-xs font-bold lg:leading-[27px] md:leading-6 leading-[18px] sm:leading-[22px] font-poppins md:mt-[20px] mt-[10px] ">
        Experience the safe and reliable delivery of temperature-sensitive
        goods, ensuring optimal conditions throughout the journey to preserve
        freshness and quality, with temperature visibility every step of the
        way. Whether you require a vehicle for inter-city or intra-city needs,
        we've got you covered.
      </p>

      <div className="flex justify-between gap-5 items-center lg:mt-[34.12px] mt-[20px]  max-lg:flex-wrap">
        <div className="lg:max-w-[818px] w-full flex flex-col  md:gap-[32px] sm:gap-[26px] gap-[18px] ">
          {Ourservices.map((item, index) => (
            <div
              key={index}
              className="flex md:gap-[15px] sm:gap-[10px] gap-2 items-center rounded-t-md hover:pl-4 duration-500 hover:border-b-4 hover:border-[#1777D0] pb-2 hover:shadow-[0_0_8px_-3px_#000]"
            >
              <Image
                src={item.img}
                width={56}
                height={56}
                alt="reefer-img"
                className="w-8 sm:w-10 md:w-[56px] h-8 sm:h-10 md:h-[56px]"
              />
              <div className="flex flex-col md:gap-[13px] gap-1 ">
                <p className="text-[#1A2E35] md:text-[17px] text-base font-poppins font-bold leading-5">
                  {item.title}
                </p>
                <p className="md:text-[15px]  md:text-sm text-xs font-poppins md:leading-[22px] leading-[18px] text-[#595959] ">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Image
          src="/img/offer-img.png"
          width="526"
          height="344"
          alt="offer-img"
          className="max-lg:mx-auto"
        />
      </div>

      {/* section 2  */}
      <section className=" lg:mt-[75.88px] md:mt-[65px] sm:mt-[45px] mt-8 ">
        <div className="flex justify-between md:gap-5 gap-3 items-center max-lg:flex-wrap-reverse">
          <Image
            src="/img/coldstorage.png"
            width="526"
            height="392"
            alt="offer-img"
            className=" max-lg:mx-auto"
          />

          <div className=" lg:max-w-[780px] w-full flex flex-col  xl:gap-[52px] lg:gap-[30px] md:gap-[24px] sm:gap-[22px] gap-[18px] ">
            <div className="flex flex-col xl:gap-[25px] md:gap-3 gap-2 ">
              <p className="text-[#212529] font-poppins lg:text-[28px] md:text-2xl text-xl font-bold leading-[111%]">
                Cold storage
              </p>
              <p className="text-[#595959] md:text-base text-sm lg:leading-[27px] leading-[24px] font-poppins ">
                With our network of partners nationwide, we are dedicated to
                offering cold storage solutions tailored to your specific needs,
                conveniently located near your preferred location.
              </p>
            </div>

            <div className="lg:max-w-[689px] w-full flex flex-col  lg:gap-[30px] gap-5 ">
              {Ourservices2.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-[15px] items-center rounded-t-md hover:pl-4 duration-500 hover:border-b-4 hover:border-[#1777D0] pb-2 hover:shadow-[0_0_8px_-3px_#000]"
                >
                  <Image
                    src={item.img}
                    width={56}
                    height={56}
                    alt="reefer-img"
                    className="w-8 sm:w-10 md:w-[56px] h-8 sm:h-10 md:h-[56px]"
                  />
                  <div className="flex flex-col md:gap-[13px] gap-1 ">
                    <p className="text-[#1A2E35] md:text-[17px] text-base font-poppins font-bold leading-5">
                      {item.title}
                    </p>
                    <p className="md:text-[15px]  md:text-sm text-xs font-poppins md:leading-[22px] leading-[18px] text-[#595959] ">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section className="xl:mt-[70px]  lg:mt-[60px]  md:mt-[50px] sm:mt-[40px] mt-[30px] ">
        <p
          className="text-[#212529] font-poppins lg:text-[28px] text-[24px] font-bold leading-[111%] flex
         flex-col gap-1 "
        >
          Integrated cold chain service
          <span className="lg:text-[28px] md:text-[24px] sm:text-[22px] text-[20px] font-light leading-[50px] font-Poppins ">
            (Pay as per usage)
          </span>
        </p>
        <p className="text-[#595959]  md:text-[17px] ms:text-sm text-xs font-bold  lg:leading-[27px] md:leading-[24px] leading-[22px] font-poppins lg:mt-[33px]  md:mt-[25px]  sm:mt-[22px]  mt-[10px]  ">
          Let us take care of your Cold Chain requirements while you concentrate
          on sales and expanding your business.Our specially tailored service
          ensures hassle-free expansion across the globe. What all are there in
          this service -
        </p>

        <div className="flex justify-between gap-5 items-center lg:mt-[48px] md:mt-[42px] sm:mt-[35px] mt-[28px]  max-lg:flex-wrap-reverse ">
          <div className="max-w-[746px] w-full  flex flex-col  xl:gap-[29px] sm:gap-4 gap-2 ">
            {Ourservices3.map((item, index) => (
              <div
                key={index}
                className="flex  md:gap-[15px] sm:gap-[10px] gap-2 items-center rounded-t-md hover:pl-4 duration-500 hover:border-b-4 hover:border-[#1777D0] pb-2 hover:shadow-[0_0_8px_-3px_#000]"
              >
                <Image
                  src={item.img}
                  width={56}
                  height={56}
                  alt="reefer-img"
                  className="w-8 sm:w-10 md:w-[56px] h-8 sm:h-10 md:h-[56px] "
                />

                <p className="text-[#1A2E35]  md:text-[17px] sm:text-base text-sm  font-poppins font-bold leading-5 ">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          <Image
            src="/img/offer.png"
            width="526"
            height="344"
            alt="offer-img"
            className="max-lg:mx-auto   "
          />
        </div>
      </section>
    </div>
  );
};

export default OurServices;

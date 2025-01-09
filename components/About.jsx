import Image from "next/image";
const About = () => {
  return (
    <div id="aboutus">
      <div className="px-4 bg-[#F2FAFF] w-full">
        <div className="max-w-[1320px] w-full mx-auto">
          <p className="text-[#E9EBEC] text-[54px] md:text-[130px] font-poppins font-bold leading-[107.6%] tracking-[6px] md:tracking-[37px] text-center whitespace-nowrap overflow-hidden">
            About Us
          </p>

          <div className="mt-[-37px] md:mt-[-100px] flex flex-col gap-[11px]">
            <p className="text-[#1777D0] font-poppins text-[48px] font-bold leading-[120%] ">
              About Us
            </p>
            <Image src="/img/line.png" width={218} height={7} alt="line-img" />
          </div>

          <div className="flex gap-[20px] justify-between items-end pt-[33px] pb-[44px] flex-col lg:flex-row">
            <Image
              className="max-lg:w-full"
              src="/img/aboutimg.png"
              alt="about-img"
              width={563}
              height={565}
            />

            <div className="flex flex-col gap-[45px]">
              <div className="flex flex-col gap-[10px] sm:gap-[24px]">
                <h2 className="text-[#212529] font-poppins text-[24px] sm:text-[28px] font-bold leading-[120%]">
                  Mission -
                </h2>
                <p className="text-[#595959] font-poppins sm:text-base font-normal leading-[150%] text-[14px]">
                  At FRIZIT, our mission is to revolutionize
                  temperature-sensitive logistics by offering a comprehensive
                  and streamlined Cold Chain solution to every business. Our
                  commitment is to eliminate hesitations and challenges in
                  temperature-controlled logistics, enabling businesses to focus
                  their efforts on product development and innovation. Through
                  our reliable and accessible Cold Chain solutions, we empower
                  individuals and enterprises with the necessary tools to
                  expertly preserve and transport perishable goods.
                </p>
              </div>

              <div className="flex flex-col gap-[10px] sm:gap-[24px]">
                <h2 className="text-[#212529] font-poppins text-[24px] sm:text-[28px] font-bold leading-[120%]">
                  Vision -
                </h2>
                <p className="text-[#595959] font-poppins sm:text-base text-[14px] font-normal leading-[150%]">
                  Our vision is to democratize Cold Chain accessibility across
                  India, ensuring that every individual, community, and business
                  has the means to seamlessly balance the demand and supply of
                  perishable goods. By establishing an inclusive and
                  technologically advanced Cold Chain network, we aspire to
                  empower the nation with the tools to preserve freshness,
                  reduce waste, and foster economic growth. Through innovation,
                  collaboration, and nationwide outreach, we aim to create a
                  sustainable and interconnected Cold Chain ecosystem that
                  drives efficiency, elevates livelihoods, and contributes to a
                  more resilient and nourished India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Startup folks start */}
      <div className="px-4">
        <div className="max-w-[1320px] w-full mx-auto py-[19px] flex gap-5 justify-between items-end lg:flex-row flex-col-reverse">
          <div className="flex flex-col gap-[20px] md:gap-[36px]">
            <div className="flex flex-col md:gap-[33px] gap-[15px]">
              <p className="text-[#1777D0] font-poppins text-[26px] font-bold leading-[120%]">
                Who We Are ?
              </p>
              <p className="text-[#212529] font-poppins text-[35px] md:text-[48px] font-bold leading-[120%]">
                Startup folks
              </p>
            </div>
            <p className="text-[#595959] font-poppins text-base md:text-xl font-light leading-[150%] w-full lg:max-w-[701px] pb-[55px]">
              Drawing from various sectors such as Shipping, Start-ups,
              Fin-tech, Dairy, Logistics, and Cold Storage, we've come together
              to leverage our collective expertise in establishing a leading
              name in reliable Cold Chain solutions.
            </p>
          </div>

          <div>
            <Image
              src="/img/team.png"
              width={445}
              height={270}
              alt="team-img"
            />
          </div>
        </div>
      </div>
      {/*  Startup folks end */}
    </div>
  );
};

export default About;
